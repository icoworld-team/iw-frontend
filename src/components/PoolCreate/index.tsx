import React, {Component} from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import MainAppBar from '../MainAppBar';
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { push } from "react-router-redux";
import {connect} from "react-redux";


const CREATE_POOL = gql`
  mutation createPool($input: PoolInput!) {
    createPool(input: $input)
  }
`;

const styles = () => createStyles({
  pools: {
    width: '800px',
    margin: '0 auto',
    marginBottom: '30px',
  },
  createPool: {
    padding: '50px 40px',
    marginTop: '20px',
  },
  inputLabel: {
    alignItems: 'flex-end',
    display: 'inline-block',
    width: '50%',
  },
  input: {
    width: '200px',
  },
  formRow: {
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    minHeight: '32px'
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
        comissionOfHolder: +this.state.commission,
        addressForComissionPayment: this.state.commissionAddress,
        comissionOfIcoWorld: 1,
    };

    return (
      <>
        <MainAppBar/>

        <Grid container spacing={0}>
          <Grid item xs={1} />
          <Grid item xs={10}>
            <div className={classes.pools}>

              <div className={`card ${classes.createPool}`}>

                <form action="" method="post">

                  <div className={classes.formRow}>
                    <Typography className={classes.inputLabel}>Pool's holder</Typography>
                    <Chip
                      avatar={<Avatar src="/profile.jpeg" />}
                      label={authUser.name}
                    />
                  </div>

                  <div className={classes.formRow}>
                    <Typography className={classes.inputLabel}>Project name</Typography>
                    <TextField className={classes.input} name="projectName" value={this.state.projectName} onChange={this.handleChange}/>
                  </div>

                  <div className={classes.formRow}>
                    <Typography className={classes.inputLabel}>Project link</Typography>
                    <TextField className={classes.input} name="projectLink" value={this.state.projectLink} onChange={this.handleChange}/>
                  </div>

                  <div className={classes.formRow}>
                    <Typography className={classes.inputLabel}>Address of the project</Typography>
                    <TextField className={classes.input} name="projectAddress" value={this.state.projectAddress} onChange={this.handleChange}/>
                  </div>

                  <div className={classes.formRow}>
                    <Typography className={classes.inputLabel}>Soft Cap of the pool</Typography>
                    <TextField className={classes.input} name="poolSoftCap" value={this.state.poolSoftCap} onChange={this.handleChange}/>
                  </div>

                  <div className={classes.formRow}>
                    <Typography className={classes.inputLabel}>Hard Cap of the pool</Typography>
                    <TextField className={classes.input} name="poolHardCap" value={this.state.poolHardCap} onChange={this.handleChange}/>
                  </div>

                  <div className={classes.formRow}>
                    <Typography className={classes.inputLabel}>Min deposit per participant</Typography>
                    <TextField className={classes.input} name="minDeposit" value={this.state.minDeposit} onChange={this.handleChange}/>
                  </div>

                  <div className={classes.formRow}>
                    <Typography className={classes.inputLabel}>Max deposit per participant</Typography>
                    <TextField className={classes.input} name="maxDeposit" value={this.state.maxDeposit} onChange={this.handleChange}/>
                  </div>

                  <div className={classes.formRow}>
                    <Typography className={classes.inputLabel}>Date of the end</Typography>
                    <TextField className={classes.input} type="date" name="endDate" value={this.state.endDate} onChange={this.handleChange}/>
                  </div>

                  <div className={classes.formRow}>
                    <Typography className={classes.inputLabel}>Commission of pool's holder</Typography>
                    <TextField className={classes.input} name="commission" value={this.state.commission} onChange={this.handleChange}/>
                  </div>

                  <div className={classes.formRow}>
                    <Typography className={classes.inputLabel}>Address for the commission payment</Typography>
                    <TextField className={classes.input} name="commissionAddress" value={this.state.commissionAddress} onChange={this.handleChange}/>
                  </div>

                  <div className={classes.formRow}>
                    <Typography className={classes.inputLabel}>Commission of icoWorld</Typography>
                    <Typography className={classes.inputLabel}>1%</Typography>
                  </div>

                  <div className={classes.formBtns}>
                    <Mutation mutation={CREATE_POOL} onCompleted={this.props.push} onError={(error)=>console.log(error)}>
                        {createPool => {
                            return (
                                <Button className={`${classes.createFormBtn} ${classes.marginBtn}`} variant="contained" color="primary"
                                    onClick={()=>createPool({variables: {input: poolInput}})}>
                                Create
                                </Button>
                            )
                        }}
                    </Mutation>

                    <Button className={classes.createFormBtn} variant="outlined" color="primary">
                        More
                    </Button>
                  </div>
                </form>

              </div>

            </div>
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </>
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