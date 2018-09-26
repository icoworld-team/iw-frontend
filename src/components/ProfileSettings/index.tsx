import React, { Component } from 'react';
import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MainAppBar from '../MainAppBar';
import PersonalInfo from '../PersonalInfo';
import GeneralSettings from '../GeneralSettings';
import PrivacyAndSecurity from '../PrivacyAndSecurity';

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

class ContactUs extends Component<any> {
  state={
    tab: 0,
    checked: false,
  };

  switchChange = (name: any) => (event: any) => {
    this.setState({ [name]: event.target.checked });
  };

  handleChange =(event:any, value:any)=>{
    this.setState({
        tab: value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <MainAppBar/>

        <div className={classes.subHeader}>
					<Grid container spacing={0}>
						<Grid item xs={1} />

						<Grid item xs={10} className={classes.subHeaderContainer}>
              <img className={classes.avatar} src="profile.jpeg" />
              <div className={classes.userInfo}>
                <Typography className={classes.userName}>Ivan Fedotov</Typography>
                <Typography className={classes.userLogin}>@iyufedotov</Typography>
              </div>
						</Grid>

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
                      <PersonalInfo />
                    </>
                  }
                  {this.state.tab === 1 && 
                    <>
                      <GeneralSettings />
                    </>}
                  {this.state.tab === 2 && 
                    <>
                      <PrivacyAndSecurity />
                    </>}
                </div>

              </div>
            </Grid>

            <Grid item xs={1} />
          </Grid>
        </div>
      </>
    );
  }
};

export default withStyles(styles)(ContactUs);
