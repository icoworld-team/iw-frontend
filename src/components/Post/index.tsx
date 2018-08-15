import React, {Component} from 'react'
import { createStyles, withStyles } from '@material-ui/core/styles';
import Favorite from '@material-ui/icons/Favorite'
import Comment from '@material-ui/icons/Comment'
import Repeat from '@material-ui/icons/Repeat'
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import './style.css'
import Fade from "@material-ui/core/Fade";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Input from '@material-ui/core/Input';
import Send from '@material-ui/icons/Send';

const styles = () => createStyles({
    textField: {
      width: '100%',
    },
    show: {
      height: '32px',
    },
    hidden: {
        height: 0,
    },
    container: {
        overflow: 'hidden',
        transition: '.3s'
    },
    menu: {
        transform: 'translateX(50%)'
    }
  });

class Post extends Component<any> {
    state = {
        anchorEl: undefined,
        comment: '',
        showInput: false
    };

    handleClick = (event:any)=> {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = (event:any)=> {
        this.setState({ anchorEl: null});
    };

    handleChange = (prop: any) => (event: any) => {
        this.setState({ [prop]: event.target.value });
    };

    handleClickShowInput = () => {
        this.setState(state => ({ showInput: !this.state.showInput }));
    }

    handleSendComment = () => {
        alert(`Введённое сообщение: ${this.state.comment}`);
    }

    handleKeyDownSendComment = (event: any) => {
        if(event.keyCode == 13) {
            this.handleSendComment();
        }
    }

    render() {
        const { post } = this.props;
        const { classes } = this.props;
        return (
            <div className="post">
                <div className="post-header">
                    <div className="post-left-header">
                        <div>
                            <img className="post-avatar" src="profile.jpeg" width="50px"/>
                        </div>
                        <div className="post-header-text">
                            <div className="inline-flex">
                                <div><h3 className="post-user-name">{post.username}</h3></div>
                                <div><p className="sub-text">{post.login}</p></div>
                            </div>
                            <div><p className="sub-text">{post.date}</p></div>
                        </div>
                    </div>
                    <IconButton className={classes.menu} aria-label="More" aria-owns={this.state.anchorEl ? 'fade-menu' : undefined} aria-haspopup="true" onClick={this.handleClick}>
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
                        <Comment
                            color="primary"
                            onClick={this.handleClickShowInput}
                        />
                    </IconButton>
                    <IconButton>
                        <Repeat color="primary"/>
                    </IconButton>
                </div>
                <div className={`${classes.container} ${this.state.showInput ? classes.show : classes.hidden}`}>
                    <FormControl className={classes.textField}>
                        <Input
                            id="comment"
                            type='text'
                            value={this.state.comment}
                            onChange={this.handleChange('comment')}
                            onKeyDown={this.handleKeyDownSendComment}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Toggle comment input"
                                    onClick={this.handleSendComment}
                                >
                                <Send />
                                </IconButton>
                            </InputAdornment>
                            }
                        />
                    </FormControl>
                </div>
                <Divider/>
            </div>
        )
    }

}

export default withStyles(styles)(Post);