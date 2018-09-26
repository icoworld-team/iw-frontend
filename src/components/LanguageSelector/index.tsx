import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import '../style.css'

export default class Index extends Component {
    state = {
        anchorEl: null
    };

    handleClick = (event:any)=> {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = ()=>{
        this.setState({ anchorEl: null });
    };



    render() {
        return (
            <div>
                <Button color="inherit" aria-owns={this.state.anchorEl ? 'fade-menu' : undefined} aria-haspopup="true" onClick={this.handleClick}>
                    <span className="language-selector-text">RU</span>
                </Button>
                <Menu id="fade-menu" anchorEl={this.state.anchorEl} open={Boolean(this.state.anchorEl)}
                      onClose={this.handleClose} TransitionComponent={Fade}>
                    <MenuItem onClick={this.handleClose}>RU</MenuItem>
                    <MenuItem onClick={this.handleClose}>ENG</MenuItem>
                </Menu>
            </div>
        )
    }
}