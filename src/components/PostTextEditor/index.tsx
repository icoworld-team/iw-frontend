import React from 'react'
import { Editor } from 'slate-react'
import { Value } from 'slate'
import { withStyles, createStyles } from "@material-ui/core/styles";
import Icon from '@material-ui/core/Icon';

import InstantReplace from "./Replacer"
import isUrl from "is-url";
import Plain from "slate-plain-serializer";

const styles = () => createStyles({
  button: {
    marginRight: '10px',
    cursor: 'pointer',
    color: 'black',
  },
  buttonActive: {
    marginRight: '10px',
    cursor: 'pointer',
    color: 'rgb(204, 204, 204)',
  },
  toolbar: {
    display: 'flex',
  },
  icon: {
    fontSize: '18px',
    fontFamily: 'Material Icons!important',
  },
  postTextarea: {
    width: '100%',
    resize: 'none',
    maxHeight: '418px',
  },
});

const DEFAULT_NODE = 'paragraph'

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: '',
              },
            ],
          },
        ],
      },
    ],
  },
})

function MarkHotkey(options: any) {
  const { type, key } = options

  return {
    onKeyDown(event: any, editor: any, next: any) {
      if (!event.ctrlKey || event.key != key) return next()
      event.preventDefault()
      editor.toggleMark(type)
    },
  }
}

function BlockHotkey(options: any) {
  const { type, key } = options

  return {
    onKeyDown(event: any, editor: any, next: any) {
      if (!event.ctrlKey || event.key != key) return next()
      event.preventDefault()

      const isActiveBlock = editor.value.blocks.some((block: any) => block.type == type)
      editor.setBlocks(isActiveBlock ? 'paragraph' : type)
    },
  }
}

const AddURL = (editor: any, lastWord: any) => {
  if (isUrl(lastWord)) {
    editor.moveFocusBackward(lastWord.length); // select last word
    editor.unwrapInline("link"); // remove existing urls
    const href = lastWord.startsWith("http") ? lastWord : `https://${lastWord}`;
    editor.wrapInline({ type: "link", data: { href } }); // set URL inline
    editor.moveFocusForward(lastWord.length); // deselect it
  }
};

