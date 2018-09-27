import React, { Component } from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import SettingsPopup from '../SettingsPopup';

const styles = () => createStyles({
  formItemHeading: {
    color: '#8b8b8b',
    fontSize: '24px',
    lineHeight: '30px',
    marginBottom: '10px',
  },
  profileSettingsList: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  profileSettingsItem: {
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  profileSettingsItemLabel: {
    width: '280px',
    color: '#171717',
  },
  profileSettingsItemCenter: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  profileSettingsItemInfo: {
    marginBottom: '10px',
    color: '#171717',
  },
  profileSettingsItemBtn: {
    color: '#8b8b8b',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    }
  },
  profileSettingsItemSwitcher: {
    height: '22px',
  },
});

class PrivacyAndSecurity extends Component<any> {
  state={
    checked: false,
    open: false,
    selectedValue: '',
  };

  switchChange = (name: any) => (event: any) => {
    this.setState({ [name]: event.target.checked });
  };

  handleChange =(event:any, value:any)=>{
    this.setState({
      tab: value
    });
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = (value: any) => {
    this.setState({ selectedValue: value, open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <div className={classes.profileSettingsContent}>

          <ul className={classes.profileSettingsList}>
            <div className={classes.formItemHeading}><span className={classes.formItemTitle}>Privacy</span></div>

            <li className={classes.profileSettingsItem}>
              <Typography className={classes.profileSettingsItemLabel}>Who can send me PM?</Typography>
              <div className={classes.profileSettingsItemCenter}>
                <Typography className={classes.profileSettingsItemInfo}>All users</Typography>
              </div>
              <Typography className={classes.profileSettingsItemBtn}>Change</Typography>
            </li>

            <li className={classes.profileSettingsItem}>
              <Typography className={classes.profileSettingsItemLabel}>Who can comment my posts?</Typography>
              <div className={classes.profileSettingsItemCenter}>
                <Typography className={classes.profileSettingsItemInfo}>
                  {this.state.selectedValue}
                </Typography>
              </div>
              <Typography
                className={classes.profileSettingsItemBtn}
                onClick={this.handleClickOpen}
              >
                Change
              </Typography>
            </li>

          </ul>
        </div>

        <SettingsPopup
          selectedValue={this.state.selectedValue}
          open={this.state.open}
          onClose={this.handleClose}
        />

        <div className={classes.profileSettingsContent} style={{marginTop: '45px'}}>
          <ul className={classes.profileSettingsList}>
            <div className={classes.formItemHeading}><span className={classes.formItemTitle}>Security</span></div>
            
            <li className={classes.profileSettingsItem}>
              <Typography className={classes.profileSettingsItemLabel}>Last activity</Typography>
              <div className={classes.profileSettingsItemCenter}>
                <Typography className={classes.profileSettingsItemInfo}>15:20, Today (Russia, Google Chrome browser)</Typography>
              </div>
            </li>

            <li className={classes.profileSettingsItem}>
              <Typography className={classes.profileSettingsItemLabel}>Two-factor authentication</Typography>
              
              <div className={classes.profileSettingsItemCenter}>
                <FormControlLabel
                  className={`${classes.profileSettingsItemInfo} ${classes.profileSettingsItemSwitcher}`}
                  control={
                    <Switch
                      checked={this.state.checked}
                      onChange={this.switchChange('checked')}
                      value="checked"
                      color="primary"
                    />
                  }
                  label="by number +7 *** *** ** 01"
                />
              </div>
            </li>

          </ul>
        </div>
      </>
    );
  }
};

export default withStyles(styles)(PrivacyAndSecurity);
