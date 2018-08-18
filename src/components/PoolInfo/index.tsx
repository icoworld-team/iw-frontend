import React, {Component} from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import MainAppBar from '../MainAppBar';

const styles = () => createStyles({
  pools: {
    width: '800px',
    margin: '0 auto',
    marginBottom: '30px',
  },
  poolName: {
    backgroundColor: '#fafafa',
    textAlign: 'center',
    padding: '30px 0',
    marginTop: '20px',
  },
  createPool: {
    backgroundColor: '#fafafa',
    padding: '50px 40px',
    marginTop: '20px',
  },
  inputLabel: {
    alignItems: 'flex-end',
    display: 'inline-block',
    width: '50%',
  },
  formRow: {
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    minHeight: '32px'
  },
  formBtns: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '190px',
    margin: '30px auto 0 auto',
  },
  marginBtn: {
    marginBottom: '10px',
  },
  investPool: {
    backgroundColor: '#fafafa',
    padding: '30px 20px',
    marginTop: '30px',
  },
  investInput: {
    marginRight: '10px',
    width: '300px',
  },
  investBtn: {
    width: '126px',
    marginRight: '10px',
  },
});

class PoolInfo extends Component<any> {
  render() {
    const { classes } = this.props;
    return (
      <>
        <MainAppBar/>

        <Grid container spacing={0}>
          <Grid item xs={1} />
          <Grid item xs={10}>
            <div className={classes.pools}>

              <div className={classes.poolName}>The pool №123-8/15/18</div>

              <div className={classes.createPool}>

                <div className={classes.formRow}>
                  <Typography className={classes.inputLabel}>Open code of smart-contract of the pool</Typography>
                  <Typography component="a">https://etherscan.io/verifyContract</Typography>
                </div>
                
                <div className={classes.formRow}>
                  <Typography className={classes.inputLabel}>Pool's holder</Typography>
                  <Chip
                    avatar={<Avatar src="/profile.jpeg" />}
                    label="Ivan Fedotov"
                  />
                </div>

                <div className={classes.formRow}>
                  <Typography className={classes.inputLabel}>Project</Typography>
                  <Typography>Tether</Typography>
                </div>

                <div className={classes.formRow}>
                  <Typography className={classes.inputLabel}>Adress of the project</Typography>
                  <Typography>0x493c4afb73b490e988650b9758e7736c72af748f</Typography>
                </div>

                <div className={classes.formRow}>
                  <Typography className={classes.inputLabel}>Soft Cap of the pool</Typography>
                  <Typography>1.000eth (or 450.000$)</Typography>
                </div>

                <div className={classes.formRow}>
                  <Typography className={classes.inputLabel}>Hard Cap of the pool</Typography>
                  <Typography>50.000eth (or 22.000.000$)</Typography>
                </div>

                <div className={classes.formRow}>
                  <Typography className={classes.inputLabel}>Current progress</Typography>
                  <Typography>25.000eth (or 50%) completed</Typography>
                </div>

                <div className={classes.formRow}>
                  <Typography className={classes.inputLabel}>Min deposit per participant</Typography>
                  <Typography>1 eth</Typography>
                </div>

                <div className={classes.formRow}>
                  <Typography className={classes.inputLabel}>Max deposit per participant</Typography>
                  <Typography>-</Typography>
                </div>

                <div className={classes.formRow}>
                  <Typography className={classes.inputLabel}>Date of the end</Typography>
                  <Typography>25 December 2017</Typography>
                </div>
                
                <div className={classes.formRow}>
                  <Typography className={classes.inputLabel}>I invested</Typography>
                  <Typography>3 eth (or 1.350$)</Typography>
                </div>

                <div className={classes.formRow}>
                  <Typography className={classes.inputLabel}>Comission of pool's holder</Typography>
                  <Typography>2%</Typography>
                </div>

                <div className={classes.formRow}>
                  <Typography className={classes.inputLabel}>Comission of icoWorld</Typography>
                  <Typography>1%</Typography>
                </div>

              </div>
              
              <div className={classes.investPool}>
                <TextField className={classes.investInput} placeholder="sum" name="sum" />
                <Button className={classes.investBtn} variant="contained" color="primary">Invest</Button>
                <Button className={classes.investBtn} variant="outlined" color="primary">Send money</Button>
                <Button className={classes.investBtn} variant="outlined" color="primary">Cansel pool</Button>
              </div>

            </div>
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </>
    )
  }
}

export default withStyles(styles)(PoolInfo);