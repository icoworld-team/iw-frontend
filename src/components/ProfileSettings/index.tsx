import React, { Component } from 'react';
import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonalInfo from '../PersonalInfo';
import GeneralSettings from '../GeneralSettings';
import PrivacyAndSecurity from '../PrivacyAndSecurity';
import { Query } from 'react-apollo'
import { GET_USER } from '../../api/graphql'
import { connect } from "react-redux";
import ModalUploadPhoto from '../ModalUploadPhoto'

const styles = (theme: Theme) => createStyles({
  subHeader: {
    padding: '20px 0',
    backgroundColor: '#edf1f5',
  },
  subHeaderContainer: {
		margin: '0 auto',
    maxWidth: '1100px',
    display: 'flex',
  },
  avatar: {
		width: '150px',
		height: '160px',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginLeft: '15px',
    marginBottom: '5px',
  },
  userName: {
    fontWeight: 600,
    fontSize: '18px',
    color:' #171717',
    lineHeight: '22px',
  },
  userLogin: {
    fontSize: '16px',
    color: '#8b8b8b',
    lineHeight: '20px',
  },

  flexContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  tabsIndicator: {
    display: 'none',
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 72,
    minHeight: '30px',
    position: 'relative',
    '&:hover': {
      opacity: 1,
    },
    '&$tabSelected': {
      fontWeight: 600,
    },
  },
  labelContainer: {
    padding: '0 12px',
  },
  label: {
    color: '#171717',
    fontSize: '18px',
    opacity: 1,
  },
  tabSelected: {
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '2px',
      height: '100%',
      backgroundColor: '#980000',
      top: 0,
      left: 0,
    },
  },

  profileSettingsLeft: {
    width: '380px',
  },
  profileSettingsRight: {
    width: '720px',
  },
});

class ProfileSettings extends Component<any> {
  state={
    tab: 0,
    checked: false,
    modalOpen: false,
  };

  handleOpen = () => {
    this.setState({
        modalOpen: true
    })
  };

  handleClose = () => {
    this.setState({
       modalOpen: false
    })
  };

  // switchChange = (name: any) => (event: any) => {
  //   this.setState({ [name]: event.target.checked });
  // };

  handleChange =(event:any, value:any)=>{
    this.setState({
        tab: value
    });
  };

  render() {
    const { classes } = this.props;

    return (
          <Query query={GET_USER} variables={{userId: this.props.authUser.id}}>
              {({ loading, error, data}) => {
                  if(loading) return null;
                  if(error) return `Error: ${error}`;
                  const user = data.getUser;
                  return (
                      <>
                          <div className={classes.subHeader}>
                              <Grid container spacing={0}>
                                  <Grid item xs={1} />

                                  <Grid item xs={10} className={classes.subHeaderContainer}>
                                      <img onClick={this.handleOpen} className={classes.avatar} src="profile.jpeg" />
                                      <div className={classes.userInfo}>
                                          <Typography className={classes.userName}>{user.name}</Typography>
                                          <Typography className={classes.userLogin}>@{user.login}</Typography>
                                      </div>
                                  </Grid>
                                  <ModalUploadPhoto id={this.props.authUser.id} open={this.state.modalOpen} onClose={this.handleClose}/>
                                  <Grid item xs={1} />
                              </Grid>
                          </div>

                          <div style={{background: '#fff', flex: 1}}>
                              <Grid container spacing={0}>
                                  <Grid item xs={1} />

                                  <Grid item xs={10}>

                                      <div className={`page-content`}>

                                          <div className={classes.profileSettingsLeft}>
                                              <div className={classes.tabsList}>
                                                  <Tabs
                                                      value={this.state.tab}
                                                      onChange={this.handleChange}
                                                      classes={{ indicator: classes.tabsIndicator, flexContainer: classes.flexContainer }}
                                                  >
                                                      <Tab
                                                          disableRipple
                                                          classes={{ root: classes.tabRoot, selected: classes.tabSelected, labelContainer: classes.labelContainer, label: classes.label }}
                                                          label="Personal info"
                                                      />
                                                      <Tab
                                                          disableRipple
                                                          classes={{ root: classes.tabRoot, selected: classes.tabSelected, labelContainer: classes.labelContainer, label: classes.label }}
                                                          label="General settings"
                                                      />
                                                      <Tab
                                                          disableRipple
                                                          classes={{ root: classes.tabRoot, selected: classes.tabSelected, labelContainer: classes.labelContainer, label: classes.label }}
                                                          label="Privacy and Security"
                                                      />
                                                  </Tabs>
                                              </div>
                                          </div>

                                          <div className={classes.profileSettingsRight}>

                                              {this.state.tab === 0 &&
                                              <>
                                                  <PersonalInfo user={user}/>
                                              </>
                                              }
                                              {this.state.tab === 1 &&
                                              <>
                                                  <GeneralSettings user={user}/>
                                              </>}
                                              {this.state.tab === 2 &&
                                              <>
                                                  <PrivacyAndSecurity user={user}/>
                                              </>}
                                          </div>

                                      </div>
                                  </Grid>

                                  <Grid item xs={1} />
                              </Grid>
                          </div>
                      </>
                  )
              }}
          </Query>
    );
  }
}

const mapStateToProps = ({auth}:any) => {
    return {
        authUser: auth.authUser
    }
};

export default connect(mapStateToProps)(withStyles(styles)(ProfileSettings))
