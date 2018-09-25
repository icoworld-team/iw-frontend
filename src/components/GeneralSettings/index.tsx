import React, { Component } from 'react';
import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = (theme: Theme) => createStyles({
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
    padding: '15px 0',
    borderBottom: '1px solid #edeef0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    '&:last-child': {
      borderBottom: 'none',
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
    color: '#171717',
  },
  profileSettingsItemInput: {
    width: '195px',
    minHeight: '25px',
    marginBottom: '10px',
  },
  profileSettingsItemSave: {
    width: '85px',
    minHeight: '25px',
  },
  profileSettingsItemBtn: {
    color: '#8b8b8b',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    }
  },
});

class generalSettings extends Component<any> {
  state={
    checked: false,
    isChangeEmail: false,
    isChangePassword: false,
    isChangePhone: false,
    isChangeLanguage: false,
  };

  handleChange =(event:any, value:any)=>{
    this.setState({
        tab: value
    });
  };

  settingsChangeEmail = () => {
    this.setState({ isChangeEmail: !this.state.isChangeEmail });
  }

  settingsChangePassword = () => {
    this.setState({ isChangePassword: !this.state.isChangePassword });
  }

  settingsChangePhone = () => {
    this.setState({ isChangePhone: !this.state.isChangePhone });
  }

  settingsChangeLanguage = () => {
    this.setState({ isChangeLanguage: !this.state.isChangeLanguage });
  }

  render() {
    const { classes } = this.props;

    return (
      <>
        <div className={classes.profileSettingsContent}>

          <ul className={classes.profileSettingsList}>
            <div className={classes.formItemHeading}><span className={classes.formItemTitle}>General</span></div>
            
            <li className={classes.profileSettingsItem}>
              <Typography className={classes.profileSettingsItemLabel}>Email address</Typography>

              <div className={classes.profileSettingsItemCenter}>
                <Typography
                  style={this.state.isChangeEmail === false ?
                  {marginBottom: 0} :
                  {marginBottom: '10px'}}
                  className={classes.profileSettingsItemInfo}
                >
                  b****ey@gmail.com
                </Typography>

                {this.state.isChangeEmail === false ? '' :
                  <>
                    <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                      className={classes.profileSettingsItemInput} name="email" placeholder="Enter new address" />
                    <Button variant="contained" color="secondary" className={`button fill-button ${classes.profileSettingsItemSave}`}>
                      Save
                    </Button>
                  </>
                }
              </div>

              <Typography onClick={this.settingsChangeEmail} className={classes.profileSettingsItemBtn}>
                {this.state.isChangeEmail === false ? 'Change' : 'Cancel'}
              </Typography>
            </li>

            <li className={classes.profileSettingsItem}>
              <Typography className={classes.profileSettingsItemLabel}>Password</Typography>
              
              <div className={classes.profileSettingsItemCenter}>
                <Typography
                  style={this.state.isChangePassword === false ?
                  {marginBottom: 0} :
                  {marginBottom: '10px'}}
                  className={classes.profileSettingsItemInfo}
                >
                  Changed 7 mounth ago
                </Typography>

                {this.state.isChangePassword === false ? '' :
                  <>
                    <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                      className={classes.profileSettingsItemInput} name="oldPassword" placeholder="Enter old password" />
                    <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                      className={classes.profileSettingsItemInput} name="newPassword" placeholder="Enter new password" />
                    <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                      className={classes.profileSettingsItemInput} name="repeatNewPassword" placeholder="Repeat new password" />
                    <Button variant="contained" color="secondary" className={`button fill-button ${classes.profileSettingsItemSave}`}>
                      Save
                    </Button>
                  </>
                }
              </div>

              <Typography onClick={this.settingsChangePassword} className={classes.profileSettingsItemBtn}>
                {this.state.isChangePassword === false ? 'Change' : 'Cancel'}
              </Typography>
            </li>

            <li className={classes.profileSettingsItem}>
              <Typography className={classes.profileSettingsItemLabel}>Phone number</Typography>

              <div className={classes.profileSettingsItemCenter}>
                <Typography
                  style={this.state.isChangePhone === false ?
                  {marginBottom: 0} :
                  {marginBottom: '10px'}}
                  className={classes.profileSettingsItemInfo}
                >
                  +7 *** *** ** 01
                </Typography>

                {this.state.isChangePhone === false ? '' :
                  <>
                    <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                      className={classes.profileSettingsItemInput} name="phone" placeholder="Enter new phone number" />
                    <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                      className={classes.profileSettingsItemInput} name="smsCode" placeholder="Enter SMS code" />
                    <Button variant="contained" color="secondary" className={`button fill-button ${classes.profileSettingsItemSave}`}>
                      Save
                    </Button>
                  </>
                }
              </div>

              <Typography onClick={this.settingsChangePhone} className={classes.profileSettingsItemBtn}>
                {this.state.isChangePhone === false ? 'Change' : 'Cancel'}
              </Typography>
            </li>

            <li className={classes.profileSettingsItem}>
              <Typography className={classes.profileSettingsItemLabel}>Language</Typography>
              <div className={classes.profileSettingsItemCenter}>
                <Typography className={classes.profileSettingsItemInfo}>
                  English
                </Typography>
              </div>

              <Typography onClick={this.settingsChangeLanguage} className={classes.profileSettingsItemBtn}>
                {this.state.isChangeLanguage === false ? 'Change' : 'Cancel'}
              </Typography>
            </li>

            {/* <li className={classes.profileSettingsItem}>
              <Typography className={classes.inputLabel}>You can <span className={classes.profileSettingsItemBtn}>delete your profile</span>.</Typography>
            </li> */}
          </ul>
        </div>
      </>
    );
  }
};

export default withStyles(styles)(generalSettings);
