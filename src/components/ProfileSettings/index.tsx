import React, { Component } from 'react';
import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import MainAppBar from '../MainAppBar';

const styles = (theme: Theme) => createStyles({
  profileSettings: {
    marginTop: '35px',
    width: '1100px',
    margin: '0 auto',
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  profileSettingsLeft: {
    flex: 1,
    marginRight: '24px',
    maxWidth: '76%',
  },
  profileSettingsRight: {
    flex: '0 0 24%',
    maxWidth: '24%',
  },
  profileSettingsContent: {
    padding: 0,
    paddingTop: '12px',
    marginBottom: '30px',
  },
  profileSettingsHeading: {
    borderBottom: '1px solid #000',
    textAlign: 'center',
  },
  title: {
    fontSize: '18px',
    lineHeight: '24px',
    marginBottom: '10px',
    display: 'block',
  },
  formList: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  formItem: {
    marginTop: '15px',
    borderBottom: '1px solid #b9b9b9',
    paddingBottom: '50px',
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  formItemHeading: {
    textAlign: 'center',
  },
  formItemContent: {
    width: '390px',
    margin: '0 auto',
  },
  formRow: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: '15px',
  },
  formGroupRow: {
    marginBottom: '5px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  formTextarea: {
    alignItems: 'flex-start',
    marginBottom: '15px',
  },
  inputLabel: {
    marginRight: '10px',
    color: '#747474',
  },
  textareaLabel: {
    marginTop: '5px',
  },
  input: {
    width: '290px',
  },
  formGroupYearsInputs: {
    width: '290px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  yearsInput: {
    width: '125px',
  },
  formGroupBottom: {
    textAlign: 'right',
  },
  formGroupBtn: {
    cursor: 'pointer',
    color: '#4a86e8',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  formBtns: {
    justifyContent: 'center',
  },

  profileSettingsList: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  profileSettingsItem: {
    padding: '25px 60px',
    borderBottom: '1px solid #b9b9b9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  profileSettingsItemLabel: {
    width: '250px',
    color: '#747474',
  },
  profileSettingsItemInfo: {
    flex: 1,
  },
  profileSettingsItemBtn: {
    color: '#4a86e8',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    }
  },
  profileSettingsItemSwitcher: {
    height: '22px',
  },
  
  tabsList: {
    padding: '15px 0',
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
    fontWeight: theme.typography.fontWeightRegular,
    position: 'relative',
    '&:hover': {
      color: '#3f51b5',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#3f51b5',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#3f51b5',
    },
  },
  labelContainer: {
    padding: '6px 12px',
  },
  tabSelected: {
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '2px',
      height: '100%',
      backgroundColor: '#3f51b5',
      top: 0,
      left: 0,
    },
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
        
        <Grid container spacing={0}>
          <Grid item xs={1} />

          <Grid item xs={10}>
            <div className={classes.profileSettings}>

              <div className={classes.row}>
                <div className={classes.profileSettingsLeft}>

                  {this.state.tab === 0 && 
                    <>
                      <div className={`card ${classes.profileSettingsContent}`}>
                        <div className={classes.profileSettingsHeading}>
                          <span className={classes.title}>Personal info</span>
                        </div>
                        <form action="">
                          <ul className={classes.formList}>
                            <li className={classes.formItem}>
                              <div className={classes.formItemHeading}><span className={classes.formItemTitle}>Main</span></div>
                              <div className={classes.formItemContent}>
                                <div className={classes.formRow}>
                                  <Typography className={classes.inputLabel}>First name:</Typography>
                                  <TextField className={classes.input} name="name" />
                                </div>
                                <div className={classes.formRow}>
                                  <Typography className={classes.inputLabel}>Last name:</Typography>
                                  <TextField className={classes.input} name="lastName" />
                                </div>
                                <div className={classes.formRow}>
                                  <Typography className={classes.inputLabel}>Nickname:</Typography>
                                  <TextField className={classes.input} name="nickname" />
                                </div>
                              </div>
                            </li>
                            <li className={classes.formItem}>
                              <div className={classes.formItemHeading}><span className={classes.formItemTitle}>Contacts</span></div>
                              <div className={classes.formItemContent}>
                                <div className={classes.formRow}>
                                  <Typography className={classes.inputLabel}>Country:</Typography>
                                  <TextField className={classes.input} name="country" />
                                </div>
                                <div className={classes.formRow}>
                                  <Typography className={classes.inputLabel}>City:</Typography>
                                  <TextField className={classes.input} name="city" />
                                </div>
                                <div className={classes.formRow}>
                                  <Typography className={classes.inputLabel}>Facebook:</Typography>
                                  <TextField className={classes.input} name="facebook" />
                                </div>
                                <div className={classes.formRow}>
                                  <Typography className={classes.inputLabel}>Twitter:</Typography>
                                  <TextField className={classes.input} name="twitter" />
                                </div>
                                <div className={classes.formRow}>
                                  <Typography className={classes.inputLabel}>LinkedIn:</Typography>
                                  <TextField className={classes.input} name="linkedIn" />
                                </div>
                                <div className={classes.formRow}>
                                  <Typography className={classes.inputLabel}>Site:</Typography>
                                  <TextField className={classes.input} name="site" />
                                </div>
                              </div>
                            </li>
                            <li className={classes.formItem}>
                              <div className={classes.formItemHeading}><span className={classes.formItemTitle}>About</span></div>
                              <div className={classes.formItemContent}>
                                
                                <div className={`${classes.formRow} ${classes.formTextarea}`}>
                                  <Typography className={`${classes.inputLabel} ${classes.textareaLabel}`}>About me:</Typography>
                                  <TextField className={classes.input} name="aboutMe" multiline rows="6" />
                                </div>
                                
                                <div className={classes.formGroup}>
                                  <div className={`${classes.formRow} ${classes.formGroupRow}`}>
                                    <Typography className={classes.inputLabel}>Experience:</Typography>
                                    <TextField className={classes.input} name="experience" />
                                  </div>
                                  <div className={`${classes.formRow} ${classes.formGroupRow}`}>
                                    <Typography className={classes.inputLabel}>Years:</Typography>
                                    <div className={classes.formGroupYearsInputs}>
                                      <TextField className={classes.yearsInput} name="experienceYearsFrom" />
                                      <span>—</span>
                                      <TextField className={classes.yearsInput} name="experienceYearsTo" />
                                    </div>
                                  </div>
                                  <div className={classes.formGroupBottom}>
                                    <span className={classes.formGroupBtn}>Add</span>
                                  </div>
                                </div>
                                
                                <div className={classes.formGroup}>
                                  <div className={`${classes.formRow} ${classes.formGroupRow}`}>
                                    <Typography className={classes.inputLabel}>Education:</Typography>
                                    <TextField className={classes.input} name="education" />
                                  </div>
                                  <div className={`${classes.formRow} ${classes.formGroupRow}`}>
                                    <Typography className={classes.inputLabel}>Years:</Typography>
                                    <div className={classes.formGroupYearsInputs}>
                                      <TextField className={classes.yearsInput} name="educationYearsFrom" />
                                      <span>—</span>
                                      <TextField className={classes.yearsInput} name="educationYearsTo" />
                                    </div>
                                  </div>
                                  <div className={classes.formGroupBottom}>
                                    <span className={classes.formGroupBtn}>Add</span>
                                  </div>
                                </div>

                                <div className={classes.formRow}>
                                  <Typography className={classes.inputLabel}>Languages:</Typography>
                                  <TextField className={classes.input} name="" />
                                </div>

                                <div className={`${classes.formRow} ${classes.formBtns}`}>
                                  <Button type="submit" variant="contained" color="primary" className={classes.button}>
                                    Save
                                  </Button>
                                </div>

                              </div>
                            </li>
                          </ul>
                        </form>
                      </div>
                    </>
                  }
                  {this.state.tab === 1 && 
                    <>
                      <div className={`card ${classes.profileSettingsContent}`}>
                        <div className={classes.profileSettingsHeading}>
                          <span className={classes.title}>General settings</span>
                        </div>

                        <ul className={classes.profileSettingsList}>
                          <li className={classes.profileSettingsItem}>
                            <Typography className={classes.profileSettingsItemLabel}>Emal:</Typography>
                            <Typography className={classes.profileSettingsItemInfo}>b****ey@gmail.com</Typography>
                            <Typography className={classes.profileSettingsItemBtn}>Change</Typography>
                          </li>
                          <li className={classes.profileSettingsItem}>
                            <Typography className={classes.profileSettingsItemLabel}>Password:</Typography>
                            <Typography className={classes.profileSettingsItemInfo}>changed 7 mounth ago</Typography>
                            <Typography className={classes.profileSettingsItemBtn}>Change</Typography>
                          </li>
                          <li className={classes.profileSettingsItem}>
                            <Typography className={classes.profileSettingsItemLabel}>Phone number:</Typography>
                            <Typography className={classes.profileSettingsItemInfo}>+7 *** *** ** 01</Typography>
                            <Typography className={classes.profileSettingsItemBtn}>Change</Typography>
                          </li>
                          <li className={classes.profileSettingsItem}>
                            <Typography className={classes.profileSettingsItemLabel}>Language:</Typography>
                            <Typography className={classes.profileSettingsItemInfo}>English</Typography>
                            <Typography className={classes.profileSettingsItemBtn}>Change</Typography>
                          </li>
                          <li className={classes.profileSettingsItem}>
                            <Typography className={classes.inputLabel}>You can <span className={classes.profileSettingsItemBtn}>delete your profile</span>.</Typography>
                          </li>
                        </ul>
                      </div>
                    </>}
                  {this.state.tab === 2 && 
                    <>
                      <div className={`card ${classes.profileSettingsContent}`}>
                        <div className={classes.profileSettingsHeading}>
                          <span className={classes.title}>Privacy</span>
                        </div>

                        <ul className={classes.profileSettingsList}>
                          <li className={classes.profileSettingsItem}>
                            <Typography className={classes.profileSettingsItemLabel}>Who can send me PM?</Typography>
                            <Typography className={classes.profileSettingsItemInfo}>All users</Typography>
                            <Typography className={classes.profileSettingsItemBtn}>Change</Typography>
                          </li>
                          <li className={classes.profileSettingsItem}>
                            <Typography className={classes.profileSettingsItemLabel}>Who can comment my posts?</Typography>
                            <Typography className={classes.profileSettingsItemInfo}>Nobody</Typography>
                            <Typography className={classes.profileSettingsItemBtn}>Change</Typography>
                          </li>
                        </ul>
                      </div>

                      <div className={`card ${classes.profileSettingsContent}`}>
                        <div className={classes.profilePrivacy}>
                          <div className={classes.profileSettingsHeading}>
                            <span className={classes.title}>Security</span>
                          </div>

                          <ul className={classes.profileSettingsList}>
                            <li className={classes.profileSettingsItem}>
                              <Typography className={classes.profileSettingsItemLabel}>Last activity:</Typography>
                              <Typography className={classes.profileSettingsItemInfo}>15:20, Today (Russia, Google Chrome browser)</Typography>
                            </li>
                            <li className={classes.profileSettingsItem}>
                              <Typography className={classes.profileSettingsItemLabel}>Two-factor authentication:</Typography>
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
                            </li>
                          </ul>
                        </div>
                      </div>

                    </>}
                </div>

                <div className={classes.profileSettingsRight}>
                  <div className={`card ${classes.tabsList}`}>
                    <Tabs
                      value={this.state.tab}
                      onChange={this.handleChange}
                      classes={{ indicator: classes.tabsIndicator, flexContainer: classes.flexContainer }}
                    >
                      <Tab
                        disableRipple
                        classes={{ root: classes.tabRoot, selected: classes.tabSelected, labelContainer: classes.labelContainer }}
                        label="Personal info"
                      />
                      <Tab
                        disableRipple
                        classes={{ root: classes.tabRoot, selected: classes.tabSelected, labelContainer: classes.labelContainer }}
                        label="General settings"
                      />
                      <Tab
                        disableRipple
                        classes={{ root: classes.tabRoot, selected: classes.tabSelected, labelContainer: classes.labelContainer }}
                        label="Privacy and Security"
                      />
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={1} />
        </Grid>
      </>
    );
  }
};

export default withStyles(styles)(ContactUs);
