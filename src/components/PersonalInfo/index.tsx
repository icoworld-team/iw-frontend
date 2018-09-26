import React, { Component } from 'react';
import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = (theme: Theme) => createStyles({
  profileSettingsLeft: {
    width: '380px',
  },
  profileSettingsRight: {
    width: '720px',
  },
  profileSettingsContent: {},
  formItem: {
    marginBottom: '45px',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  formItemHeading: {
    color: '#8b8b8b',
    fontSize: '24px',
    lineHeight: '30px',
    marginBottom: '10px',
  },
  formItemContent: {},
  formRow: {
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: '10px',
  },
  formGroupRow: {
    justifyContent: 'space-between',
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
    width: '230px',
    marginRight: '15px',
  },
  bigInput: {
    width: '100%',
  },
  minInput: {
    width: '90px',
  },
  formGroupYearsInputs: {
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
    width: '85px',
    minHeight: '25px',
  },
  formBtns: {
    textAlign: 'center',
  },
  button: {
    width: '175px',
    height: '35px',
  },
});

class PersonalInfo extends Component<any> {
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
        <div className={classes.profileSettingsContent}>
          <form action="">
            <ul>

              <li className={classes.formItem}>
                <div className={classes.formItemHeading}><span className={classes.formItemTitle}>Main</span></div>
                <div className={classes.formItemContent}>
                  <div className={classes.formRow}>
                    <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                      className={classes.input} name="firstName" value={`Ivan`} />
                    <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                      className={classes.input} name="lastName" value={`Fedotov`} />
                    <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                      style={{marginRight: 0}} className={classes.input} name="nickname" value={`iyufedotov`} />
                  </div>
                </div>
              </li>

              <li className={classes.formItem}>
                <div className={classes.formItemHeading}><span className={classes.formItemTitle}>Contacts</span></div>
                <div className={classes.formItemContent}>
                  <div className={classes.formRow}>
                    <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                      className={classes.input} name="country" placeholder="Country" />
                    <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                      style={{marginRight: 0}} className={classes.input} name="city" placeholder="City" />
                  </div>
                  <div className={classes.formRow}>
                    <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                      className={classes.bigInput} name="site" placeholder="Site" />
                  </div>
                  <div className={classes.formRow}>
                    <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                      className={classes.input} name="facebook" placeholder="Facebook" />
                    <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                      className={classes.input} name="twitter" placeholder="Twitter" />
                    <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                      style={{marginRight: 0}} className={classes.input} name="linkedIn" placeholder="LinkedIn" />
                  </div>
                </div>
              </li>

              <li className={classes.formItem}>
                <div className={classes.formItemHeading}><span className={classes.formItemTitle}>About</span></div>
                <div className={classes.formItemContent}>
                  
                  <div className={`${classes.formRow} ${classes.formTextarea}`}>
                    <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                      className={classes.bigInput} multiline rows="6" name="aboutMe" placeholder="About me" />
                  </div>

                </div>
              </li>

              <li className={classes.formItem}>
                <div className={classes.formItemHeading}><span className={classes.formItemTitle}>Experience</span></div>
                <div className={classes.formItemContent}>

                  <div className={`${classes.formRow} ${classes.formGroupRow}`}>
                    <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                      className={classes.bigInput} name="experience" placeholder="Experience" />
                  </div>
                  <div className={`${classes.formRow} ${classes.formGroupRow}`}>
                    <div className={classes.formGroupYearsInputs}>
                      <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                        className={classes.minInput} name="experienceYearsFrom" placeholder="From" />
                      <span style={{margin: '0 5px'}}>—</span>
                      <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                        className={classes.minInput} name="experienceYearsTo" placeholder="To" />
                    </div>
                    <div>
                      <Button style={{marginRight: '10px'}} variant="outlined" color="secondary" className={`button outline-button ${classes.formGroupBtn}`}>
                        Delete
                      </Button>
                      <Button variant="outlined" color="secondary" className={`button outline-button ${classes.formGroupBtn}`}>
                        Add
                      </Button>
                    </div>
                  </div>

                </div>
              </li>

              <li className={classes.formItem}>
                <div className={classes.formItemHeading}><span className={classes.formItemTitle}>Education</span></div>
                <div className={classes.formItemContent}>

                  <div className={`${classes.formRow} ${classes.formGroupRow}`}>
                    <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                      className={classes.bigInput} name="education" placeholder="Education" />
                  </div>
                  <div className={`${classes.formRow} ${classes.formGroupRow}`}>
                    <div className={classes.formGroupYearsInputs}>
                      <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                        className={classes.minInput} name="educationYearsFrom" placeholder="From" />
                      <span style={{margin: '0 5px'}}>—</span>
                      <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                        className={classes.minInput} name="educationYearsTo" placeholder="To" />
                    </div>
                    <div>
                      <Button style={{marginRight: '10px'}} variant="outlined" color="secondary" className={`button outline-button ${classes.formGroupBtn}`}>
                        Delete
                      </Button>
                      <Button variant="outlined" color="secondary" className={`button outline-button ${classes.formGroupBtn}`}>
                        Add
                      </Button>
                    </div>
                  </div>

                </div>
              </li>

              <li className={classes.formItem}>
                <div className={classes.formBtns}>
                  <Button variant="contained" color="secondary" className={`button fill-button ${classes.button}`}>
                    Save
                  </Button>
                </div>
              </li>

            </ul>
          </form>
        </div>
      </>
    );
  }
};

export default withStyles(styles)(PersonalInfo);
