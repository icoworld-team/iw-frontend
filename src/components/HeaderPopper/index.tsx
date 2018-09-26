import React, { Component } from 'react'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton'
import MessageOutlined from '@material-ui/icons/Message'
import NotificationsIcon from '@material-ui/icons/NotificationsActive'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import HeaderMessages from '../HeaderMessages';
import HeaderNotify from '../HeaderNotify';

const styles = (theme: Theme) => createStyles({
  icon: {
    '&:after': {
      display: 'block',
      position: 'absolute',
      content: '""',
      right: '9px',
      top: '9px',
      zIndex: 10,
      width: '8px',
      height: '8px',
      backgroundColor: '#f44336',
      borderRadius: '50%',
      boxShadow: '0 0 0 rgba(244,67,54,.4)',
      animation: 'pulse 2s infinite',
    },
  },
  iconRoot: {
    '&:hover': {
      background: 'none',
    },
  },
	paper: {
    // marginTop: '7px',
		width: '350px',
		zIndex: 100,
    'position': 'relative',
    '&::after': {
      borderBottom: '5px solid #fff',
      top: '-9px',
      height: '9px',
      borderLeft: '5px solid transparent',
      borderRight: '5px solid transparent',
      content: '""',
      position: 'absolute',
      right: '18px',
      width: '10px',
      boxSizing: 'border-box'
    },
    '&:before': {
      borderBottom: '5px solid #000',
      top: '-10px',
      height: '10px',
      borderLeft: '5px solid transparent',
      borderRight: '5px solid transparent',
      content: '""',
      position: 'absolute',
      right: '18px',
      width: '10px',
      boxSizing: 'border-box'
    }
  },
  paperHeading: {
    padding: '15px 10px 15px 20px',
    borderBottom: '1px solid #dee2e6',
    fontSize: '17px',
    lineHeight: '20px',
    color: '#000',
  },
  paperContent: {
    padding: '5px 10px',
  },
});

export interface Props { variant: 'empty' | 'notify' | 'messages'; classes: any; }

class HeaderMessagesPopper extends Component<Props> {
  state = {
    open: false,
	};

  anchorEl: any;

  handleToggle = () => {
    this.setState(state => ({ open: !this.state.open }));
  };

  handleClose = (event: any) => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes, variant } = this.props;
    const { open } = this.state;

    let popperContent: any;
    let popperIcon: any;
    let popperTitle: any;
    switch (variant) {
      case 'notify':
        popperIcon = <NotificationsIcon />;
        popperContent = <HeaderNotify />;
        popperTitle = 'Notifications';
        break;
      case 'messages':
        popperIcon = <MessageOutlined />;
        popperContent = <HeaderMessages />;
        popperTitle = 'Messages';
        break;
    }
    
    return (
      <>
        <IconButton
          className={classes.icon}
          disableRipple
          classes={{root: classes.iconRoot}}
          buttonRef={node => {
            this.anchorEl = node;
          }}
          aria-haspopup="true"
          onClick={this.handleToggle}
          color="inherit"
        >
          {popperIcon}
        </IconButton>
        <Popper
          open={open}
          anchorEl={this.anchorEl}
          placement="bottom-end"
          transition
          disablePortal={false}
        >
          {({ TransitionProps }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: 'right top' }}
            >
              <Paper className={classes.paper}>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <div>
                    <div className={classes.paperHeading}>{popperTitle}</div>
                    <div className={classes.paperContent}>
                      {popperContent}
                    </div>
                  </div>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </>
    )
  }
}

export default withStyles(styles)(HeaderMessagesPopper);