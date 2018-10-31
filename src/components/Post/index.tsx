import React, { Component } from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
// import Fade from "@material-ui/core/Fade";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import Comment from '@material-ui/icons/Comment';
import Repeat from '@material-ui/icons/Repeat';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Send from '@material-ui/icons/Send';
import ModalComplain from '../ModalComplain';
import PostComments from '../PostComments';
import SnackBar from '@material-ui/core/Snackbar'
import { Mutation } from 'react-apollo'
import { connect } from "react-redux";
import {
    DELETE_POST,
    PIN_POST,
    EDIT_POST,
    CREATE_COMMENT,
    GET_COMMENTS,
    SEARCH_POST_IN_PROFILE,
    LIKE_POST, SEARCH_POST, REPOST, DELETE_REPOST, LIKE_REPOST,
    GET_USER
} from '../../api/graphql'
import { relativeTime } from '../../utils'
import { endpoint } from "../../api"
import { Link } from "react-router-dom";

const styles = () => createStyles({
    postCard: {
        marginBottom: '5px',
    },
    postBody: {
        padding: '20px 15px 10px 15px',
        borderBottom: '1px solid #edeef0',
    },

    postHeader: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    postHeaderLeft: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    postAvatar: {
        width: '38px',
        height: '38px',
    },
    postHeaderText: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        marginLeft: '10px',
    },
    userInfo: {
        display: 'inline-flex',
        alignItems: 'flex-end',
    },
    userName: {
        color: '#171717',
        fontWeight: 600,
        margin: 0,
        fontSize: '14px',
        lineHeight: '19px',
    },
    userLogin: {
        marginLeft: '5px',
        color: '#8b8b8b',
        fontSize: '14px',
        lineHeight: '19px',
    },
    postDate: {
        color: '#8b8b8b',
        fontSize: '14px',
        lineHeight: '19px',
    },
    postMenu: {
        // transform: 'translateX(50%)',
        width: '20px',
        height: '19px',
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    postMenuLabel: {
        height: '8px',
    },
    postMenuIcon: {},

    postContent: {
        marginTop: '10px',
        fontSize: '14px',
        lineHeight: '19px',
        color: '#171717',
        paddingBottom: '10px',
        borderBottom: '1px solid #edeef0',
        wordBreak: 'break-word',
    },

    postFooter: {
        marginTop: '10px',
    },
    footerIconLabel: {
        margin: 0,
        marginRight: '10px',
    },
    footerIcon: {
        marginRight: '3px',
    },
    checkedIcon: {
        color: '#ff0000'
    },
    iconRoot: {
        width: '27px',
        height: '27px',
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },

    hideComments: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        cursor: 'pointer',
        transition: '.3s',
        '&:hover': {
            backgroundColor: '#efefef',
        },
    },
    hideCommentsText: {
        fontSize: '14px',
        lineHeight: '19px',
        color: '#8b8b8b',
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
    textArea: {
        width: '100%',
        outline: 'none',
        resize: 'none',
        fontFamily: 'inherit',
        fontSize: 'inherit'
    },
    postTextarea: {
        width: '100%',
        resize: 'none',
    },
    editButtonsBlock: {
        float: 'right',
        '& button': {
            minWidth: '85px',
            minHeight: '30px',
            fontSize: '14px',
            marginTop: '7px'
        }
    },
    saveButton: {
        marginLeft: '5px',
    },

    postImage: {
        maxWidth: '500px',
        marginTop: '10px'
    },
    link: {
        textDecoration: 'none'
    },
    paper: {
        marginTop: '20px',
    },
});

class Post extends Component<any> {
    state = {
        anchorEl: undefined,
        comment: '',
        showInput: false,
        editMode: false,
        postBody: this.props.post.content,
        showComments: false,
        isLiked: this.props.post.likes ? this.props.post.likes.includes(this.props.authUser.id) : false,
        snackBarOpen: false,
        postText: '',
        tags: [],
        textareaHeight: 58,
        openComplainModal: false,
    };

