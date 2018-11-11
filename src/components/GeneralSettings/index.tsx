import React, { Component } from 'react';
import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {GET_USER, UPDATE_USER} from '../../api/graphql'
import { Mutation } from 'react-apollo'
import SettingsPopup from '../SettingsPopup'
import { withApollo } from 'react-apollo'
import { changePassword } from "../../api";
import {relativeTime} from "../../utils";

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

const settings = ["English", "Russian"];

function languageToFullWord (language:string) {
    if (language === 'en') return 'English';
    if (language === 'ru') return 'Russian';
    return language;
}

class GeneralSettings extends Component<any> {
  state={
    checked: false,
    isChangeEmail: false,
    isChangePassword: false,
    isChangePhone: false,
    isChangeLanguage: false,
    newEmail: '',
    newNumber: '',
    language: this.props.user.language,
    open: false,
    repeatedNewPassword: '',
    oldPassword: '',
    newPassword: '',
    passwordChangingError: '',
  };

  handleClickOpen = () => {
    this.setState({
        open: true
    });
  };

  handleClose = (value:string) => {
    this.props.client.mutate({
      mutation: UPDATE_USER,
      variables: {input: {
              language: value
          }}
      }).then((data:any) => console.log('update language'));
    this.setState({ language: value, open: false});
  };

  handleChange =(e:React.ChangeEvent<HTMLInputElement>) =>{
    this.setState({
        [e.target.name]: e.target.value
    });
  };

  settingsChangeEmail = () => {
    this.setState({ isChangeEmail: !this.state.isChangeEmail });
  };

  settingsChangePassword = () => {
    this.setState({ isChangePassword: !this.state.isChangePassword });
  };

  settingsChangePhone = () => {
    this.setState({ isChangePhone: !this.state.isChangePhone });
  };

  saveNewPassword = () => {
    const { oldPassword, newPassword, repeatedNewPassword } = this.state;
    if (oldPassword && newPassword && repeatedNewPassword && newPassword === repeatedNewPassword) {
        changePassword(oldPassword, newPassword, repeatedNewPassword)
            .then((data:any) => {
              const user = this.props.client.readQuery({
                  query: GET_USER,
                  variables: {userId: this.props.user.id}
              }).getUser;
              const updatedUser = {
                  ...user,
                  pwdUpdatedAt: data
              };
              this.props.client.writeQuery({
                  query: GET_USER,
                  variables: {userId: this.props.user.id},
                  data: {getUser: updatedUser}
              })
            })
            .then(() => this.setState({
                repeatedNewPassword: '',
                oldPassword: '',
                newPassword: '',
                isChangePassword: false,
                passwordChangingError: '',
            }))
            .catch((error:any) => this.setState({passwordChangingError: error.message}));
    }
    else {
        this.setState({passwordChangingError: 'Please correctly fill all fields and try again'})
    }
  };

  render() {
    const { classes, user } = this.props;
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
                    {user.email}
                </Typography>

                {this.state.isChangeEmail === false ? '' :
                  <>
                    <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                      className={classes.profileSettingsItemInput} name="newEmail" placeholder="Enter new address"
                               value={this.state.newEmail} onChange={this.handleChange}/>
                    <Mutation mutation={UPDATE_USER} onCompleted={() => this.setState({newEmail: '', isChangeEmail: false})} onError={(error)=>console.log(error)}>
                        {updateUser => (
                            <Button variant="contained" color="secondary" className={`button fill-button ${classes.profileSettingsItemSave}`}
                                    onClick={() => updateUser({variables: {input: {email: this.state.newEmail}}})}>
                                Save
                            </Button>
                        )}
                    </Mutation>
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
                  {relativeTime(user.pwdUpdatedAt)}
                </Typography>

                {this.state.isChangePassword === false ? '' :
                  <>
                    <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }} type="password"
                      className={classes.profileSettingsItemInput} name="oldPassword" placeholder="Enter old password" value={this.state.oldPassword} onChange={this.handleChange}/>
                    <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }} type="password"
                      className={classes.profileSettingsItemInput} name="newPassword" placeholder="Enter new password" value={this.state.newPassword} onChange={this.handleChange}/>
                    <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }} type="password"
                      className={classes.profileSettingsItemInput} name="repeatedNewPassword" placeholder="Repeat new password" value={this.state.repeatedNewPassword} onChange={this.handleChange}/>
                    {this.state.passwordChangingError && <h3 style={{fontWeight: 400, fontSize: '12px', color: 'red'}}>{this.state.passwordChangingError}</h3>}
                    <Button variant="contained" color="secondary" className={`button fill-button ${classes.profileSettingsItemSave}`} onClick={this.saveNewPassword}>
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
                    {user.phone}
                </Typography>

                {this.state.isChangePhone === false ? '' :
                  <>
                    <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                      className={classes.profileSettingsItemInput} name="newNumber" placeholder="Enter new phone number"
                               value={this.state.newNumber} onChange={this.handleChange} />
                    <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                      className={classes.profileSettingsItemInput} name="smsCode" placeholder="Enter SMS code" />
                    <Mutation mutation={UPDATE_USER} onCompleted={() => this.setState({newNumber: '', isChangePhone: false})} onError={(error)=>console.log(error)}>
                        {updateUser => (
                            <Button variant="contained" color="secondary" className={`button fill-button ${classes.profileSettingsItemSave}`}
                                    onClick={() => updateUser({variables: {input: {phone: this.state.newNumber}}})}>
                                Save
                            </Button>
                        )}
                    </Mutation>
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
                    {languageToFullWord(this.state.language)}
                </Typography>
              </div>
              <Typography onClick={this.handleClickOpen} className={classes.profileSettingsItemBtn}>
                Change
              </Typography>
            </li>

            <SettingsPopup
              selectedValue={this.state.language}
              open={this.state.open}
              onClose={this.handleClose}
              settings={settings}
              title="language"
            />

            {/* <li className={classes.profileSettingsItem}>
              <Typography className={classes.inputLabel}>You can <span className={classes.profileSettingsItemBtn}>delete your profile</span>.</Typography>
            </li> */}
          </ul>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(withApollo(GeneralSettings));
