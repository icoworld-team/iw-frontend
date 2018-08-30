import React, { Component } from 'react'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton'
import MessageOutlined from '@material-ui/icons/Message'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import HeaderMessages from '../HeaderMessages';

const styles = (theme: Theme) => createStyles({
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
});

class HeaderMessagesPopper extends Component<any> {
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
    const { classes } = this.props;
    const { open } = this.state;
    
    return (
      <>
        <IconButton
          buttonRef={node => {
            this.anchorEl = node;
          }}
          aria-haspopup="true"
          onClick={this.handleToggle}
          color="inherit"
        >
          <MessageOutlined />
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
                    <HeaderMessages />
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