const AddHashtag = (editor: any, lastWord: string) => {
  let pattern = /(#[\w|а-яА-ЯёЁ]+)/g;
  editor.moveFocusBackward(lastWord.length);
  editor.unwrapInline('hashtag');
  if (lastWord.match(pattern)) {
    editor.wrapInline({ type: 'hashtag' });
  }
  editor.moveFocusForward(lastWord.length);
};

const plugins = [
  MarkHotkey({ key: 'b', type: 'bold' }),
  MarkHotkey({ key: '`', type: 'code' }),
  MarkHotkey({ key: 'i', type: 'italic' }),
  MarkHotkey({ key: 'u', type: 'underline' }),
  BlockHotkey({ key: 'q', type: 'quote' }),
  InstantReplace([AddURL, AddHashtag]),
]

function wrapLink(editor: any, href: any) {
  editor.wrapInline({
    type: 'link',
    data: { href },
  })

  editor.moveToEnd()
}

function unwrapLink(editor: any) {
  editor.unwrapInline('link')
}

class App extends React.Component<any, any> {
  state = {
    value: initialValue,
    text: '',
    tags: [],
  }

  editor?: any
  ref = (editor: any) => {
    this.editor = editor
  }

  hasMark = (type: any) => {
    const { value } = this.state
    return value.activeMarks.some((mark: any) => mark.type === type)
  }

  hasBlock = (type: any): boolean => {
    const { value } = this.state
    return value.blocks.some((node: any) => node.type == type)
  }

  hasLinks = () => {
    const { value } = this.state
    return value.inlines.some((inline: any) => inline.type == 'link')
  }

  onChange = ({ value }: any) => {
    if (value.document !== this.state.value.document) {
      const content = JSON.stringify(value.toJSON())
      localStorage.setItem('content', content)
    }

    let pattern = /(#[\w|а-яА-ЯёЁ]+)/g;
    let arr: Array<String> | null = Plain.serialize(value).match(pattern);
    if(arr) {
      this.setState({
        tags: arr
      });
    } else {
      this.setState({
        tags: []
      });
    }

    this.setState({ value, text: Plain.serialize(value) })

    this.props.updateData(this.state)
  }
  
  render() {
    const { classes } = this.props;

    return (
      <div className='editor'>
        <ul className={classes.toolbar}>
          <li className={this.hasLinks() ? classes.button : classes.buttonActive} onMouseDown={this.onClickLink}>
            <Icon className={this.props.classes.icon}>link</Icon>
          </li>
          {this.renderMarkButton('italic', 'format_italic')}
          {this.renderMarkButton('underline', 'format_underlined')}
          {this.renderMarkButton('code', 'code')}
          {this.renderMarkButton('bold', 'format_bold')}
          {this.renderBlockButton('heading-one', 'looks_one')}
          {this.renderBlockButton('heading-two', 'looks_two')}
          {this.renderBlockButton('block-quote', 'format_quote')}
          {this.renderBlockButton('numbered-list', 'format_list_numbered')}
          {this.renderBlockButton('bulleted-list', 'format_list_bulleted')}
          {this.renderBlockButton('paragraph', 'format_align_left')}
          {this.renderBlockButton('align-center', 'format_align_center')}
          {this.renderBlockButton('align-right', 'format_align_right')}
        </ul>
        <Editor
          className={`input border-input ${classes.postTextarea}`}
          spellCheck
          autoFocus
          placeholder="Write something..."
          plugins={plugins}
          ref={this.ref}
          value={this.state.value}
          onChange={this.onChange}
          renderNode={this.renderNode}
          renderMark={this.renderMark}
        />
      </div>
    )
  }

  renderMarkButton = (type: any, icon: any) => {
    const isActive = this.hasMark(type)
    const { classes } = this.props;

    return (
      <li
        className={isActive ? classes.button : classes.buttonActive}
        onMouseDown={(event: any) => this.onClickMark(event, type)}
      >
        <Icon className={this.props.classes.icon}>{icon}</Icon>
      </li>
    )
  }

  renderBlockButton = (type: any, icon: any) => {
    let isActive = this.hasBlock(type)
    const { classes } = this.props;

    if (['numbered-list', 'bulleted-list'].includes(type)) {
      const { value: { document, blocks } } = this.state

      if (blocks.size > 0) {
        const parent: any = document.getParent(blocks.first().key)
        isActive !== null ? isActive = this.hasBlock('list-item') && parent && parent.type === type : null
      }
    }

    return (
      <li
        className={isActive ? classes.button : classes.buttonActive}
        onMouseDown={(event: any) => this.onClickBlock(event, type)}
      >
        <Icon className={this.props.classes.icon}>{icon}</Icon>
      </li>
    )
  }

  onClickLink = (event: any) => {
    event.preventDefault()

    const { editor } = this
    const { value } = editor
    const hasLinks = this.hasLinks()

    if (hasLinks) {
      editor.command(unwrapLink)
    } else if (value.selection.isExpanded) {
      const href = window.prompt('Enter the URL of the link:')

      if (href === null) {
        return
      }

      editor.command(wrapLink, href)
    } else {
      const href = window.prompt('Enter the URL of the link:')

      if (href === null) {
        return
      }

      const text = window.prompt('Enter the text for the link:')

      if (text === null) {
        return
      }

      editor
        .insertText(text)
        .moveFocusBackward(text.length)
        .command(wrapLink, href)
    }
  }

  renderNode = (props: any, editor: any, next: any) => {
    const { node, attributes, children } = props

    switch (props.node.type) {
      case 'block-quote':
        return <blockquote {...attributes}>{children}</blockquote>
      case 'bulleted-list':
        return <ul style={{listStyle: 'disc', margin: '1em 0', paddingLeft: '40px'}} {...attributes}>{children}</ul>
      case 'heading-one':
        return <h1 {...attributes}>{children}</h1>
      case 'heading-two':
        return <h2 {...attributes}>{children}</h2>
      case 'list-item':
        return <li {...attributes}>{children}</li>
      case 'hashtag':
        return <span style={{color: 'blue'}} {...attributes}>{children}</span>
      case 'numbered-list':
        return <ol {...attributes}>{children}</ol>
      case "link": {
        const { data } = node;
        const href = data.get("href");
        return (
          <a href={href} {...attributes}>
            {children}
          </a>
        );
      }
      case 'paragraph':
        return (
          <p {...props.attributes} className={node.data.get('className')}>
            {children}
          </p>
        )
      case 'quote':
        return <blockquote {...props.attributes}>{children}</blockquote>
      case 'align-center':
        return <p style={{textAlign: 'center'}} {...props.attributes} className={node.data.get('className')}>{children}</p>
      case 'align-right':
        return <p style={{textAlign: 'right'}} {...props.attributes} className={node.data.get('className')}>{children}</p>
      case 'h':
        const level = node.data.get('level')
        const Tag = `h${level}`
        return <Tag {...attributes}>{children}</Tag>
      case 'image': {
        const src = node.data.get('src')
        return <img {...attributes} src={src} />
        }
      default:
        return next()
    }
  }

  renderMark = (props: any, editor: any, next: any) => {
    const { mark, attributes } = props
    switch (mark.type) {
      case 'bold':
        return <strong {...attributes}>{props.children}</strong>
      case 'italic':
        return <em {...attributes}>{props.children}</em>
      case 'underline':
        return <u {...attributes}>{props.children}</u>
      case 'code':
        return <code className='code' {...attributes}>{props.children}</code>
      default:
        return next()
    }
  }

  onClickMark = (event: any, type: any) => {
    event.preventDefault()
    this.editor.toggleMark(type)
  }

  onClickBlock = (event: any, type: any) => {
    event.preventDefault()

    const { editor } = this
    const { value } = editor
    const { document } = value

    if (type != 'bulleted-list' && type != 'numbered-list') {
      const isActive = this.hasBlock(type)
      const isList = this.hasBlock('list-item')

      if (isList) {
        editor
          .setBlocks(isActive ? DEFAULT_NODE : type)
          .unwrapBlock('bulleted-list')
          .unwrapBlock('numbered-list')
      } else {
        editor.setBlocks(isActive ? DEFAULT_NODE : type)
      }
    } else {
      const isList = this.hasBlock('list-item')
      const isType = value.blocks.some((block: any) => {
        return !!document.getClosest(block.key, (parent: any) => parent.type == type)
      })

      if (isList && isType) {
        editor
          .setBlocks(DEFAULT_NODE)
          .unwrapBlock('bulleted-list')
          .unwrapBlock('numbered-list')
      } else if (isList) {
        editor
          .unwrapBlock(
            type == 'bulleted-list' ? 'numbered-list' : 'bulleted-list'
          )
          .wrapBlock(type)
      } else {
        editor.setBlocks('list-item').wrapBlock(type)
      }
    }
  }
}

export default withStyles(styles)(App)
