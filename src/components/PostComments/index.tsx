import React, { Component } from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

const styles = () => createStyles({
  postComments: {
    padding: '10px 15px'
  },
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

class PostComments extends Component<any> {

  render() {
      const { classes } = this.props;

    return (

      <div className={classes.postComments}>
        <ul className={classes.commentsList}>
          <li className={classes.commentsItem}>
            <Avatar className={classes.postAvatar} src="profile.jpeg" />
            <div className={classes.commentContent}>
              <div className={classes.userInfo}>
                <Typography className={classes.userName}>Jason Born</Typography>
                <Typography className={classes.userLogin}>@born</Typography>
              </div>
              <Typography className={classes.commentText}>This will be the first answer</Typography>
              <Typography className={classes.postDate}>27 October, 14:56</Typography>
            </div>
          </li>
          <li className={classes.commentsItem}>
            <Avatar className={classes.postAvatar} src="profile.jpeg" />
            <div className={classes.commentContent}>
              <div className={classes.userInfo}>
                <Typography className={classes.userName}>Jason Born</Typography>
                <Typography className={classes.userLogin}>@born</Typography>
              </div>
              <Typography className={classes.commentText}>This will be the first answer</Typography>
              <Typography className={classes.postDate}>27 October, 14:56</Typography>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default withStyles(styles)(PostComments);