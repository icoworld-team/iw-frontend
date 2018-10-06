import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles, Theme } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EditIcon from '@material-ui/icons/Edit';
import InfoIcon from '@material-ui/icons/Info';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { Link } from "react-router-dom";
import { handleErrors, fetchGet } from '../../api'
import { push } from "react-router-redux";
import { logOut } from "../../actions";
import { connect } from "react-redux";

const styles = (theme: Theme) => ({
  menuItem: {},
  menuLink: {
    display: 'inherit',
    textDecoration: 'none'
  },
  primaryRoot: {
    padding: '0 10px',
  },
  icon: {
    marginRight: '5px',
  },
  iconRoot: {
    '&:hover': {
      background: 'none',
    },
  },
});

class SimpleMenu extends React.Component<any> {
  state = {
    anchorEl: null,
  };

  handleClick = (event: any) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogOut = () => {
      const url = 'http://icoworld.projects.oktend.com:3000/logout';
      fetchGet(url)
          .then(response => handleErrors(response))
          .then(response => console.log(response))
          .then(this.props.push)
          .then(this.props.logOut)
          .then(() => localStorage.removeItem("user"))
          .catch(error=>console.log(error));
  };

  handlePushToSettings = () => {
      this.props.toSettings();
      this.handleClose();
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <div>
        <IconButton
          aria-owns={open ? 'menu-appbar' : undefined}
          aria-haspopup="true"
          classes={{root: classes.iconRoot}}
          disableRipple
          onClick={this.handleClick}
          color="inherit"
        >
          <AccountCircle/>
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          onClose={this.handleClose}
        >
          <MenuItem className={classes.menuItem} onClick={this.handlePushToSettings}>
              <ListItemIcon className={classes.icon}>
                <EditIcon />
              </ListItemIcon>
              <ListItemText classes={{ primary: classes.primary, root: classes.primaryRoot }} inset primary="Settings" />
          </MenuItem>

          <MenuItem className={classes.menuItem} onClick={this.handleClose}>
            <Link className={classes.menuLink} to="/contacts">
              <ListItemIcon className={classes.icon}>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText classes={{ primary: classes.primary, root: classes.primaryRoot }} inset primary="Help" />
            </Link>
          </MenuItem>

          <MenuItem className={classes.menuItem} onClick={this.handleLogOut}>
              <ListItemIcon className={classes.icon}>
                  <ExitToAppIcon/>
              </ListItemIcon>
              <ListItemText classes={{ primary: classes.primary, root: classes.primaryRoot }} inset primary="Log out" />
          </MenuItem>

        </Menu>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        logOut: () => dispatch(logOut()),
        push: () => dispatch(push('/')),
        toSettings: () => dispatch(push('/settings'))
    }
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(SimpleMenu));