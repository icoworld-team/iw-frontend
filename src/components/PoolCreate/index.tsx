import React, {Component} from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Mutation } from 'react-apollo'
import { push } from "react-router-redux";
import {connect} from "react-redux";
import { CREATE_POOL } from '../../api/graphql'


const styles = () => createStyles({
  poolsCreate: {
    marginRight: '15px',
  },
  poolsCreateContent: {
    padding: '15px',
  },
  poolsCreateItem: {
    borderBottom: '1px solid #c1c1c1',
    marginBottom: '10px',
    '&:last-child': {
      borderBottom: 'none',
      marginBottom: 0,
    },
  },
  chip: {
		height: '25px',
		fontWeight: 600,
		color: '#171717',
	},
	chipAvatar: {
		width: '25px',
		height: '25px',
	},
  inputLabel: {
    alignItems: 'flex-end',
    display: 'inline-block',
    width: '50%',
  },
  input: {
    padding: '1px 5px',
    border: '1px solid #c1c1c1',
    height: '25px',
  },
  minInput: {
    width: '58px',
  },
  midInput: {
    width: '140px',
  },
  maxInput: {
    flex: 1,
  },
  
  formRow: {
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  formLastRow: {
		marginBottom: 0,
	},
  formBtns: {
    textAlign: 'center',
    marginTop: '30px',
  },
  createFormBtn: {
    width: '90px',
  },
  marginBtn: {
    marginRight: '10px',
  },

  poolsConfirm: {
    width: '395px',
  },
  confirmContent: {
    padding: '15px',
  },
  confirmText: {
    fontSize: '14px',
    color: '#171717',
    lineHeight: '19px',
    marginBottom: '10px',
  },
  confirmBtnContainer: {
    textAlign: 'center',
  },
  confirmButton: {
    width: '175px',
    height: '35px',
  },
});

class PoolCreate extends Component<any> {
  state = {
    projectName: '',
    projectLink: '',
    projectAddress: '',
    poolSoftCap: '',
    poolHardCap: '',
    minDeposit: '',
    maxDeposit: '',
    endDate: '',
    commission: '',
    commissionAddress: ''
  };

  handleChange = (e:any) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  render() {
    const { classes } = this.props;
    const { authUser } = this.props;
    let poolInput = {
      owner: this.props.authUser.id,
      projectName: this.state.projectName,
      projectLink: this.state.projectLink,
      projectAdress: this.state.projectAddress,
      poolSoftCap: +this.state.poolSoftCap,
      poolHardCap: +this.state.poolHardCap,
      minDeposit: +this.state.minDeposit,
      maxDeposit: +this.state.maxDeposit,
      endDate: this.state.endDate,
      ownerComission: +this.state.commission,
      comissionPaymentAddress: this.state.commissionAddress,
      iwComission: 1
    };

    return (
        <Grid container spacing={0} style={{overflowX: 'hidden'}}>
          <Grid item xs={1} />
          <Grid item xs={10}>
            <div className={`page-content`}>

              <div className={`card ${classes.poolsCreate}`}>
                <div className={`card-heading`}>
                  <Typography className={`card-title`}>Enter the parameters of your pool</Typography>
                </div>

                <div className={classes.poolsCreateContent}>
                  <form action="" method="post">

                    <ul className={classes.poolsCreateList}>

                      <li className={classes.poolsCreateItem}>
                        <div className={classes.formRow}>
                          <Typography className={classes.inputLabel}>Pool's holder</Typography>
                          <Chip
                            avatar={<Avatar className={classes.chipAvatar} src="/profile.jpeg" />}
                            label={authUser.name}
                            className={classes.chip}
                          />
                        </div>

                        <div className={classes.formRow}>
                          <Typography className={classes.inputLabel}>Commission of pool's holder</Typography>
                          <TextField InputProps={{ disableUnderline: true, classes: {input: `${classes.input} input`} }}
                            className={classes.minInput} name="commission" value={this.state.commission} onChange={this.handleChange} />
                        </div>

                        <div className={classes.formRow}>
                          <Typography className={classes.inputLabel}>Address for the commission payment</Typography>
                          <TextField InputProps={{ disableUnderline: true, classes: {input: `${classes.input} input`} }}
                            className={classes.maxInput} name="commissionAddress" value={this.state.commissionAddress} onChange={this.handleChange} />
                        </div>

                        <div className={classes.formRow}>
                          <Typography className={classes.inputLabel}>Commission of icoWorld</Typography>
                          <Typography className={classes.inputLabel}>1%</Typography>
                        </div>
                      </li>

                      <li className={classes.poolsCreateItem}>
                        <div className={classes.formRow}>
                          <Typography className={classes.inputLabel}>Project</Typography>
                          <TextField InputProps={{ disableUnderline: true, classes: {input: `${classes.input} input`} }}
                            className={classes.maxInput} name="projectName" value={this.state.projectName} onChange={this.handleChange} />
                        </div>

                        <div className={classes.formRow}>
                          <Typography className={classes.inputLabel}>Link of the project</Typography>
                          <TextField InputProps={{ disableUnderline: true, classes: {input: `${classes.input} input`} }}
                            className={classes.maxInput} name="projectLink" value={this.state.projectLink} onChange={this.handleChange} />
                        </div>

                        <div className={classes.formRow}>
                          <Typography className={classes.inputLabel}>Address of the project</Typography>
                          <TextField InputProps={{ disableUnderline: true, classes: {input: `${classes.input} input`} }}
                            className={classes.maxInput} name="projectAddress" value={this.state.projectAddress} onChange={this.handleChange} />
                        </div>
                      </li>
                      
                      <li className={classes.poolsCreateItem}>
                        <div className={classes.formRow}>
                          <Typography className={classes.inputLabel}>Soft Cap of the pool</Typography>
                          <TextField InputProps={{ disableUnderline: true, classes: {input: `${classes.input} input`} }}
                            className={classes.midInput} name="poolSoftCap" value={this.state.poolSoftCap} onChange={this.handleChange} />
                        </div>

                        <div className={classes.formRow}>
                          <Typography className={classes.inputLabel}>Hard Cap of the pool</Typography>
                          <TextField InputProps={{ disableUnderline: true, classes: {input: `${classes.input} input`} }}
                            className={classes.midInput} name="poolHardCap" value={this.state.poolHardCap} onChange={this.handleChange} />
                        </div>

                        <div className={classes.formRow}>
                          <Typography className={classes.inputLabel}>Date of the end</Typography>
                          <TextField InputProps={{ disableUnderline: true, classes: {input: `${classes.input} input`} }}
                            className={classes.midInput} name="endDate" type="date" value={this.state.endDate} onChange={this.handleChange} />
                        </div>
                      </li>
                      
                      <li className={classes.poolsCreateItem}>
                        <div className={classes.formRow}>
                          <Typography className={classes.inputLabel}>Min deposit per participant</Typography>
                          <TextField InputProps={{ disableUnderline: true, classes: {input: `${classes.input} input`} }}
                            className={classes.midInput} name="minDeposit" value={this.state.minDeposit} onChange={this.handleChange} />
                        </div>

                        <div className={`${classes.formRow} ${classes.formLastRow}`}>
                          <Typography className={classes.inputLabel}>Max deposit per participant</Typography>
                          <TextField InputProps={{ disableUnderline: true, classes: {input: `${classes.input} input`} }}
                            className={classes.midInput} name="maxDeposit" value={this.state.maxDeposit} onChange={this.handleChange} />
                        </div>
                      </li>

                    </ul>

                  </form>
                </div>
              </div>

              <div className={classes.poolsConfirm}>
                <div className={`card`}>
                  <div className={`card-heading`}>
                    <Typography className={`card-title`}>Confirm order</Typography>
                  </div>

                  <div className={classes.confirmContent}>
                    <Typography className={classes.confirmText}>Please, check the parameters of the pool and send the order for creating one.</Typography>
                    
                    <div className={classes.confirmBtnContainer}>

                      <Mutation mutation={CREATE_POOL} onCompleted={this.props.push} onError={(error)=>console.log(error)}>
                        {createPool => {
                          return (
                            <Button variant="contained" color="secondary" size="small" className={`button fill-button ${classes.confirmButton}`}
                                onClick={()=>createPool({variables: {input: poolInput}})}>
                              Create the pool
                            </Button>
                          )
                        }}
                      </Mutation>

                    </div>
                  </div>

                </div>
              </div>

            </div>
          </Grid>
          <Grid item xs={1} />
        </Grid>
    )
  }
}

const mapStateToProps = ({auth}:any) => {
    return {
        authUser: auth.authUser
    }
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        push: () => dispatch(push('/pools'))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PoolCreate))
// export default withStyles(styles)(PoolCreate);