import React, { Component } from 'react';
import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const styles = (theme: Theme) => createStyles({
  contacts: {
    marginTop: '35px',
    maxWidth: '1100px',
    margin: '0 auto',
    minWidth: '1000px',
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  pageHeading: {
    marginBottom: '36px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '20px',
    lineHeight: '24px',
    fontWeight: 400,
    margin: 0,
  },
  breadcrumbsList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
  },
  breadcrumbsItem: {
    color: '#3f51b5',
    fontSize: '14px',
    lineHeight: '21px',
    '&:after': {
      content: `"\uF2FB"`,
      fontSize: '16px',
      lineHeight: 1,
      verticalAlign: 'middle',
      display: 'inline-block',
      padding: '0 8px',
      color: '#6c757d',
      fontFamily: 'Material-Design-Iconic-Font',
    },
    '&:last-child': {
      '&:after': {
        content: `""`,
      },
    },
  },
  contactsLeft: {
    flex: 1,
    marginRight: '24px',
    maxWidth: '76%',
  },
  contactsRight: {
    flex: '0 0 24%',
    maxWidth: '24%',
  },
  contactsForm: {
    padding: '50px',
  },
  formRow: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: '20px',
  },
  formBtns: {
    width: '96%',
    margin: '0 auto',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  formInputWrap: {
    width: '46%',
  },
  formFullwidthInputWrap: {
    width: '96%',
  },
  contactsInfo: {
    padding: '48px 24px',
  },
  contactsList: {
    display: 'block',
    margin: 0,
    listStyle: 'none',
    padding: 0,
  },
  contactsItem: {
    padding: '0 0 24px',
    borderBottom: '2px solid #212529',
    marginBottom: '24px',
    display: 'flex',
    alignItems: 'flex-start',
    position: 'relative',
    '&:last-child': {
      padding: 0,
      borderBottom: 'none',
      marginBottom: 0,
    },
  },
  contactsItemIcon: {
    fontSize: '16px',
    marginRight: '5px',
  },
  contactsItemTitle: {
    textTransform: 'uppercase',
    fontSize: '15px',
    margin: '0 0 12px',
    fontWeight: 400,
  },
  contactsItemContent: {
    fontStyle: 'normal',
    fontSize: '14px',
    lineHeight: '21px',
  },
  link: {
    color: '#3f51b5',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  iconsWrapper: {
    marginTop: '15px',
  },
  icon: {
    display: 'inline-block',
    backgroundColor: '#ccc',
    color: '#fff',
    borderRadius: '50%',
    marginRight: '6px',
    marginBottom: '6px',
    textAlign: 'center',
    height: '30px',
    width: '30px',
    lineHeight: '30px'
  },
  facebookIcon: {
    backgroundColor: '#5c6bc0',
  },
  twitterIcon: {
    backgroundColor: '#40c4ff',
  },
  googleIcon: {
    backgroundColor: '#ef5350',
  },
  linkedinIcon: {
    backgroundColor: '#0277bd',
  },
});

class ContactUs extends Component<any> {
  render() {
    const { classes } = this.props;

    return (
      <Grid container spacing={0}>
        <Grid item xs={1} />

        <Grid item xs={10}>
          <div className={classes.contacts}>

            <div className={`card ${classes.pageHeading}`}>
              <h2 className={classes.title}>Contact Us</h2>
              <ul className={classes.breadcrumbsList}>
                <li className={classes.breadcrumbsItem}>
                  <Link className={classes.link} to="/">Sign In</Link>
                </li>
                <li className={classes.breadcrumbsItem}>
                  <Link className={classes.link} to="#">Contact Us</Link>
                </li>
              </ul>
            </div>

            <div className={classes.row}>
              <div className={classes.contactsLeft}>
                <form action="" className={`card ${classes.contactsForm}`}>
                  <div className={classes.formRow}>
                    <div className={classes.formInputWrap}>
                      <div className={classes.formGroup}>
                        <TextField
                          id="name"
                          label="Name"
                          // className={classes.textField}
                          // value={this.state.name}
                          // onChange={this.handleChange('name')}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </div>
                    </div>

                    <div className={classes.formInputWrap}>
                      <div className={classes.formGroup}>
                        <TextField
                          id="lastName"
                          label=" "
                          // className={classes.textField}
                          // value={this.state.name}
                          // onChange={this.handleChange('name')}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className={classes.formRow}>
                    <div className={classes.formInputWrap}>
                      <div className={classes.formGroup}>
                        <TextField
                          id="email"
                          label="Email"
                          type="email"
                          // className={classes.textField}
                          // value={this.state.name}
                          // onChange={this.handleChange('name')}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </div>
                    </div>

                    <div className={classes.formInputWrap}>
                      <div className={classes.formGroup}>
                        <TextField
                          id="phoneNumber"
                          label="Phone Number"
                          type="tel"
                          // className={classes.textField}
                          // value={this.state.name}
                          // onChange={this.handleChange('name')}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className={classes.formRow}>
                    <div className={classes.formFullwidthInputWrap}>
                      <div className={classes.formGroup}>
                        <TextField
                          id="textarea"
                          label="How can we help you?"
                          multiline
                          rows="6"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className={classes.formBtns}>
                    <Button variant="contained" color="primary" className={classes.button}>
                      Submit
                    </Button>
                  </div>
                </form>
              </div>

              <div className={classes.contactsRight}>
                <div className={`card ${classes.contactsInfo}`}>
                  <ul className={classes.contactsList}>
                    <li className={classes.contactsItem}>
                      <i className={`${classes.contactsItemIcon} zmdi zmdi-pin zmdi-hc-fw`}/>
                      <div className="contact-body">
                        <h4 className={classes.contactsItemTitle}>ADDRESS</h4>

                        <address className={classes.contactsItemContent}>
                          44 New Design Street
                          <br/>
                          Melbourne 005
                          <br/>
                          Australia 300
                        </address>
                        
                      </div>
                    </li>

                    <li className={classes.contactsItem}>
                      <i className={`${classes.contactsItemIcon} zmdi zmdi-phone zmdi-hc-fw`}/>
                      <div className="contact-body">
                        <h4 className={classes.contactsItemTitle}>Phone</h4>
                        <div><a href="javascript:void(0)" className={`${classes.contactsItemContent} ${classes.link}`}>01 (800) 433 544</a></div>
                        <div><a href="javascript:void(0)" className={`${classes.contactsItemContent} ${classes.link}`}>01 (800) 123 524</a></div>
                      </div>
                    </li>

                    <li className={classes.contactsItem}>
                      <i className={`${classes.contactsItemIcon} zmdi zmdi-email zmdi-hc-fw`}/>
                      <div className="contact-body">
                        <h4 className={classes.contactsItemTitle}>E-mail</h4>
                        <div><a className={`${classes.contactsItemContent} ${classes.link}`} href="javascript:void(0)">info@Example.com</a></div>
                        <div className={classes.iconsWrapper}>
                          <a className={`${classes.icon} ${classes.facebookIcon}`} href="javascript:void(0)">
                            <i className="zmdi zmdi-facebook"/>
                          </a>

                          <a className={`${classes.icon} ${classes.twitterIcon}`} href="javascript:void(0)">
                            <i className="zmdi zmdi-twitter"/>
                          </a>

                          <a className={`${classes.icon} ${classes.googleIcon}`} href="javascript:void(0)">
                            <i className="zmdi zmdi-google-plus"/>
                          </a>

                          <a className={`${classes.icon} ${classes.linkedinIcon}`} href="javascript:void(0)">
                            <i className="zmdi zmdi-linkedin"/>
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={1} />
      </Grid>
    );
  }
};

export default withStyles(styles)(ContactUs);
