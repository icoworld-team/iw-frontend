import React from 'react'
import { createStyles, withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { relativeTime } from '../../utils'

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
    commentText: {
        fontSize: '14px',
        color: '#171717',
    },
});

function Comment ({classes, comment}:any) {
    return (
        <li className={classes.commentsItem}>
            <Avatar className={classes.postAvatar} src="profile.jpeg" />
            <div className={classes.commentContent}>
                <div className={classes.userInfo}>
                    <Typography className={classes.userName}>{comment.userName}</Typography>
                    <Typography className={classes.userLogin}>@{comment.userLogin}</Typography>
                </div>
                <Typography className={classes.commentText}>{comment.content}</Typography>
                <Typography className={classes.postDate}>{relativeTime(comment.date)}</Typography>
            </div>
        </li>
    )
}

export default withStyles(styles)(Comment)