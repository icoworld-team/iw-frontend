import React, { Component } from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { GET_SUBSCRIBERS } from '../../api/graphql'
import { Query } from 'react-apollo';
import FollowButton from '../FollowButton'
import { Link } from "react-router-dom";
import {endpoint} from "../../api";

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
  link: {
    textDecoration: 'none'
  }
});

class Author extends Component<any> {
 
  render() {
    const { classes } = this.props;
    const { populars } = this.props;

    return (
      <>
        
          <div className={classes.author}>
            <Query query={GET_SUBSCRIBERS} variables={{userId: populars.id}}>
              {({ loading, error, data }) => {
                if(loading) return <div>Loading</div>;
                if(error) return `Error: ${error}`;
                return (
                  <>
                    <Link to={{pathname: "/profile", state: {id: populars.id}}} className={classes.link}>
                      <div className={classes.authorInfo}>
                        <div>
                          <Avatar className={classes.avatar} src={populars.avatar ? `${endpoint}/images/${populars.id}/${populars.avatar}` : "profile.jpeg"} />
                        </div>

                        <div className={classes.authorHeaderText}>
                          <Typography component='h3' className={classes.authorName}>{populars.name}</Typography>
                          <Typography className={classes.subText}>{data.getSubscribers.length} followers</Typography>
                        </div>
                      </div>
                    </Link>

                    <FollowButton id={populars.id} followers={data.getSubscribers} style={classes.followButton}/>
                  </>
                )
              }}
            </Query>
            {/* <Button variant="contained" color="secondary" size="small" className={`button fill-button ${classes.followButton}`}>
              Follow
            </Button> */}
          </div>
        
      </>
    );
  }
}

export default withStyles(styles)(Author);