import React, { Component } from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import Fade from "@material-ui/core/Fade";
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

import PostComments from '../PostComments';

import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import {connect} from "react-redux";


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

// const SEARCH_POST = gql`
//     query searchPost($input: PostSearchingParamsInput!) {
//         searchPost(input: $input) {
//             postId
//             userId
//             userName
//             date
//             content
//             tags
//         }
//     }
// `;

const CREATE_COMMENT = gql`
  mutation createComment($input: CommentInput!) {
    createComment(input: $input) {
        Id
        userId
        postId
        userName
        userLogin
        date
        edited
        content
    }
  }
`;

const GET_COMMENTS = gql`
	query getComments($postId: ID!) {
		getComments(postId: $postId) {
			Id
			userId
			postId
			userName
			userLogin
			date
			edited
			content
		}
	}
`;

const SEARCH_POST_IN_PROFILE = gql`
	query searchPostInProfile($userId: ID!, $searchText: String!) {
		searchPostInProfile(userId: $userId, searchText: $searchText) {
			posts {
				postId
				userId
				userName
				userLogin
				date
				edited
				content
				tags
			}
			reposts {
				postId
				userId
				userName
				userLogin
				date
				edited
				content
				tags
				reposted
			}
		}
	}
`;

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
        borderBottom: '1px solid #edeef0'
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
    }
});

class Post extends Component<any> {
    state = {
        anchorEl: undefined,
        comment: '',
        showInput: false,
        editMode: false,
        postBody: this.props.post.content,
        showComments: false,
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
        this.setState(state => ({ showComments: !this.state.showComments }));
    };

    render() {
        const { post, authUser } = this.props;
        const { classes } = this.props;
        // console.log(post.postId);

        return (
            <div className={`card ${classes.postCard}`}>
                <div className={classes.postBody}>
                    <div className={classes.postHeader}>

                        <div className={classes.postHeaderLeft}>
                            <Avatar className={classes.postAvatar} src="profile.jpeg" />

                            <div className={classes.postHeaderText}>
                                <div className={classes.userInfo}>
                                    <Typography className={classes.userName}>{post.userName}</Typography>
                                    <Typography className={classes.userLogin}>{`@${post.userName}`}</Typography>
                                </div>
                                {/* <Typography className={classes.postDate}>27 October, 14:56</Typography> */}
                                <Typography className={classes.postDate}>{new Date(post.date).toLocaleDateString()}</Typography>
                            </div>
                        </div>

                        <IconButton disableRipple classes={{ label: classes.postMenuLabel }} className={classes.postMenu} aria-label="More" aria-owns={this.state.anchorEl ? 'fade-menu' : undefined} aria-haspopup="true" onClick={this.handleClick}>
                            <MoreHorizIcon className={classes.postMenuIcon} />
                        </IconButton>
                        {post.userId !== authUser.id
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
                                            const data = cache.readQuery({
                                                query: SEARCH_POST_IN_PROFILE,
                                                variables: {userId: authUser.id, searchText: ""}
                                            });
                                            console.log(data);
                                            const posts = (data as any).searchPostInProfile.posts.filter((post:any) => post.postId !== deletePost);
                                            console.log(posts);
                                            cache.writeQuery({query: SEARCH_POST_IN_PROFILE, variables: {userId: authUser.id, searchText: ""}, data: {
                                                searchPostInProfile: {
                                                    ...(data as any).searchPostInProfile,
                                                    posts: posts,
                                                    }}});
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
                            ? ( <div className={classes.postContent}>
                                    <textarea className={classes.textArea} name="postBody" rows={3} value={this.state.postBody} onChange={this.handleChange}></textarea>
                                    <div className={classes.editButtonsBlock}>
                                        <Button variant="outlined" color="secondary" size="small" className={`button outline-button`} onClick={this.handleEdit}>Cancel</Button>
                                        <Mutation mutation={EDIT_POST} onCompleted={()=>this.setState({editMode: false})} onError={(error)=>console.log(error)}>
                                            {editPost => {
                                                return <Button className={`button fill-button ${classes.saveButton}`} variant="raised" color="primary"
                                                            onClick={() => editPost({variables: {input: {postId: post.postId, content: this.state.postBody, tags: []}}})}>Save</Button>
                                            }}
                                        </Mutation>
                                    </div>
                                </div>
                            )
                            : <Typography className={classes.postContent}>{post.content}</Typography>}
                    <div className={classes.postFooter}>
                    <FormControlLabel
                            className={classes.footerIconLabel}
                            control={
                                <Checkbox
                                    disableRipple
                                    classes={{
                                        root: classes.iconRoot,
                                    }}
                                    icon={<FavoriteBorder className={classes.footerIcon} />}
                                    checkedIcon={<Favorite className={`${classes.footerIcon} ${classes.checkedIcon}`} />}
                                    value="like"
                                />
                            }
                            label="1"
                        />

                        <FormControlLabel
                            className={classes.footerIconLabel}
                            control={
                                <Comment
                                    className={classes.footerIcon}
                                    color="primary"
                                    onClick={this.handleClickShowInput}
                            />
                            }
                            label="1"
                        />

                        <FormControlLabel
                            className={classes.footerIconLabel}
                            control={
                                <Repeat
                                    className={classes.footerIcon}
                                    color="primary"
                            />
                            }
                            label="1"
                        />
                    </div>
                    <div className={`${classes.container} ${this.state.showInput ? classes.show : classes.hidden}`}>
                        <FormControl fullWidth className={classes.textField}>
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
                                                    onClick={() => createComment({variables: {input: {userId: authUser.id, postId: post.postId, content: this.state.comment}}})}
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
                {this.state.showComments === false
                    ? <div className={classes.hideComments} onClick={this.handleShowComments}>
                    <Typography className={classes.hideCommentsText}>See comments</Typography>
                </div>
                : <PostComments postId={post.postId} />}
            </div>
        )
    }

}

const mapStateToProps = ({auth}:any) => {
    return {
        authUser: auth.authUser
    }
};

export default connect(mapStateToProps)(withStyles(styles)(Post))