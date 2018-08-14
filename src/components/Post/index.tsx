import React, {Component} from 'react'
import Favorite from '@material-ui/icons/Favorite'
//import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import Comment from '@material-ui/icons/Comment'
import Repeat from '@material-ui/icons/Repeat'
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'
import './style.css'
import Fade from "@material-ui/core/Fade";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';


export default class Post extends Component<any> {
    state = {
        anchorEl: undefined
    };

    handleClick = (event:any)=> {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = (event:any)=> {
        this.setState({ anchorEl: null});
    };


    render() {
        const {post} = this.props;
        return (
            <div className="post">
                <div className="post-header">
                    <div className="post-left-header">
                        <div>
                            <img className="post-avatar" src="profile.jpeg" width="60px"/>
                        </div>
                        <div className="post-header-text">
                            <div className="inline-flex">
                                <div><h3 className="post-user-name">{post.username}</h3></div>
                                <div><p className="sub-text">{post.login}</p></div>
                            </div>
                            <div><p className="sub-text">{post.date}</p></div>
                        </div>
                    </div>
                    <IconButton aria-label="More" aria-owns={this.state.anchorEl ? 'fade-menu' : undefined} aria-haspopup="true" onClick={this.handleClick}>
                        <MoreVertIcon/>
                    </IconButton>
                    <Menu id="fade-menu" anchorEl={this.state.anchorEl} open={Boolean(this.state.anchorEl)}
                          onClose={this.handleClose} TransitionComponent={Fade}>
                        <MenuItem name="pin" id="pin" onClick={this.handleClose}>Pin to top</MenuItem>
                        <MenuItem name="edit" id="edit" onClick={this.handleClose}>Edit</MenuItem>
                        <MenuItem name="delete" id="delete" onClick={this.handleClose}>Delete</MenuItem>
                    </Menu>
                </div>
                <div className="post-body">
                    {post.body}
                </div>
                <div className="post-footer">
                    <IconButton>
                        <Favorite color="primary"/>
                    </IconButton>
                    <IconButton>
                        <Comment color="primary"/>
                    </IconButton>
                    <IconButton>
                        <Repeat color="primary"/>
                    </IconButton>
                </div>
                <Divider/>
            </div>
        )
    }

}

