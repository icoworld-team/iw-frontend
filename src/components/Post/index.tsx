import React, {Component} from 'react'
import { createStyles, withStyles } from '@material-ui/core/styles';
import Favorite from '@material-ui/icons/Favorite'
import Comment from '@material-ui/icons/Comment'
import Repeat from '@material-ui/icons/Repeat'
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import './style.css'
import Fade from "@material-ui/core/Fade";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Input from '@material-ui/core/Input';
import Send from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'


const DELETE_POST = gql`
  mutation deletePost($postId: ID!) {
    deletePost(postId: $postId)
  }
`;

const EDIT_POST = gql`
  mutation editPost($input: PostEditInput!) {
    editPost(input: $input) {
        postId
        userId
        date
        content
        tags
    }
  }
`;

const SEARCH_POST = gql`
    query searchPost($input: PostSearchingParamsInput!) {
        searchPost(input: $input) {
            postId
            userId
            userName
            date
            content
            tags
        }
    }
`;

const styles = () => createStyles({
    textField: {
      width: '100%',
    },
    show: {
      height: '32px',
    },
    hidden: {
        height: 0,
    },
    container: {
        overflow: 'hidden',
        transition: '.3s'
    },
    menu: {
        transform: 'translateX(50%)'
    },
    textArea: {
        width: '100%',
        outline: 'none',
        resize: 'none',
        fontFamily: 'inherit',
        fontSize: 'inherit'
    },
    button: {
        marginLeft: '5px'
    }
  });

class Post extends Component<any> {
    state = {
        anchorEl: undefined,
        comment: '',
        showInput: false,
        editMode: false,
        postBody: this.props.post.content
    };

    handleClick = (event:any)=> {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = (event:any)=> {
        this.setState({ anchorEl: null});
    };

    handleChange = (e:any) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleClickShowInput = () => {
        this.setState(state => ({ showInput: !this.state.showInput }));
    };

    handleSendComment = () => {
        alert(`Введённое сообщение: ${this.state.comment}`);
    };

    handleKeyDownSendComment = (event: any) => {
        if(event.keyCode == 13) {
            this.handleSendComment();
        }
    };

    handleEdit = () => {
        this.setState({ anchorEl: null, editMode: !this.state.editMode});
    };

    render() {
        const { post, authUserId } = this.props;
        const { classes } = this.props;
        return (
            <div className="post">
                <div className="post-header">
                    <div className="post-left-header">
                        <div>
                            <img className="post-avatar" src="profile.jpeg" width="50px"/>
                        </div>
                        <div className="post-header-text">
                            <div className="inline-flex">
                                <div><h3 className="post-user-name">{post.userName}</h3></div>
                                <div><p className="sub-text">{post.userName}</p></div>
                            </div>
                            <div><p className="sub-text">{new Date(post.date).toLocaleDateString()}</p></div>
                        </div>
                    </div>
                    <IconButton className={classes.menu} aria-label="More" aria-owns={this.state.anchorEl ? 'fade-menu' : undefined} aria-haspopup="true" onClick={this.handleClick}>
                        <MoreVertIcon/>
                    </IconButton>
                    {post.userId !== authUserId
                        ? <Menu id="fade-menu" anchorEl={this.state.anchorEl} open={Boolean(this.state.anchorEl)}
                              onClose={this.handleClose} TransitionComponent={Fade}>
                            <MenuItem name="complain" id="complain" onClick={this.handleClose}>Complain</MenuItem>
                        </Menu>
                        : <Menu id="fade-menu" anchorEl={this.state.anchorEl} open={Boolean(this.state.anchorEl)}
                                onClose={this.handleClose} TransitionComponent={Fade}>
                            <MenuItem name="pin" id="pin" onClick={this.handleClose}>Pin to top</MenuItem>
                            <MenuItem name="edit" id="edit" onClick={this.handleEdit}>Edit</MenuItem>
                            <Mutation mutation={DELETE_POST} onCompleted={this.handleClose} onError={(error)=>console.log(error)}
                                      update={(cache, {data: { deletePost }}) => {
                                          console.log(deletePost);
                                          const data = cache.readQuery({query: SEARCH_POST, variables: {input: {userId: authUserId}}});
                                          console.log(data);
                                          const posts = (data as any).searchPost.filter((post:any) => post.postId !== deletePost);
                                          console.log(posts);
                                          cache.writeQuery({query: SEARCH_POST, variables: {input: {userId: authUserId}}, data: {searchPost: posts}});
                                      }}>
                                {deletePost => {
                                    return (
                                        <MenuItem name="delete" id="delete" onClick={() => deletePost({variables: {postId: post.postId}})}>Delete</MenuItem>
                                    )
                                }}
                            </Mutation>
                        </Menu>
                    }
                </div>
                    {this.state.editMode
                        ? ( <div className="post-body">
                                <textarea className={classes.textArea} name="postBody" rows={3} value={this.state.postBody} onChange={this.handleChange}></textarea>
                                <div className="edit-buttons-block">
                                    <Button variant="outlined" color="primary" onClick={this.handleEdit}>Cancel</Button>
                                    <Mutation mutation={EDIT_POST} onCompleted={()=>this.setState({editMode: false})} onError={(error)=>console.log(error)}>
                                        {editPost => {
                                            return <Button className={classes.button} variant="raised" color="primary"
                                                           onClick={() => editPost({variables: {input: {postId: post.postId, content: this.state.postBody, tags: []}}})}>Save</Button>
                                        }}
                                    </Mutation>
                                </div>
                            </div>
                        )
                        : <div className="post-body">{post.content}</div>}
                <div className="post-footer">
                    <IconButton>
                        <Favorite color="primary"/>
                    </IconButton>
                    <IconButton>
                        <Comment
                            color="primary"
                            onClick={this.handleClickShowInput}
                        />
                    </IconButton>
                    <IconButton>
                        <Repeat color="primary"/>
                    </IconButton>
                </div>
                <div className={`${classes.container} ${this.state.showInput ? classes.show : classes.hidden}`}>
                    <FormControl className={classes.textField}>
                        <Input
                            id="comment"
                            name="comment"
                            type='text'
                            value={this.state.comment}
                            onChange={this.handleChange}
                            onKeyDown={this.handleKeyDownSendComment}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Toggle comment input"
                                    onClick={this.handleSendComment}
                                >
                                <Send />
                                </IconButton>
                            </InputAdornment>
                            }
                        />
                    </FormControl>
                </div>
                <Divider/>
            </div>
        )
    }

}

export default withStyles(styles)(Post);