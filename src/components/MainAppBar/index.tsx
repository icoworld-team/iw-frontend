import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MessageOutlined from '@material-ui/icons/Message'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import {Link} from "react-router-dom";
import './style.css'
import LanguageSelector from '../LanguageSelector'


class MainAppBar extends Component{
    state = {
        anchorEl: null
    };

    handleClick = (event:any)=> {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose =()=> {
        this.setState({ anchorEl: null });
    };

    render() {
        const open = Boolean(this.state.anchorEl);
        return (
            <div>
                <AppBar position="static">
                    <ToolBar className="app-bar">
                        <h2>icoWorld</h2>
                        <div className="bar-menu">
                            <nav>
                                <ul className="navigation-menu">
                                    <li><Link to="#">News</Link></li>
                                    <li><Link to="#">Profile</Link></li>
                                    <li><Link to="#">Messages</Link></li>
                                    <li><Link to="#">Investors</Link></li>
                                    <li><Link to="#">Projects</Link></li>
                                    <li><Link to="#">Pools</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="bar-icons">
                            <LanguageSelector/>
                            <IconButton>
                                <MessageOutlined nativeColor="white"/>
                            </IconButton>
                            <IconButton
                                aria-owns={open ? 'menu-appbar' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleClick}
                                color="inherit"
                            >
                                <AccountCircle/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={this.state.anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={this.handleClose}
                            >
                                <MenuItem onClick={this.handleClose}>Menu</MenuItem>
                                <MenuItem onClick={this.handleClose}>Menu</MenuItem>
                            </Menu>
                        </div>
                    </ToolBar>
                </AppBar>
            </div>
        )
    }
}

export default MainAppBar