import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import MainAppBar from '../MainAppBar';
import ProfileStats from '../ProfileStats';
import PortfolioList from '../PortfolioList';
import PortfolioAbout from '../PortfolioAbout';
import PostList from '../PostList';
import PostInput from '../PostInput';
import { withStyles, createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
    profile: {
        display: 'flex',
        margin: '20px auto auto auto',
        justifyContent: 'center',
        maxWidth: '1100px',
    },
    profileInfo: {
        marginRight: '20px',
        textAlign: 'center',
        maxWidth: '240px',
    },
    profilePic: {
        padding: '20px',
    },
    profileName: {
        padding: '20px',
    },
    profileTabs: {
        padding: '0 50px 50px 50px',
    },
    avatar: {
        marginBottom: '10px',
        width: '100%',
    },
    actionButton: {
        width: '200px',
    },
    socialLinks: {
        display: 'block',
        padding: '20px',
    },
    socialLink: {
        textDecoration: 'none',
        margin: '4px',
    },
    userName: {
        fontWeight: 400,
    },
    tabsList: {
        borderBottom: '1px solid black',
    },
    socialIcon: {
        width: '25px',
        transition: '.3s',
        '&:hover': {
            transform: 'scale(1.2)',
        }
    }
});

class Profile extends Component<any> {
    state={
      tab: 0
    };

    handleChange =(event:any, value:any)=>{
        this.setState({
            tab: value
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <MainAppBar/>

                <Grid container spacing={0}>
                    <Grid item xs={1} />
                    <Grid item xs={10}>
                        <div className={classes.profile}>

                            <div className={classes.profileInfo}>
                                <div className={`card ${classes.profilePic}`} >
                                    <img className={classes.avatar} src="profile.jpeg" />
                                    <Button className={classes.actionButton} variant="outlined" color="primary">Edit</Button>
                                </div>
                                <div className={`card ${classes.profileName}`}>
                                    <h2 className={classes.userName}>Ivan Fedotov</h2>
                                    <small><p>@iyufedotov</p>
                                    <p>Russia, Kazan</p></small>
                                    <div className={classes.socialIcons}>
                                        <a className={classes.socialLink} href="#"><img className={classes.socialIcon} src='./icons/facebook.png'></img></a>
                                        <a className={classes.socialLink} href="#"><img className={classes.socialIcon} src='./icons/twitter.png'></img></a>
                                        <a className={classes.socialLink} href="#"><img className={classes.socialIcon} src='./icons/linkedIn.png'></img></a>
                                    </div>
                                </div>
                                <div>
                                    <ProfileStats stats={{followers: 150, follow: 10, posts: 73}}/>
                                </div>
                            </div>

                            <div className={`card ${classes.profileTabs}`}>
                                <div className={classes.tabsList}>
                                    <Tabs value={this.state.tab} onChange={this.handleChange} indicatorColor="primary" textColor="primary">
                                        <Tab label="Activity"/>
                                        <Tab label="Portfolio"/>
                                        <Tab label="About me"/>
                                    </Tabs>
                                </div>
                                {this.state.tab === 0 &&
                                    <>
                                        <PostInput />
                                        <PostList />
                                    </>
                                }
                                {this.state.tab === 1 && <PortfolioList/>}
                                {this.state.tab === 2 && <PortfolioAbout/>}
                            </div>

                        </div>
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Profile);