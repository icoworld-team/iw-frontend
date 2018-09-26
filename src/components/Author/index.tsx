import React, { Component } from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
// import { Link } from "react-router-dom";

const styles = () => createStyles({
  author: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  authorInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    width: '35px',
    height: '35px',
  },
  authorHeaderText: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginLeft: '5px',
  },
  authorName: {
    fontSize: '14px',
    lineHeight: '18px',
    color: '#171717',
  },
  subText: {
    color: '#8b8b8b',
    fontSize: '14px',
    lineHeight: '18px',
  },
  followButton: {
		minWidth: '75px',
		minHeight: '20px',
		fontSize: '10px',
	},
});

class Author extends Component<any> {
 
  render() {
    const { classes } = this.props;
    // const { post } = this.props;

    return (
      <>

        <div className={classes.author}>
          <div className={classes.authorInfo}>
            <div>
              <Avatar className={classes.avatar} src="profile.jpeg" />
            </div>
            <div className={classes.authorHeaderText}>
              <Typography component='h3' className={classes.authorName}>Ivan Fedotov</Typography>
              <Typography className={classes.subText}>123 followers</Typography>
            </div>
          </div>
        
          <Button variant="contained" color="secondary" size="small" className={`button fill-button ${classes.followButton}`}>
            Follow
          </Button>
        </div>

      </>
    );
  }
}

export default withStyles(styles)(Author);