import React, {Component} from 'react'
import { createStyles, withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { relativeTime } from '../../utils'
import {endpoint} from "../../api";
import { DELETE_COMMENT, EDIT_COMMENT, GET_COMMENTS } from '../../api/graphql'
import { Mutation } from "react-apollo";
import { connect } from 'react-redux'

const styles = () => createStyles({
    commentsItem: {
        display: 'flex',
        borderBottom: '1px solid #edeef0',
        paddingBottom: '10px',
        marginBottom: '10px',
        '&:last-child': {
            borderBottom: 'none',
            paddingBottom: 0,
            marginBottom: 0,
        },
    },
    postAvatar: {
        width: '38px',
        height: '38px',
    },
    commentContent: {
        marginLeft: '10px',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    userInfo: {
        display: 'inline-flex',
        alignItems: 'flex-end',
    },
    commentHeading: {
        display: 'flex',
        justifyContent: 'space-between',
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
    deleteComment: {
        color: '#8b8b8b',
        fontSize: '19px',
        lineHeight: '19px',
        cursor: 'pointer',
    },
    postDate: {
        color: '#8b8b8b',
        fontSize: '14px',
        lineHeight: '19px',
    },
    commentText: {
        fontSize: '14px',
        color: '#171717',
    },
    button: {
        width: '64px',
        minHeight: '22px',
        fontSize: '12px',
    },
    editBnts: {
        textAlign: 'right',
        marginTop: '3px',
    }
});

class Comment extends Component<any> {
    state={
        editComment: false,
        newComment: this.props.comment.content,
    }

    handleChange = (e: any) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {
        const {classes, comment, authUser, postId, postUserId} = this.props;
        
        return (
            <li className={classes.commentsItem}>
                <Avatar className={classes.postAvatar} src={comment.avatar ? `${endpoint}/images/${comment.userId}/${comment.avatar}` : "profile.jpeg"} />
                <div className={classes.commentContent}>
                    <div className={classes.commentHeading}>
                        <div className={classes.userInfo}>
                            <Typography className={classes.userName}>{comment.userName}</Typography>
                            <Typography className={classes.userLogin}>@{comment.userLogin}</Typography>
                        </div>
                        {this.state.editComment ? null : <div className={classes.userInfo}>
                            {comment.userId === authUser.id ?
                                <Typography className={classes.deleteComment} style={{marginRight: '10px', fontSize: '14px'}}
                                    onClick={() => this.setState({editComment: true})}>
                                    edit
                                </Typography>
                                : null
                            }
                            {(comment.userId === authUser.id || postUserId === authUser.id) ?
                                <Mutation mutation={DELETE_COMMENT} onError={(error)=>console.log(error)}
                                    update={(cache, {data: {}}) => {
                                        const data = cache.readQuery({
                                            query: GET_COMMENTS,
                                            variables: {postId: postId}
                                        });
                                        const comments = (data as any).getComments.filter((comment:any) => comment.Id !== this.props.comment.Id);
                                        cache.writeQuery({query: GET_COMMENTS, variables: {postId: postId}, data: {
                                            getComments: comments
                                        }});
                                    }}>
                                    {deleteComment => {
                                        return (
                                            <Typography className={classes.deleteComment}
                                                onClick={() => deleteComment({variables: {cmtId: comment.Id}})}>
                                                x
                                            </Typography>
                                        )
                                    }}
                                </Mutation>
                                : null
                            }
                        </div>}
                    </div>
                    {this.state.editComment ?
                            <Mutation mutation={EDIT_COMMENT} onError={(error)=>console.log(error)}
                                update={(cache, {data: {}}) => {
                                    const data = cache.readQuery({
                                        query: GET_COMMENTS,
                                        variables: {postId: postId}
                                    });
                                    const comments = (data as any).getComments.map((comment:any) => comment);
                                    cache.writeQuery({query: GET_COMMENTS, variables: {postId: postId}, data: {
                                        getComments: comments
                                    }});
                                }}
                                >
                                {editComment => {
                                    return (
                                        <>
                                            <input className={`input border-input ${classes.postTextarea}`} style={{marginTop: '5px'}}
                                                name="newComment" value={this.state.newComment} onChange={this.handleChange} />
                                            <div className={classes.editBnts}>
                                                <Button variant="outlined" style={{marginRight: '5px'}}
                                                    className={`button outline-button ${classes.button}`}onClick={() => {this.setState({editComment: false})}}>
                                                    Cancel
                                                </Button>
                                                <Button variant="raised" color="secondary" 
                                                    className={`button fill-button ${classes.button}`} onClick={() => {
                                                        editComment({variables: {cmtId: comment.Id, content: this.state.newComment}})
                                                        this.setState({editComment: false})
                                                    }}>
                                                    Save
                                                </Button>
                                            </div>
                                        </>
                                    )
                                }}
                            </Mutation>
                        : <Typography className={classes.commentText}>{comment.content}</Typography>}
                    {this.state.editComment ? null : <Typography className={classes.postDate}>{relativeTime(comment.date)}</Typography>}
                </div>
            </li>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        authUser: state.auth.authUser
    }
};

export default connect(mapStateToProps)(withStyles(styles)(Comment))