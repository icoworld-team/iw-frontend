import React, { Component } from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import MainAppBar from '../MainAppBar';
import PoolCard from '../PoolCard';
import { withApollo } from 'react-apollo'
import { POOL_SEARCH } from '../../api/graphql'


const styles = () => createStyles({
  subHeader: {
    padding: '10px 0',
    backgroundColor: '#fff',
  },
  subHeaderContainer: {
		textAlign: 'right',
		margin: '0 auto',
		maxWidth: '1100px',
	},
	linkBtn: {
    textDecoration: 'none',
	},
  createPullButton: {
    minWidth: '95px',
    minHeight: '35px',
    fontSize: '12px',
    fontWeight: 500,
  },

  poolsLeft: {
    width: '782px',
    marginRight: '15px'
  },
  poolsFilter: {
    flex: 1,
	},
	
	pools: {},
	poolsList: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	poolsItem: {
		width: '195px',
		borderRight: '1px solid #c1c1c1',
		borderBottom: '1px solid #c1c1c1',
		textAlign: 'center',
		'&:nth-child(4n)': {
			borderRight: 'none',
		},
	},
	poolsFilterContent: {
		padding: '15px',
	},
	inputLabel: {
		fontFamily: 'Open Sans',
		fontSize: '14px',
		lineHeight: '19px',
		color: '#171717',
	},
	filtersRadio: {},
	RadioGroupLabel: {
		color: '#8b8b8b',
	},
	radioBtn: {
		width: '20px',
		height: '20px',
		marginRight: '10px',
	},
	radioBtnRow: {
		marginTop: '10px',
		marginLeft: 0,
		'&:first-child': {
			marginTop: 0,
		},
	},

	noResults: {
		padding: '15px',
	},
});
  
class poolsSearch extends Component<any> {
	state = {
		searchPoolName: '',
		foundPools: [],
		sortBy: 'Popular pools',
	};

	handleChange = (e:any) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	sortChange = (event: any)=> {
		this.setState({
			[event.target.name]: event.target.value
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
		const pools = this.state.foundPools.map((pool, index)=> <li className={classes.poolsItem}><PoolCard key={index} pool={pool}/></li>)

		return (
			<>
				<MainAppBar/>

				<div className={classes.subHeader}>
					<Grid container spacing={0}>
						<Grid item xs={1} />

						<Grid item xs={10} className={classes.subHeaderContainer}>
							<Link to="/create-pool" className={classes.linkBtn}>
								<Button variant="contained" color="secondary" size="small" className={`button fill-button ${classes.createPullButton}`}>
									Create a Pull
								</Button>
							</Link>
						</Grid>

						<Grid item xs={1} />
					</Grid>
				</div>

				<Grid container spacing={0}>
					<Grid item xs={1} />

					<Grid item xs={10}>
						<div className={`page-content`}>
							<div className={classes.poolsLeft}>

								<div className={`card`}>
									<div className={`card-heading`}>
										<Typography className={`card-title`}>{this.state.sortBy}</Typography>
									</div>
									<div className={classes.pools}>

										<ul className={classes.poolsList}>
											{this.state.foundPools.length === 0 ? <Typography className={`text ${classes.noResults}`}>No results found</Typography> : pools}
										</ul>

									</div>

								</div>

								<div className={`card ${classes.poolsBlock} ${classes.poolsSearch}`}>
									<div className={classes.searchInputContainer}>
										<TextField className={classes.searchInput} type="search" placeholder="Search" name="searchPoolName"
											value={this.state.searchPoolName} onChange={this.handleChange}/>
									</div>
									<div>
										<Button className={`${classes.btn} ${classes.btnSearch}`}
											variant="raised" color="primary" onClick={() => this.executeSearch()}>Search</Button>
									</div>
								</div>

							</div>

							<div className={classes.poolsFilter}>
								<div className={`card`}>
									<div className={`card-heading`}>
										<Typography className={`card-title`}>Filter</Typography>
									</div>

									<div className={classes.poolsFilterContent}>

										<div className={classes.filtersRadio}>
											<FormControl component="fieldset">
												<RadioGroup value={this.state.sortBy} onChange={this.sortChange} name="sortBy">
	
													<FormControlLabel
														classes={{label: classes.inputLabel}}
														className={classes.radioBtnRow}
														value="Popular pools"
														control={<Radio color="primary" className={classes.radioBtn} />}
														label="Popular pools"
													/>
													<FormControlLabel
														classes={{label: classes.inputLabel}}
														className={classes.radioBtnRow}
														value="All pools"
														control={<Radio color="primary" className={classes.radioBtn} />}
														label="All pools"
													/>
													<FormControlLabel
														classes={{label: classes.inputLabel}}
														className={classes.radioBtnRow}
														value="I invested"
														control={<Radio color="primary" className={classes.radioBtn} />}
														label="I invested"
													/>
													<FormControlLabel
														classes={{label: classes.inputLabel}}
														className={classes.radioBtnRow}
														value="I created"
														control={<Radio color="primary" className={classes.radioBtn} />}
														label="I created"
													/>

												</RadioGroup>
											</FormControl>
										</div>

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
}

// const poolsSearchWithStyles = withStyles(styles)(poolsSearch);
const apolloPoolsSearch = withApollo(poolsSearch);
export default withStyles(styles)(apolloPoolsSearch)
// export default withStyles(styles)(poolsSearch);