import React, {Component} from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
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
  input: {
    width: '200px',
  },
  projectNameInput: {
    width: '95px',
    marginRight: '10px'
  },
  projectLinkInput: {
    width: '95px',
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
});

class PoolCreate extends Component<any> {
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

                <form action="" method="post">

                  <div className={classes.formRow}>
                    <Typography className={classes.inputLabel}>Pool's holder</Typography>
                    <Chip
                      avatar={<Avatar src="/profile.jpeg" />}
                      label="Ivan Fedotov"
                    />
                  </div>

                  <div className={classes.formRow}>
                    <Typography className={classes.inputLabel}>Project</Typography>
                    <TextField className={`${classes.input} ${classes.projectNameInput}`} placeholder="Name" name="projectName" />
                    <TextField className={`${classes.input} ${classes.projectLinkInput}`} placeholder="Link" name="projectLink" />
                  </div>

                  <div className={classes.formRow}>
                    <Typography className={classes.inputLabel}>Adress of the project</Typography>
                    <TextField className={classes.input} name="projectAdress" />
                  </div>

                  <div className={classes.formRow}>
                    <Typography className={classes.inputLabel}>Soft Cap of the pool</Typography>
                    <TextField className={classes.input} name="poolSoftCap" />
                  </div>

                  <div className={classes.formRow}>
                    <Typography className={classes.inputLabel}>Hard Cap of the pool</Typography>
                    <TextField className={classes.input} name="poolHardCap" />
                  </div>

                  <div className={classes.formRow}>
                    <Typography className={classes.inputLabel}>Current progress</Typography>
                    <TextField className={classes.input} name="currentProgress" />
                  </div>

                  <div className={classes.formRow}>
                    <Typography className={classes.inputLabel}>Min deposit per participant</Typography>
                    <TextField className={classes.input} name="minDeposit" />
                  </div>

                  <div className={classes.formRow}>
                    <Typography className={classes.inputLabel}>Max deposit per participant</Typography>
                    <TextField className={classes.input} name="maxDeposit" />
                  </div>

                  <div className={classes.formRow}>
                    <Typography className={classes.inputLabel}>Date of the end</Typography>
                    <TextField className={classes.input} name="endDate" />
                  </div>

                  <div className={classes.formRow}>
                    <Typography className={classes.inputLabel}>Comission of pool's holder</Typography>
                    <TextField className={classes.input} name="comission" />
                  </div>

                  <div className={classes.formRow}>
                    <Typography className={classes.inputLabel}>Comission of icoWorld</Typography>
                    <Typography className={classes.inputLabel}>1%</Typography>
                  </div>

                  <div className={classes.formBtns}>
                    <Button className={classes.marginBtn} variant="contained" color="primary">
                        Create
                    </Button>

                    <Button variant="outlined" color="primary">
                        Create special pool
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

export default withStyles(styles)(PoolCreate);