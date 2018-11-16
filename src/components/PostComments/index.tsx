import React, { Component } from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
// import { Query } from 'react-apollo'
import { GET_COMMENTS } from '../../api/graphql'
import Comment from '../Comment'
import CustomQuery from '../CustomQuery'


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
        <CustomQuery query={GET_COMMENTS} variables={{postId: this.props.postId}}>
            {({ error, data }:any) => {
                if(error) return `Error: ${error}`;

                const comments = data.getComments.slice().map((comment:any) => (
                    <Comment comment={comment}/>
                ));
                return (
                    <div className={classes.postComments}>
                        <ul className={classes.commentsList}>
                            {comments}
                        </ul>
                    </div>
                )
            }}
        </CustomQuery>
    )
  }
}

export default withStyles(styles)(PostComments);