import React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';

import MainAppBar from '../MainAppBar';
import PoolCard from '../PoolCard';

const styles = () => createStyles({
  poolsBlock: {
    padding: '40px 30px',
  },
  pools: {
    display: 'flex',
    alignItems: 'flex-start',
    maxWidth: '1100px',
    margin: '0 auto',
    marginBottom: '30px',
    marginTop: '20px',
  },
  poolsLeft: {
    flex: 1,
    marginRight: '25px'
  },
  poolsRight: {
    width: '415px',
  },
  poolsSearch: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  searchInputContainer: {
    marginRight: '10px',
    flex: '1',
  },
  searchInput: {
    width: '100%'
  },
  btn: {
    width: '125px',
  },
  btnSearch: {
    marginRight: '10px',
  },
  linkBtn: {
    textDecoration: 'none',
  },
  poolsBlockHeading: {
    borderBottom: '1px solid #000',
  },
  poolsBlockTitle: {
    fontSize: '18px',
    marginBottom: '10px',
    marginLeft: '5px',
  },
  poolsBlockCards: {
    marginTop: '40px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

function poolsSearch(props: any) {
  const { classes } = props;

  return (
    <div>
      <MainAppBar/>

      <Grid container spacing={0}>
        <Grid item xs={1} />

        <Grid item xs={10}>
          <div className={classes.pools}>
            <div className={classes.poolsLeft}>

              <div className={`card ${classes.poolsBlock} ${classes.poolsSearch}`}>
                <div className={classes.searchInputContainer}>
                  <TextField className={classes.searchInput} type="search" placeholder="Search" name="search" />
                </div>
                <div>
                  <Button className={`${classes.btn} ${classes.btnSearch}`} variant="raised" color="primary">Search</Button>
                  <Link to="/create-pool" className={classes.linkBtn}>
                    <Button className={classes.btn} variant="outlined" color="primary">Create pool</Button>
                  </Link>
                </div>
              </div>

              <div className={`card ${classes.poolsBlock}`}>
                <Typography>No results found</Typography>
              </div>

              <div className={`card ${classes.poolsBlock}`}>
                <div className={classes.poolsBlockHeading}>
                  <Typography className={classes.poolsBlockTitle}>I invested</Typography>
                </div>

                <div className={classes.poolsBlockCards}>
                  <PoolCard />
                </div>
              </div>

              <div className={`card ${classes.poolsBlock}`}>
                <div className={classes.poolsBlockHeading}>
                  <Typography className={classes.poolsBlockTitle}>I created</Typography>
                </div>

                <div className={classes.poolsBlockCards}>
                  <PoolCard />
                </div>
              </div>
              
            </div>

            <div className={classes.poolsRight}>
              <div className={`card ${classes.poolsBlock}`}>
                <div className={classes.poolsBlockHeading}>
                  <Typography align="center" className={classes.poolsBlockTitle} variant="headline" component="h2">Popular pools</Typography>
                </div>

                <div className={classes.poolsBlockCards}>
                  <PoolCard />
                  <PoolCard />
                  <PoolCard />
                  <PoolCard />
                  <PoolCard />
                  <PoolCard />
                </div>
              </div>
            </div>

          </div>
          </Grid>

          <Grid item xs={1} />
      </Grid>
    </div>
  );
}

export default withStyles(styles)(poolsSearch);