    postWithTagsReplacer = (text: string, tags: Array<string>) => {
        let replaceredText = text;
    
        tags.forEach(function(item) {
            let pattern = new RegExp('(' + item + ')', 'g')
            let elem = `<span class="tag">$1</span>`
            replaceredText = replaceredText.replace(pattern, elem)
        })
    
        replaceredText = this.postReplacer(replaceredText);
    
        return (
            replaceredText
        )
    }
    
    postReplacer = (text: string) => {
        let replaceredText = text;
    
        let linksRegExp = /(https?:\/\/[\w\/?.&-=]+)/g;
        let newParagraphRegExp = new RegExp('\n', 'g')
    
        if(linksRegExp.test(replaceredText)) {
            replaceredText = replaceredText.replace(linksRegExp, `<a target="_blank" href="$1">$1</a>`);
        }
    
        if(newParagraphRegExp.test(replaceredText)) {
            replaceredText = replaceredText.replace(newParagraphRegExp, `</br>`);
        }
    
        return (
            replaceredText
        )
    }

    tagSearch = (e: any) => {
        let elem = e.target
        if(elem.getAttribute('class') === 'tag') {
            this.props.updateData(elem.innerHTML)
        }
    }

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
    handleTextareaChange = (e:any) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        
        let pattern = /(#[\w|а-яА-ЯёЁ]+)/g;
        let arr: Array<String> = e.target.value.match(pattern);
        if(arr) {
            this.setState({
                tags: arr
            });
        } else {
            this.setState({
                tags: []
            });
        }

        let postShadowTextarea: any = document.getElementById('postShadowTextarea');
        postShadowTextarea.value = e.target.value;
        let height = postShadowTextarea.scrollHeight;
        this.setState({
            textareaHeight: height + 20
        });
    };

    handleClickShowInput = () => {
        this.setState((state:any) => ({ showInput: !state.showInput }));
    };

    handleSendComment = () => {

    };

    handleKeyDownSendComment = (event: any) => {
        if(event.keyCode == 13) {
            this.handleSendComment();
        }
    };

    handleEdit = () => {
        this.setState({ anchorEl: null, editMode: !this.state.editMode});
    };

    handleShowComments = () => {
        this.setState((state:any) => ({ showComments: !state.showComments }));
    };

    handleSnackBar = () => {
        this.setState({snackBarOpen: false})
    };

    handleOpenModal = () => {
        this.setState({openComplainModal: true})
    };

    handleCloseModal = () => {
        this.setState({openComplainModal: false})
    };

