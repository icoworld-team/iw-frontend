import React, { Component } from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
  subText: {
    color: '#a2a2a2',
    margin: 0,
    fontSize: '11px',
  },
  avatar: {
    borderRadius: '70%',
  },
  authorHeaderText: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginLeft: '10px',
  },
  authorName: {
    marginRight: '4px',
    fontSize: '14px',
    lineHeight: '18px',
  },
  inlineFlex: {
    display: 'inline-flex',
    alignItems: 'flex-end',
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
              <img className={classes.avatar} src="profile.jpeg" width="35px"/>
            </div>
            <div className={classes.authorHeaderText}>
              <div className={classes.inlineFlex}>
                <Typography component='h3' className={classes.authorName}>Ivan Fedotov</Typography>
                <Typography className={classes.subText}>@iyufedotov</Typography>
              </div>
                <div><p className={classes.subText}>25 minutes ago</p></div>
            </div>
          </div>
        
          <div className={classes.authorFollow}>
            <Button className={classes.authorFollowBtn} size="small" color="primary">
              Follow
            </Button>
          </div>
        </div>

      </>
    );
  }
}

export default withStyles(styles)(Author);