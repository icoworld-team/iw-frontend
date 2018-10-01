import React, { Component } from 'react';
import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import { Mutation } from 'react-apollo'
import { UPDATE_USER, ADD_JOB, REMOVE_JOB, REMOVE_EDUCATION, ADD_EDUCATION } from '../../api/graphql'
import { withApollo } from 'react-apollo'
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
    textTransform: 'capitalize',
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
  state = {
      tab: 0,
      checked: false,
      firstName: this.props.user.name.substring(0, this.props.user.name.indexOf(" ")),
      lastName: this.props.user.name.substring(this.props.user.name.indexOf(" ")+1),
      login: this.props.user.login,
      country: this.props.user.country,
      city: this.props.user.city,
      site: this.props.user.site,
      facebook: this.props.user.clinks.fb,
      twitter: this.props.user.clinks.twitter,
      linkedIn: this.props.user.clinks.linkedin,
      about: this.props.user.about,
      educations: this.props.user.educations.length > 0 ? this.props.user.educations : [{name: '', from: '', to: ''}],
      jobs: this.props.user.jobs.length > 0 ? this.props.user.jobs : [{name: '', from: '', to: ''}],


  };

  switchChange = (name: any) => (event: any) => {
    this.setState({ [name]: event.target.checked });
  };

  handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
        [e.target.name]: e.target.value
      });
    };

  handleExperienceChange = (index:number) => (e:any) => {
    const newExperience = this.state.jobs.map((job:any, idx:number) => (
        index !== idx ? job : {...job, [e.target.name]: e.target.value}
    ));
    this.setState({
        jobs: newExperience
    });
  };

  handleEducationChange = (index:number) => (e:any) => {
    const newEducation = this.state.educations.map((education:any, idx:number) => (
        index !== idx ? education : {...education, [e.target.name]: e.target.value}
    ));
    this.setState({
        educations: newEducation
    });
  };

  handleAddJob = () => {
      this.setState((state:any) => ({
          jobs: state.jobs.concat({name: '', from: '', to: ''})
      }));
  };

  handleAddEducation = () => {
      this.setState((state:any)=> ({
          educations: state.educations.concat({name: '', from: '', to: ''})
      }));
  };

  handleDeleteJob = (index:number) => () => {
      if(this.state.jobs[index].id === undefined) {
          this.setState((state:any) => ({
              jobs: [...state.jobs.slice(0,index), ...state.jobs.slice(index+1)]
          }));
      }
      else {
          this.props.client.mutate({
              mutation: REMOVE_JOB,
              variables: {
                  userId: this.props.user.id,
                  id: this.state.jobs[index].id
              }
          });
          this.setState((state:any) => ({
              jobs: [...state.jobs.slice(0,index), ...state.jobs.slice(index+1)]
          }));
      }
  };

  handleDeleteEducation = (index:number) => () => {
      if(this.state.educations[index].id === undefined) {
          this.setState((state:any) => ({
              educations: [...state.educations.slice(0,index), ...state.educations.slice(index+1)]
          }));
      }
      else {
          this.props.client.mutate({
              mutation: REMOVE_EDUCATION,
              variables: {
                  userId: this.props.user.id,
                  id: this.state.educations[index].id
              }
          });
          this.setState((state:any) => ({
              educations: [...state.educations.slice(0,index), ...state.educations.slice(index+1)]
          }));
      }
  };

  handleSave = () => {
    this.props.client.mutate({
        mutation: UPDATE_USER,
        variables: {input: {
                id: this.props.user.id,
                name: this.state.firstName + ' ' + this.state.lastName,
                login: this.state.login,
                country: this.state.country,
                city: this.state.city,
                site: this.state.site,
                clinks: {
                    fb: this.state.facebook,
                    linkedin: this.state.linkedIn,
                    twitter: this.state.twitter,
                },
                about: this.state.about
            }},
    }).then((data:any) => console.log(data));

    this.state.jobs.forEach((job:any, index:number) => {
        if (job.id === undefined) {
            this.props.client.mutate({
                mutation: ADD_JOB,
                variables: {input: {
                        userId: this.props.user.id,
                        name: job.name,
                        from: job.from,
                        to: job.to
                    }}
            }).then((data:any) => console.log(data));
        }
    });

    this.state.educations.forEach((education:any, index:number) => {
        if (education.id === undefined) {
            this.props.client.mutate({
                mutation: ADD_EDUCATION,
                variables: {input: {
                        userId: this.props.user.id,
                        name: education.name,
                        from: education.from,
                        to: education.to
                    }}
            }).then((data:any) => console.log(data));
        }
    })
  };

  // handleChange =(event:any, value:any)=>{
  //   this.setState({
  //       tab: value
  //   });
  // };

  render() {
    const { classes } = this.props;

    const jobs = this.state.jobs.map((job:any, index:number) => (
        <div className={classes.formItemContent} key={index}>
            <div className={`${classes.formRow} ${classes.formGroupRow}`}>
                <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                           className={classes.bigInput} name="name" placeholder="Experience" value={job.name} onChange={this.handleExperienceChange(index)}/>
            </div>
            <div className={`${classes.formRow} ${classes.formGroupRow}`}>
                <div className={classes.formGroupYearsInputs}>
                    <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                               className={classes.minInput} name="from" placeholder="From" value={job.from.length > 3 ? new Date(job.from).getFullYear() : job.from} onChange={this.handleExperienceChange(index)}/>
                    <span style={{margin: '0 5px'}}>—</span>
                    <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                               className={classes.minInput} name="to" placeholder="To" value={job.to.length > 3 ? new Date(job.to).getFullYear() : job.to} onChange={this.handleExperienceChange(index)}/>
                </div>
                <div>
                    {index !== 0 ? (
                        <Button style={{marginRight: '10px'}} variant="outlined" color="secondary" className={`button outline-button ${classes.formGroupBtn}`} onClick={this.handleDeleteJob(index)}>
                            Delete
                        </Button>
                    ): null}
                    {this.state.jobs.length-1 === index ? (
                        <Button variant="outlined" color="secondary" className={`button outline-button ${classes.formGroupBtn}`} onClick={this.handleAddJob}>
                            Add
                        </Button>
                    ) : null }
                </div>
            </div>
        </div>
    ));

    const educations = this.state.educations.map((item:any, index:number) => (
        <div className={classes.formItemContent} key={index}>
            <div className={`${classes.formRow} ${classes.formGroupRow}`}>
                <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                           className={classes.bigInput} name="name" placeholder="Education" value={item.name} onChange={this.handleEducationChange(index)}/>
            </div>
            <div className={`${classes.formRow} ${classes.formGroupRow}`}>
                <div className={classes.formGroupYearsInputs}>
                    <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                               className={classes.minInput} name="from" placeholder="From" value={item.from.length > 3 ? new Date(item.from).getFullYear() : item.from} onChange={this.handleEducationChange(index)}/>
                    <span style={{margin: '0 5px'}}>—</span>
                    <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                               className={classes.minInput} name="to" placeholder="To" value={item.to.length > 3 ? new Date(item.to).getFullYear() : item.to} onChange={this.handleEducationChange(index)}/>
                </div>
                <div>
                    {index !== 0 ? (
                        <Button style={{marginRight: '10px'}} variant="outlined" color="secondary" className={`button outline-button ${classes.formGroupBtn}`} onClick={this.handleDeleteEducation(index)}>
                            Delete
                        </Button>
                    ) : null}
                    {this.state.educations.length-1 === index ? (
                        <Button variant="outlined" color="secondary" className={`button outline-button ${classes.formGroupBtn}`} onClick={this.handleAddEducation}>
                            Add
                        </Button>
                    ) : null}
                </div>
            </div>
        </div>
    ));

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
                      className={classes.input} name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
                    <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                      className={classes.input} name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                    <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                      style={{marginRight: 0}} className={classes.input} placeholder="Login" name="login" value={this.state.login} onChange={this.handleChange}/>
                  </div>
                </div>
              </li>

              <li className={classes.formItem}>
                <div className={classes.formItemHeading}><span className={classes.formItemTitle}>Contacts</span></div>
                <div className={classes.formItemContent}>
                  <div className={classes.formRow}>
                    <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                      className={classes.input} name="country" placeholder="Country" value={this.state.country} onChange={this.handleChange}/>
                    <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                      style={{marginRight: 0}} className={classes.input} name="city" placeholder="City" value={this.state.city} onChange={this.handleChange}/>
                  </div>
                  <div className={classes.formRow}>
                    <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                      className={classes.bigInput} name="site" placeholder="Site" value={this.state.site} onChange={this.handleChange}/>
                  </div>
                  <div className={classes.formRow}>
                    <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                      className={classes.input} name="facebook" placeholder="Facebook" value={this.state.facebook} onChange={this.handleChange}/>
                    <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                      className={classes.input} name="twitter" placeholder="Twitter" value={this.state.twitter} onChange={this.handleChange}/>
                    <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                      style={{marginRight: 0}} className={classes.input} name="linkedIn" placeholder="LinkedIn" value={this.state.linkedIn} onChange={this.handleChange}/>
                  </div>
                </div>
              </li>

              <li className={classes.formItem}>
                <div className={classes.formItemHeading}><span className={classes.formItemTitle}>About</span></div>
                <div className={classes.formItemContent}>
                  
                  <div className={`${classes.formRow} ${classes.formTextarea}`}>
                    <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                      // className={classes.bigInput} multiline rows="6" name="aboutMe" placeholder="About me" />
                      className={classes.bigInput} multiline rows="6" name="about" placeholder="About me" value={this.state.about} onChange={this.handleChange}/>
                  </div>

                </div>
              </li>

              <li className={classes.formItem}>
                <div className={classes.formItemHeading}><span className={classes.formItemTitle}>experience</span></div>
                {/* <div className={classes.formItemContent}>

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

                </div> */}
                <div className={classes.formItemHeading}><span className={classes.formItemTitle}>Experience</span></div>
                  {jobs}

              </li>

              <li className={classes.formItem}>
                <div className={classes.formItemHeading}><span className={classes.formItemTitle}>Education</span></div>
                  {educations}
              </li>

              <li className={classes.formItem}>
                <div className={classes.formBtns}>
                  <Button variant="contained" color="secondary" className={`button fill-button ${classes.button}`} onClick={this.handleSave}>
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
}

export default withStyles(styles)(withApollo(PersonalInfo));
