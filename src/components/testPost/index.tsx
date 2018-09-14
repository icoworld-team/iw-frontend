import React, { Component } from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import Fade from "@material-ui/core/Fade";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import Comment from '@material-ui/icons/Comment';
import Repeat from '@material-ui/icons/Repeat';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Send from '@material-ui/icons/Send';

const styles = () => createStyles({
    postCard: {
        marginBottom: '5px',
    },
    postBody: {
        padding: '20px 15px 10px 15px',
        borderBottom: '1px solid #edeef0',
    },

    postHeader: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    postHeaderLeft: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    postAvatar: {
        width: '38px',
        height: '38px',
    },
    postHeaderText: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        marginLeft: '10px',
    },
    userInfo: {
        display: 'inline-flex',
        alignItems: 'flex-end',
    },
    userName: {
        color: '#171717',
        fontWeight: 600,
        margin: 0,
        fontSize: '14px',
        lineHeight: '19px',
    },
    userLogin: {
        marginLeft: '5px',
        color: '#8b8b8b',
        fontSize: '14px',
        lineHeight: '19px',
    },
    postDate: {
        color: '#8b8b8b',
        fontSize: '14px',
        lineHeight: '19px',
    },
    postMenu: {
        // transform: 'translateX(50%)',
        width: '20px',
        height: '19px',
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    postMenuLabel: {
        height: '8px',
    },
    postMenuIcon: {},

    postContent: {
        marginTop: '10px',
        fontSize: '14px',
        lineHeight: '19px',
        color: '#171717',
        paddingBottom: '10px',
        borderBottom: '1px solid #edeef0'
    },

    postFooter: {
        marginTop: '10px',
    },
    footerIconLabel: {
        margin: 0,
        marginRight: '10px',
    },
    footerIcon: {
        marginRight: '3px',
    },
    checkedIcon: {
        color: '#ff0000'
    },
    iconRoot: {
        width: '27px',
        height: '27px',
        '&$checked': {
            color: '#ff0000',
          },
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },

    postComments: {
        padding: '10px 15px'
    },
    commentsItem: {
        display: 'flex',
        borderBottom: '1px solid #edeef0',
        paddingBottom: '10px',
        marginBottom: '10px',
        '&:last-child': {
            borderBottom: 'none',
            paddingBottom: 0,
            marginBottom: 0,
        },
    },
    commentContent: {
        marginLeft: '10px',
        display: 'flex',
        flexDirection: 'column',
    },
    commentText: {
        fontSize: '14px',
        color: '#171717',
    },

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
    textArea: {
        width: '100%',
        outline: 'none',
        resize: 'none',
        fontFamily: 'inherit',
        fontSize: 'inherit'
    },
    button: {
        marginLeft: '5px'
    }
});

class Post extends Component<any> {
    state = {
        anchorEl: undefined,
        comment: '',
        showInput: false,
    };

    handleClick = (event:any)=> {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = (event:any)=> {
        this.setState({ anchorEl: null});
    };

    handleChange = (e:any) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleClickShowInput = () => {
        this.setState(state => ({ showInput: !this.state.showInput }));
    };

    handleSendComment = () => {
        alert(`Введённое сообщение: ${this.state.comment}`);
    };

    handleKeyDownSendComment = (event: any) => {
        if(event.keyCode == 13) {
            this.handleSendComment();
        }
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={`card ${classes.postCard}`}>
                <div className={classes.postBody}>
                    <div className={classes.postHeader}>

                        <div className={classes.postHeaderLeft}>
                            <Avatar className={classes.postAvatar} src="profile.jpeg" />

                            <div className={classes.postHeaderText}>
                                <div className={classes.userInfo}>
                                    <Typography className={classes.userName}>Ivan Fedotov</Typography>
                                    <Typography className={classes.userLogin}>@iyufedotov</Typography>
                                </div>
                                <Typography className={classes.postDate}>27 October, 14:56</Typography>
                            </div>
                        </div>

                        <IconButton disableRipple classes={{ label: classes.postMenuLabel }} className={classes.postMenu} aria-label="More" aria-owns={this.state.anchorEl ? 'fade-menu' : undefined} aria-haspopup="true" onClick={this.handleClick}>
                            <MoreHorizIcon className={classes.postMenuIcon} />
                        </IconButton>
                        <Menu id="fade-menu" anchorEl={this.state.anchorEl} open={Boolean(this.state.anchorEl)}
                            onClose={this.handleClose} TransitionComponent={Fade}>

                            <MenuItem name="pin" id="pin" onClick={this.handleClose}>Pin to top</MenuItem>
                            <MenuItem name="edit" id="edit" onClick={this.handleClose}>Edit</MenuItem>
                            <MenuItem name="delete" id="delete" onClick={this.handleClose}>Delete</MenuItem>
                            
                        </Menu>

                    </div>

                    <Typography className={classes.postContent}>
                        Bitfinex retail shorts on the left, professional money shorts on the right.
                        The pros have the least short exposure since January, and the retail (dumb money) is more short than ever.
                        Somebody 'bout to get REKT
                    </Typography>

                    <div className={classes.postFooter}>
                        <FormControlLabel
                            className={classes.footerIconLabel}
                            control={
                                <Checkbox
                                    disableRipple
                                    classes={{
                                        root: classes.iconRoot,
                                    }}
                                    icon={<FavoriteBorder className={classes.footerIcon} />}
                                    checkedIcon={<Favorite className={`${classes.footerIcon} ${classes.checkedIcon}`}/>}
                                    value="like"
                                />
                            }
                            label="256"
                        />

                        <FormControlLabel
                            className={classes.footerIconLabel}
                            control={
                                <Comment
                                    className={classes.footerIcon}
                                    color="primary"
                                    onClick={this.handleClickShowInput}
                            />
                            }
                            label="10"
                        />

                        <FormControlLabel
                            className={classes.footerIconLabel}
                            control={
                                <Repeat
                                    className={classes.footerIcon}
                                    color="primary"
                            />
                            }
                            label="1"
                        />
                    </div>
                    <div className={`${classes.container} ${this.state.showInput ? classes.show : classes.hidden}`}>
                        <FormControl className={classes.textField}>
                            <Input
                                id="comment"
                                name="comment"
                                type='text'
                                value={this.state.comment}
                                onChange={this.handleChange}
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
                </div>
                <div className={classes.postComments}>
                    <ul className={classes.commentsList}>
                        <li className={classes.commentsItem}>
                            <Avatar className={classes.postAvatar} src="profile.jpeg" />
                            <div className={classes.commentContent}>
                                <div className={classes.userInfo}>
                                    <Typography className={classes.userName}>Jason Born</Typography>
                                    <Typography className={classes.userLogin}>@born</Typography>
                                </div>
                                <Typography className={classes.commentText}>This will be the first answer</Typography>
                                <Typography className={classes.postDate}>27 October, 14:56</Typography>
                            </div>
                        </li>
                        <li className={classes.commentsItem}>
                            <Avatar className={classes.postAvatar} src="profile.jpeg" />
                            <div className={classes.commentContent}>
                                <div className={classes.userInfo}>
                                    <Typography className={classes.userName}>Jason Born</Typography>
                                    <Typography className={classes.userLogin}>@born</Typography>
                                </div>
                                <Typography className={classes.commentText}>This will be the first answer</Typography>
                                <Typography className={classes.postDate}>27 October, 14:56</Typography>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default withStyles(styles)(Post);