import React, { Component } from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';

import MainAppBar from '../MainAppBar';
import PoolCard from '../PoolCard';
import gql from 'graphql-tag'
import { withApollo } from 'react-apollo'

const POOL_SEARCH = gql`
    query searchPool($poolName: String!) {
        searchPool(poolName: $poolName) {
            poolName
            poolId
            ownerId
            ownerName
            projectName
            endDate
        }
    }
`;

const styles = () => createStyles({
  poolsBlock: {
    backgroundColor: '#fafafa',
    padding: '40px 30px',
    marginTop: '20px',
  },
  pools: {
    display: 'flex',
    alignItems: 'flex-start',
    maxWidth: '1100px',
    margin: '0 auto',
    marginBottom: '30px',
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
  poolsSearchResults: {
      display: 'flex',
      flexWrap: 'wrap',
      '& a': {
          marginRight: '8px',
          marginLeft: '8px'
      }
  }
});

class poolsSearch extends Component<any> {
    state = {
        searchPoolName: '',
        foundPools: []
    };

    handleChange = (e:any) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    executeSearch = async () => {
        const poolName = this.state.searchPoolName;
        console.log(poolName);
        const result = await this.props.client.query({
            query: POOL_SEARCH,
            variables: { poolName }
        });
        const pools = result.data.searchPool;
        console.log(pools);
        this.setState({
            foundPools: pools
        });
    };

    render() {
        const { classes } = this.props;
        const pools = this.state.foundPools.map((pool, index)=> <PoolCard key={index} pool={pool}/>)
        return (
            <div>
                <MainAppBar/>

                <Grid container spacing={0}>
                    <Grid item xs={1} />

                    <Grid item xs={10}>
                        <div className={classes.pools}>
                            <div className={classes.poolsLeft}>

                                <div className={`${classes.poolsBlock} ${classes.poolsSearch}`}>
                                    <div className={classes.searchInputContainer}>
                                        <TextField className={classes.searchInput} type="search" placeholder="Search" name="searchPoolName"
                                                   value={this.state.searchPoolName} onChange={this.handleChange}/>
                                    </div>
                                    <div>
                                        <Button className={`${classes.btn} ${classes.btnSearch}`}
                                                variant="raised" color="primary" onClick={() => this.executeSearch()}>Search</Button>
                                        <Link to="/create-pool" className={classes.linkBtn}>
                                            <Button className={classes.btn} variant="outlined" color="primary">Create pool</Button>
                                        </Link>
                                    </div>
                                </div>

                                <div className={`${classes.poolsBlock} ${classes.poolsSearchResults}`}>
                                    {this.state.foundPools.length === 0 ? <Typography>No results found</Typography> : pools}
                                </div>

                                <div className={`${classes.poolsBlock} ${classes.poolsInvested}`}>
                                    <div className={classes.poolsBlockHeading}>
                                        <Typography className={classes.poolsBlockTitle}>I invested</Typography>
                                    </div>

                                    <div className={classes.poolsBlockCards}>

                                    </div>
                                </div>

                                <div className={`${classes.poolsBlock} ${classes.poolsCreated}`}>
                                    <div className={classes.poolsBlockHeading}>
                                        <Typography className={classes.poolsBlockTitle}>I created</Typography>
                                    </div>

                                    <div className={classes.poolsBlockCards}>

                                    </div>
                                </div>

                            </div>

                            <div className={classes.poolsRight}>
                                <div className={`${classes.poolsBlock} ${classes.poolsPopular}`}>
                                    <div className={classes.poolsBlockHeading}>
                                        <Typography align="center" className={classes.poolsBlockTitle} variant="headline" component="h2">Popular pools</Typography>
                                    </div>

                                    <div className={classes.poolsBlockCards}>

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
}

// const poolsSearchWithStyles = withStyles(styles)(poolsSearch);
const apolloPoolsSearch = withApollo(poolsSearch);
export default withStyles(styles)(apolloPoolsSearch)
// export default withStyles(styles)(poolsSearch);