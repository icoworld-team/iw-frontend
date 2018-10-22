import React, { Component } from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import SettingsPopup from '../SettingsPopup';
import { Mutation } from 'react-apollo'
import { SET_COMMENTERS, SET_PM_SENDERS, UPDATE_USER } from "../../api/graphql";
import { withApollo } from 'react-apollo'

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

const settings = ["All users", "Only verified", "Only my follows", "Nobody"];

class PrivacyAndSecurity extends Component<any> {
  state={
    twoFactorAuth: this.props.user.twoFactorAuth,
    open: false,
    pmSenders: this.props.user.pmsenders,
    commenters: this.props.user.commenters,
    fieldForChange: ''
  };

  // switchChange = (name: any) => (event: any) => {
  //   this.setState({ [name]: event.target.checked });
  // };
  //
  // handleChange =(event:any, value:any)=>{
  //   this.setState({
  //     tab: value
  //   });
  // };

  handleClickOpen = (field:string) => () => {
    this.setState({
      fieldForChange: field,
      open: true
    });
  };

  handleClose = (value:string) => {
    if(this.state.fieldForChange === 'pmSenders') {
      this.props.client.mutate({
          mutation: SET_PM_SENDERS,
          variables: {
            mode: value
          }
      }).then((data:any)=> console.log(data));
    }
    if(this.state.fieldForChange === 'commenters') {
      this.props.client.mutate({
          mutation: SET_COMMENTERS,
          variables: {
            mode: value
          }
      }).then((data:any)=> console.log(data));
    }
    this.setState((state:any) => ({ [state.fieldForChange]: value, open: false}));
  };

  render() {
    const { classes, user } = this.props;

    return (
      <>
        <div className={classes.profileSettingsContent}>

          <ul className={classes.profileSettingsList}>
            <div className={classes.formItemHeading}><span className={classes.formItemTitle}>Privacy</span></div>

            <li className={classes.profileSettingsItem}>
              <Typography className={classes.profileSettingsItemLabel}>Who can send me PM?</Typography>
              <div className={classes.profileSettingsItemCenter}>
                <Typography className={classes.profileSettingsItemInfo}>{this.state.pmSenders}</Typography>
              </div>
              <Typography className={classes.profileSettingsItemBtn} onClick={this.handleClickOpen('pmSenders')}>Change</Typography>
            </li>

            <li className={classes.profileSettingsItem}>
              <Typography className={classes.profileSettingsItemLabel}>Who can comment my posts?</Typography>
              <div className={classes.profileSettingsItemCenter}>
                <Typography className={classes.profileSettingsItemInfo}>
                  {this.state.commenters}
                </Typography>
              </div>
              <Typography
                className={classes.profileSettingsItemBtn}
                onClick={this.handleClickOpen('commenters')}
              >
                Change
              </Typography>
            </li>

          </ul>
        </div>

        <SettingsPopup
          selectedValue={this.state[this.state.fieldForChange]}
          open={this.state.open}
          onClose={this.handleClose}
          settings={settings}
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
                      <Mutation mutation={UPDATE_USER} onCompleted={() => this.setState((state:any) => ({twoFactorAuth: !state.twoFactorAuth}))} onError={(error)=>console.log(error)}>
                          {updateUser => (
                              <Switch
                                  checked={this.state.twoFactorAuth}
                                  value="checked"
                                  color="primary"
                                  onChange={() => updateUser({variables: {input: {twoFactorAuth: !this.state.twoFactorAuth}}})}
                              />
                          )}
                      </Mutation>
                  }
                  label={`by number ${user.phone}`}
                />
              </div>
            </li>

          </ul>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(withApollo(PrivacyAndSecurity));
