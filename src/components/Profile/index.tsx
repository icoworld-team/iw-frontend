import React, {Component} from 'react';
import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import MainAppBar from '../MainAppBar';
import PortfolioList from '../PortfolioList';
import PostList from '../PostList';
import PostInput from '../PostInput';
import FollowButton from '../FollowButton'

import { Query } from 'react-apollo'
import { SEARCH_POST_IN_PROFILE, GET_USER, GET_SUBSCRIBERS, GET_FOLLOWS } from '../../api/graphql'
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const styles = (theme: Theme) => createStyles({
	profile: {
		display: 'flex',
		margin: '20px auto auto auto',
		justifyContent: 'center',
		maxWidth: '1100px',
	},
	profileInfo: {
		marginRight: '15px',
		textAlign: 'center',
		width: '260px',
		maxWidth: '260px',
		boxSizing: 'border-box',
		padding: 0,
	},
	profileInfoItem: {
		borderBottom: '1px solid rgba(193, 193, 193, 1)',
		padding: '15px',
		'&:first-child': {
			paddingTop: '20px',
			paddingLeft: '20px',
			paddingRight: '20px',
		},
		'&:last-child': {
			borderBottom: 'none',
		},
	},
	userName: {
		fontSize: '16px',
		fontWeight: 600,
		color: '#171717',
		lineHeight: '18px',
	},
	userInfoText: {
		fontSize: '14px',
		color: '#8b8b8b',
		marginTop: '5px',
		lineHeight: '16px',
	},
	avatar: {
		marginBottom: '10px',
		width: '110px',
		height: '110px',
	},
	itemTitle: {
		fontWeight: 600,
		fontSize: '14px',
		lineHeight: '16px',
		color: '#8b8b8b',
		marginBottom: '10px',
	},
	itemText: {
		textAlign: 'left',
		fontSize: '14px',
		lineHeight: '16px',
		color: '#171717'
	},
	subItem: {
		marginBottom: '15px',
		'&:last-child': {
			marginBottom: 0,
		},
	},

	profileContent: {
		width: '555px',
		maxWidth: '555px',
		marginRight: '15px',
	},

	profileTabsList: {
		padding: '0 15px',
		marginBottom: '5px',
	},
	
	followersCard: {
		marginBottom: '15px',
	},
	profileFollowers: {
		width: '255px',
	},
	followersList: {
		padding: '20px 15px 10px 15px',
		display: 'flex',
    flexWrap: 'wrap',
	},
	followersItem: {
		width: '60px',
		marginRight: '21px',
		'&:nth-child(3n)': {
			marginRight: 0,
		},
		'&:nth-child(n+4)': {
			marginTop: '15px',
		},
	},
	followerAvatar: {
		width: '55px',
		height: '55px',
		margin: '0 auto',
	},
	followerName: {
		marginTop: '5px',
		fontSize: '14px',
		lineHeight: '18px',
		color: '#171717',
		fontWeight: 600,
	},
	followerEmptyText: {
		fontSize: '14px',
		color: '#171717',
		lineHeight: '18px',
	},


	cardBtns: {
		display: 'flex',
		marginTop: '10px',
	},
	followButton: {
		marginRight: '9px',
		minWidth: '85px',
		minHeight: '25px',
		fontWeight: 600,
		fontSize: '14px',
	},
	messageButton: {
		marginRight: '9px',
		minWidth: '85px',
		minHeight: '25px',
		fontWeight: 600,
		fontSize: '14px',
	},
	moreButton: {
		minWidth: '30px',
		minHeight: '25px',
	},
	moreButtonIcon: {
		fontSize: '23px',
	},
    editButton: {
        minWidth: '85px',
        minHeight: '25px',
        fontSize: '14px'
    },
    editCard: {
        display: 'block',
        marginTop: '10px'
    },
    link: {
        textDecoration: 'none'
    },
    noActivity: {
		textAlign: 'center',
		padding: '10px'
	}
});

class Profile extends Component<any> {
	state={
		tab: 0,
        searchText: ""
	};

	handleChange =(event:any, value:any)=>{
		this.setState({
			tab: value
		});
	};

    handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            searchText: e.target.value
        });
    };

	render() {
		const { classes } = this.props;

        let ownPage:boolean;
        let id:string;
        if (!this.props.location.state || this.props.location.state.id == this.props.authUser.id) {
            ownPage = true;
            id = this.props.authUser.id
        }
        else {
            ownPage = false;
            id = this.props.location.state.id;
        }

		const input = {
			userId: id,
			searchText: this.state.searchText
		};
        // console.log(this.props.authUser);
        // console.log(this.props.authUser.id);
        //
        // console.log(this.props.state);


		return (
			<>
				<MainAppBar/>

				<Grid container spacing={0}>
					<Grid item xs={1} />
					<Grid item xs={10}>
						<div className={`page-content`}>

							<div className={`card ${classes.profileInfo}`} >
								<Query query={GET_USER} variables={{userId: id}}>
									{({ loading, error, data }) => {
                                        if(loading) return null;
                                        if(error) return `Error: ${error}`;
                                        const user = data.getUser;
                                        return (
                                            <ul className={classes.profileInfoList}>

                                                <li className={classes.profileInfoItem}>
                                                    <img className={classes.avatar} src="profile.jpeg" />

                                                    <Typography className={classes.userName}>{user.name}</Typography>
                                                    <Typography className={classes.userInfoText}>{user.name}</Typography>
                                                    <Typography className={classes.userInfoText}>{user.country}</Typography>
													{ownPage
														? <div className={classes.editCard}>
                                                            <Button variant="outlined" color="secondary" size="small" className={`button outline-button ${classes.editButton}`}>Edit profile</Button>
                                                        </div>
														: <div className={classes.cardBtns}>
                                                            <Query query={GET_SUBSCRIBERS} variables={{userId: user.id}}>
                                                                {(({ loading, error, data }) => {
                                                                    if(loading) return null;
                                                                    if(error) return `Error: ${error}`;
                                                                    return <FollowButton id={user.id} followers={data.getSubscribers} style={classes.followButton}/>
                                                                })}
                                                            </Query>
                                                            <Button variant="outlined" color="secondary" size="small" className={`button outline-button ${classes.messageButton}`}>
                                                                Message
                                                            </Button>
                                                            <Button variant="outlined" color="secondary" size="small" className={`button outline-button ${classes.moreButton}`}>
                                                                <MoreHorizIcon className={classes.moreButtonIcon} />
                                                            </Button>
                                                        </div>
													}
                                                </li>

                                                <li className={classes.profileInfoItem}>
                                                    <Typography className={classes.itemTitle} align="center">About:</Typography>
                                                    <Typography className={`${classes.itemText} ${classes.aboutText}`}>
                                                        Bitfinex retail shorts on the left, professional money shorts on the
                                                        right.  The pros have the least short exposure since January, and the
                                                        retail (dumb money) is more short than ever.  Somebody'bout to get REKT
                                                    </Typography>
                                                </li>

                                                <li className={classes.profileInfoItem}>
                                                    <Typography className={classes.itemTitle} align="center">Education:</Typography>
                                                    <ul className={classes.subList}>
                                                        <li className={classes.subItem}>
                                                            <Typography className={classes.itemText}>KNITU</Typography>
                                                            <Typography className={classes.itemText}>2011-2015</Typography>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li className={classes.profileInfoItem}>
                                                    <Typography className={classes.itemTitle} align="center">Experience:</Typography>
                                                    <ul className={classes.subList}>
                                                        <li className={classes.subItem}>
                                                            <Typography className={classes.itemText}>Alfa-bank, Corporate department</Typography>
                                                            <Typography className={classes.itemText}>2015-2018</Typography>
                                                        </li>
                                                        <li className={classes.subItem}>
                                                            <Typography className={classes.itemText}>Citi, Corporate department</Typography>
                                                            <Typography className={classes.itemText}>2015-2018</Typography>
                                                        </li>
                                                    </ul>
                                                </li>

                                            </ul>
										)
									}}
								</Query>

							</div>

							<div className={classes.profileContent}>
                                {ownPage ? <PostInput authUserId={id} authUser={this.props.authUser}/> : null}
								<div className={`card card-heading ${classes.profileTabsList}`}>
									<Tabs
                      value={this.state.tab}
                      onChange={this.handleChange}
                      classes={{ indicator: `tabs-indicator`, root: `tabs-root` }}
                    >
                      <Tab
                        disableRipple
                        classes={{
													root: `tab-root`,
													label: `tab-label`,
													labelContainer: `tab-label-container`
												}}
                        label="Activity"
                      />
                      <Tab
                        disableRipple
                        classes={{
													root: `tab-root`,
													label: `tab-label`,
													labelContainer: `tab-label-container`
												}}
                        label="Portfolio"
                      />
                    </Tabs>
									<TextField InputProps={{ disableUnderline: true, classes: {input: `search-input input`} }} 
										className={`heading-input`} name="searchText" placeholder="Search" value={this.state.searchText} onChange={this.handleSearch}/>
								</div>

								<div className={`${classes.profileTabs}`}>
									{this.state.tab === 0 &&
										<>
											{/* <PostInput authUserId={this.props.authUser.id}/> */}

											<Query query={SEARCH_POST_IN_PROFILE} variables={input}>
												{({ loading, error, data }) => {
													if(loading) return <div>Loading</div>;
													if(error) return `Error: ${error}`;
													if(data.searchPostInProfile.posts.length == 0) return <div className={`card ${classes.noActivity}`}><Typography>No activity</Typography></div>
													return (
														<PostList posts={data.searchPostInProfile.posts}/>
													)
												}}
											</Query>
										</>
									}
									{this.state.tab === 1 && <PortfolioList/>}
									{/* {this.state.tab === 2 && <PortfolioAbout/>} */}
								</div>
							</div>

							<div className={classes.profileFollowers}>
								<div className={`card ${classes.followersCard}`}>
									<div className={`card-heading`}>
										<Typography className={`card-title`}>Followers</Typography>
									</div>
									<ul className={classes.followersList}>
                                        <Query query={GET_SUBSCRIBERS} variables={{userId: id}}>
                                            {({ loading, error, data }) => {
                                                if(loading) return <div>Loading</div>;
                                                if(error) return `Error: ${error}`;
                                                console.log('data');
                                                console.log(data);

                                                if(data.getSubscribers.length == 0) return <Typography className={classes.followerEmptyText}>No followers</Typography>

                                                const followers = data.getSubscribers.map((user:any) => (
                                                    <Link to={{pathname: "/profile", state: {id: user.id}}} className={classes.link}>
                                                        <li className={classes.followersItem}>
                                                            <Avatar className={classes.followerAvatar} src="profile.jpeg" />
                                                            <Typography align="center" className={classes.followerName}>{user.name}</Typography>
                                                        </li>
                                                    </Link>
                                                ));
                                                return followers;
                                            }}
                                        </Query>
									</ul>
								</div>
								
								<div className={`card ${classes.followersCard}`}>
									<div className={`card-heading`}>
										<Typography className={`card-title`}>Follows</Typography>
									</div>
									<ul className={classes.followersList}>
                                        <Query query={GET_FOLLOWS} variables={{userId: id}}>
                                            {({ loading, error, data }) => {
                                                if(loading) return <div>Loading</div>;
                                                if(error) return `Error: ${error}`;

                                                if(data.getFollows.length == 0) return <Typography className={classes.followerEmptyText}>No follows</Typography>

                                                const follows = data.getFollows.map((user:any) => (
                                                    <Link to={{pathname: "/profile", state: {id: user.id}}} className={classes.link}>
                                                        <li className={classes.followersItem}>
                                                            <Avatar className={classes.followerAvatar} src="profile.jpeg" />
                                                            <Typography align="center" className={classes.followerName}>{user.name}</Typography>
                                                        </li>
                                                    </Link>
                                                ));
                                                return follows;
                                            }}
                                        </Query>
									</ul>
								</div>
							</div>
						</div>
					</Grid>
					<Grid item xs={1} />
				</Grid>
			</>
		)
	}
}

const mapStateToProps = ({auth}:any) => {
	return {
		authUser: auth.authUser
	}
};

export default connect(mapStateToProps)(withStyles(styles)(Profile))