    render() {
        const { post, authUser, classes } = this.props;

        return (
            <div className={`card ${classes.postCard}`}>
                <div className={classes.postBody}>
                    <div className={classes.postHeader}>
                        <Link className={classes.link} to={{ pathname: "/profile", state: { id: post.userId } }}>
                            <div className={classes.postHeaderLeft}>
                                <Avatar className={classes.postAvatar} src={post.avatar ? `${endpoint}/images/${post.userId}/${post.avatar}` : "profile.jpeg"} />
                                <div className={classes.postHeaderText}>
                                    <div className={classes.userInfo}>
                                        <Typography className={classes.userName}>{post.userName}</Typography>
                                        <Typography className={classes.userLogin}>{`@${post.userLogin}`}</Typography>
                                    </div>

                                    <Typography className={classes.postDate}>
                                        {`${relativeTime(post.date)} ${post.__typename === 'Repost' ? '*Repost*' : ''} ${this.props.pinPost === post.postId ? '*Pined*' : '' }`}
                                        </Typography>
                                </div>
                            </div>
                        </Link>
                        <IconButton disableRipple classes={{ label: classes.postMenuLabel }} className={classes.postMenu} aria-label="More" aria-owns={this.state.anchorEl ? 'fade-menu' : undefined} aria-haspopup="true" onClick={this.handleClick}>
                            <MoreHorizIcon className={classes.postMenuIcon} />
                        </IconButton>
                        {post.reposted
                            ? <Menu classes={{paper: classes.paper}} id="fade-menu" anchorEl={this.state.anchorEl}
                                    open={Boolean(this.state.anchorEl)} onClose={this.handleClose}
                                    anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                                    transformOrigin={{vertical: 'top', horizontal: 'right'}}>
                                {this.props.location === '/profile' ? <Mutation mutation={PIN_POST} onCompleted={this.handleClose}
                                    onError={(error)=>console.log(error)}
                                >
                                    {pinPost => {
                                        return (
                                            this.props.pinPost !== post.postId
                                            ? <MenuItem name="pin" id="pin" onClick={() => pinPost({variables: {id: post.postId, pin: true}})}>Pin to top</MenuItem>
                                            : <MenuItem name="pin" id="pin" onClick={() => pinPost({variables: {id: post.postId, pin: false}})}>Unpin</MenuItem>
                                        )
                                    }}
                                </Mutation> : null}
                                <Mutation mutation={DELETE_REPOST} onCompleted={this.handleClose} onError={(error)=>console.log(error)}
                                          update={(cache, {data: { deleteRePost }}) => {
                                              const data = cache.readQuery({
                                                  query: SEARCH_POST_IN_PROFILE,
                                                  variables: {userId: authUser.id, searchText: ""}
                                              });
                                              const reposts = (data as any).searchPostInProfile.reposts.filter((post:any) => post.id !== this.props.post.id);
                                              cache.writeQuery({query: SEARCH_POST_IN_PROFILE, variables: {userId: authUser.id, searchText: ""}, data: {
                                                      searchPostInProfile: {
                                                          ...(data as any).searchPostInProfile,
                                                          reposts: reposts,
                                                      }}});
                                          }}>
                                    {deleteRePost => {
                                        return (
                                            <MenuItem name="delete" id="delete" onClick={() => deleteRePost({variables: {id: post.id}})}>Delete</MenuItem>
                                        )
                                    }}
                                </Mutation>
                            </Menu> :
                            post.userId !== authUser.id
                            ?
                            <Menu classes={{paper: classes.paper}} id="fade-menu" anchorEl={this.state.anchorEl}
                                open={Boolean(this.state.anchorEl)} onClose={this.handleClose}
                                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                                transformOrigin={{vertical: 'top', horizontal: 'right'}}>
                                <MenuItem name="complain" id="complain" onClick={this.handleOpenModal}>Complain</MenuItem>
                                <ModalComplain open={this.state.openComplainModal} onClose={this.handleCloseModal}/>
                            </Menu>
                            :
                            <Menu classes={{paper: classes.paper}} id="fade-menu" anchorEl={this.state.anchorEl} open={Boolean(this.state.anchorEl)}
                                onClose={this.handleClose}
                                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                                transformOrigin={{vertical: 'top', horizontal: 'right'}}>

                                {this.props.location === '/profile' ? <Mutation mutation={PIN_POST} onCompleted={this.handleClose}
                                    onError={(error)=>console.log(error)} refetchQueries={[{query: GET_USER, variables: {userId: authUser.id}}]}
                                >
                                    {pinPost => {
                                        return (
                                            this.props.pinPost !== post.postId
                                            ? <MenuItem name="pin" id="pin" onClick={() => pinPost({variables: {id: post.postId, pin: true}})}>Pin to top</MenuItem>
                                            : <MenuItem name="pin" id="pin" onClick={() => pinPost({variables: {id: post.postId, pin: false}})}>Unpin</MenuItem>
                                        )
                                    }}
                                </Mutation> : null}

                                <MenuItem name="edit" id="edit" onClick={this.handleEdit}>Edit</MenuItem>
                                <Mutation mutation={DELETE_POST} onCompleted={this.handleClose} onError={(error)=>console.log(error)}
                                    update={(cache, {data: { deletePost }}) => {
                                        const data = cache.readQuery({
                                            query: SEARCH_POST_IN_PROFILE,
                                            variables: {userId: authUser.id, searchText: ""}
                                        });
                                        const posts = (data as any).searchPostInProfile.posts.filter((post:any) => post.postId !== this.props.post.postId);
                                        cache.writeQuery({query: SEARCH_POST_IN_PROFILE, variables: {userId: authUser.id, searchText: ""}, data: {
                                            searchPostInProfile: {
                                                ...(data as any).searchPostInProfile,
                                                posts: posts,
                                                }}});
                                    }}>
                                    {deletePost => {
                                        return (
                                            <MenuItem name="delete" id="delete" onClick={() => deletePost({variables: {id: post.postId}})}>Delete</MenuItem>
                                        )
                                    }}
                                </Mutation>
                            </Menu>
                        }
                    </div>
                    {post.attachments && post.attachments.map((attachment:any) => (
                        <img className={classes.postImage} key={attachment} src={`${endpoint}/images/${post.userId}/${attachment}`}/>
                    ))}
                        {this.state.editMode
                            ? ( <div className={classes.postContent}>
                                    <div style={{position: 'relative'}}>
                                        <textarea className={`input border-input ${classes.postTextarea}`}
                                            name="postBody" id="postTextarea" value={this.state.postBody} onChange={this.handleTextareaChange}
                                            placeholder="Write something..." style={{minHeight: 58, height: this.state.textareaHeight}} />

                                        <textarea className={`input border-input ${classes.postTextarea}`}
                                            name="postShadowBody" id="postShadowTextarea" value={this.state.postBody}
                                            placeholder="Write something..." 
                                            style={{
                                                overflow: 'hidden',
                                                position: 'absolute',
                                                visibility: 'hidden',
                                                whiteSpace: 'pre-wrap'}} rows={1} tabIndex={-1} />
                                    </div>
                                    {/* <textarea className={classes.textArea} name="postBody" rows={3} value={this.state.postBody} onChange={this.handleChange}></textarea> */}
                                    <div className={classes.editButtonsBlock}>
                                        <Button variant="outlined" color="secondary" size="small" className={`button outline-button`} onClick={this.handleEdit}>Cancel</Button>
                                        <Mutation mutation={EDIT_POST} onCompleted={()=>this.setState({editMode: false})} onError={(error)=>console.log(error)}>
                                            {editPost => {
                                                return <Button className={`button fill-button ${classes.saveButton}`} variant="raised" color="primary"
                                                            onClick={() => editPost({variables: {input: {postId: post.postId, content: this.state.postBody, tags: this.state.tags}}})}>Save</Button>
                                            }}
                                        </Mutation>
                                    </div>
                                </div>
                            )
                            : <Typography className={classes.postContent} onClick={this.tagSearch} dangerouslySetInnerHTML={{ __html: post.tags.length ? this.postWithTagsReplacer(post.content, post.tags) : this.postReplacer(post.content) }}></Typography>}

                    <div className={classes.postFooter}>
                        <FormControlLabel
                            className={classes.footerIconLabel}
                            control={
                                post.reposted
                                    ? <Mutation mutation={LIKE_REPOST} onCompleted={() => this.setState((state:any) => ({isLiked: !state.isLiked}))} onError={(error)=>console.log(error)}
                                                refetchQueries={[{query: SEARCH_POST_IN_PROFILE, variables: {userId: authUser.id, searchText: ""}}, {query: SEARCH_POST, variables: {searchText: ""}}]}>
                                        {likeRePost => (
                                            <Checkbox
                                                disableRipple
                                                classes={{
                                                    root: classes.iconRoot,
                                                }}
                                                icon={<FavoriteBorder className={classes.footerIcon} />}
                                                checkedIcon={<Favorite className={`${classes.footerIcon} ${classes.checkedIcon}`} />}
                                                value="like"
                                                checked={this.state.isLiked}
                                                onChange={() => likeRePost({variables: {id: post.id, like: !this.state.isLiked}})}
                                            />
                                        )}
                                    </Mutation> :
                                <Mutation mutation={LIKE_POST} onCompleted={() => this.setState((state:any) => ({isLiked: !state.isLiked}))} onError={(error)=>console.log(error)}
                                          refetchQueries={[{query: SEARCH_POST_IN_PROFILE, variables: {userId: authUser.id, searchText: ""}}, {query: SEARCH_POST, variables: {searchText: ""}}]}>
                                    {likePost => (
                                        <Checkbox
                                            disableRipple
                                            classes={{
                                                root: classes.iconRoot,
                                            }}
                                            icon={<FavoriteBorder className={classes.footerIcon} />}
                                            checkedIcon={<Favorite className={`${classes.footerIcon} ${classes.checkedIcon}`} />}
                                            value="like"
                                            checked={this.state.isLiked}
                                            onChange={() => likePost({variables: {id: post.postId, like: !this.state.isLiked}})}
                                        />
                                    )}
                                </Mutation>
                            }
                            label={post.likes ? post.likes.length : 0}
                        />

                        <FormControlLabel
                            className={classes.footerIconLabel}
                            control={
                                <Comment
                                    style={{color: '#8b8b8b'}}
                                    className={classes.footerIcon}
                                    color="primary"
                                    onClick={this.handleClickShowInput}
                            />
                            }
                            label={post.comments ? post.comments.length : 0}
                        />

                        <FormControlLabel
                            className={classes.footerIconLabel}
                            control={
                                <Mutation mutation={REPOST} onCompleted={() => this.setState({snackBarOpen: true})} onError={(error)=>console.log(error)}>
                                    {rePost => (
                                        <Repeat
                                            style={{color: '#8b8b8b'}}
                                            className={classes.footerIcon}
                                            color="primary"
                                            onClick={() => rePost({variables: {postId: post.postId}})}
                                        />
                                    )}
                                </Mutation>
                            }
                            label="1"
                        />
                    </div>
                    <div className={`${classes.container} ${this.state.showInput ? classes.show : classes.hidden}`}>
                        <FormControl fullWidth={true} className={classes.textField}>
                            <Input
                                id="comment"
                                name="comment"
                                type='text'
                                value={this.state.comment}
                                onChange={this.handleChange}
                                onKeyDown={this.handleKeyDownSendComment}
                                endAdornment={
                                <InputAdornment position="end">
                                    <Mutation mutation={CREATE_COMMENT} onCompleted={() => this.setState({comment: ''})} onError={(error)=>console.log(error)}
                                              update={(cache, {data: { createComment }}) => {
                                                  const data = cache.readQuery({query: GET_COMMENTS, variables: {postId: post.postId}});
                                                  const comments = (data as any).getComments.concat(createComment);
                                                  cache.writeQuery({query: GET_COMMENTS, variables: {postId: post.postId}, data: {getComments: comments}});
                                              }}>
                                        {createComment => {
                                            return (
                                                <IconButton
                                                    aria-label="Toggle comment input"
                                                    onClick={() => {if (this.state.comment.length) 
                                                        {
                                                            createComment({variables: {postId: post.postId, content: this.state.comment}})
                                                        }
                                                    }}
                                                >
                                                    <Send />
                                                </IconButton>
                                                )
                                        }}
                                    </Mutation>
                                </InputAdornment>
                                }
                            />
                        </FormControl>
                    </div>
                </div>
                {post.comments ? (post.comments.length ? (this.state.showComments === false
                    ? <div className={classes.hideComments} onClick={this.handleShowComments}>
                        <Typography className={classes.hideCommentsText}>See comments</Typography>
                    </div>
                    : <PostComments postId={post.postId} />) : '') : ''}
                    
                <SnackBar open={this.state.snackBarOpen} anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                          onClose={this.handleSnackBar} message={<span>Reposted</span>}/>
            </div>
        )
    }

}

const mapStateToProps = ({auth}:any) => {
    return {
        authUser: auth.authUser
    }
};

// const mapDispatchToProps = (dispatch:any) => {
//     return {
//         tags: (tags:any) => dispatch(tagSearch(tags))
//     }
// };

export default connect(mapStateToProps)(withStyles(styles)(Post))