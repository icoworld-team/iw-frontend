import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
// import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MainAppBar from '../MainAppBar'
import ProfileStats from '../ProfileStats'
import PortfolioList from '../PortfolioList'
import PortfolioAbout from '../PortfolioAbout'
import PostList from '../PostList'
import './style.css'

class Profile extends Component {
    state={
      tab: 0
    };

    handleChange =(event:any, value:any)=>{
        this.setState({
            tab: value
        });
    };

    render() {
        return (
            <div>
                <MainAppBar/>
                <div className="profile">
                    <div className="profile-info">
                        <div className="profile-pic" >
                            <img className="avatar" src="profile.jpeg"  width="200"/>
                            <Button className="action-button" variant="outlined" color="primary">Edit</Button>
                        </div>
                        <div className="profile-name">
                            <h2 className="user-name">Ivan Fedotov</h2>
                            <small><p>@iyufedotov</p>
                            <p>Russia, Kazan</p></small>
                            <div className="social-icons">
                                <a className="social-link" href="#"><i className="fab fa-facebook-square fa-lg"></i></a>
                                <a className="social-link" href="#"><i className="fab fa-linkedin fa-lg"></i></a>
                                <a className="social-link" href="#"><i className="fab fa-twitter-square fa-lg"></i></a>
                            </div>
                        </div>
                        <div>
                            <ProfileStats stats={{followers: 150, follow: 10, posts: 73}}/>
                        </div>
                    </div>
                    <div className="profile-tabs">
                        <div className="tabs-list">
                            <Tabs value={this.state.tab} onChange={this.handleChange} indicatorColor="primary" textColor="primary">
                                <Tab label="Activity"/>
                                <Tab label="Portfolio"/>
                                <Tab label="About me"/>
                            </Tabs>
                        </div>
                        {this.state.tab === 0 && <PostList/>}
                        {this.state.tab === 1 && <PortfolioList/>}
                        {this.state.tab === 2 && <PortfolioAbout/>}
                    </div>
                </div>

            </div>
        )
    }
}

export default Profile