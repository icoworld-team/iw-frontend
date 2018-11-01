import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { createStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Query } from 'react-apollo'
import { GET_POOL } from '../../api/graphql'

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

	poolInfo: {
		width: '690px',
		flex: 'none',
		marginRight: '15px',
	},
	poolInfoContent: {
		padding: '15px',
	},
	poolInfoItem: {
		borderBottom: '1px solid #c1c1c1',
		marginBottom: '10px',
		'&:last-child': {
			borderBottom: 'none',
			marginBottom: 0,
		},
	},
	formRow: {
		marginBottom: '10px',
		display: 'flex',
		alignItems: 'center',
		minHeight: '25px',
	},
	formLastRow: {
		marginBottom: 0,
	},
	inputLabel: {
		alignItems: 'flex-end',
		display: 'inline-block',
		width: '50%',
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

	investCard: {
		marginBottom: '15px',
	},
	investText: {
		color: '#171717',
		fontSize: '14px',
		lineHeight: '19px',
	},
	investForm: {
		display: 'flex',
		marginTop: '10px',
	},
	input: {
		marginRight: '10px',
		width: '265px',
		height: '35px',
		fontSize: '14px'
	},
	btn: {
		height: '35px',
	},
	investBtn: {
		width: '85px',
	},
	sendMoneyBtn: {
		width: '175px',
		marginRight: '10px',
	},
	cancelBtn: {
		width: '175px',
	},
});

class PoolInfo extends Component<any> {
  render() {
    const { classes } = this.props;
    return (
      <>
        <div className={classes.subHeader}>
            <Grid container spacing={0} style={{overflowX: 'hidden'}}>
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

						<Query query={GET_POOL} variables={{poolId: this.props.location.state.id}}>
							{({ loading, error, data }) => {
								if(loading) return null;
								if(error) return `Error: ${error}`;
								const pool = data.getPool;
								return (
									
									<div className={`page-content`}>

										<div className={`card ${classes.poolInfo}`}>
											<div className={`card-heading`}>
												<Typography className={`card-title`}>The pool information</Typography>
											</div>

											<div className={classes.poolInfoContent}>
												<ul className={classes.poolInfoList}>
													<li className={classes.poolInfoItem}>

														<div className={classes.formRow}>
															<Typography className={`text ${classes.inputLabel}`}>Number of the pool</Typography>
															<Typography>{pool.poolName}</Typography>
														</div>

														<div className={classes.formRow}>
															<Typography className={`text ${classes.inputLabel}`}>Open code of smart-contract of the pool</Typography>
															<Typography component="a">{pool.status}</Typography>
														</div>

														<div className={classes.formRow}>
															<Typography className={`text ${classes.inputLabel}`}>Pool's holder</Typography>
															<Chip
																avatar={<Avatar className={classes.chipAvatar} src="/profile.jpeg" />}
																label={pool.ownerName}
																className={classes.chip}
															/>
														</div>

													</li>

													<li className={classes.poolInfoItem}>

														<div className={classes.formRow}>
															<Typography className={`text ${classes.inputLabel}`}>Project</Typography>
															<Typography>{pool.projectName}</Typography>
														</div>

														<div className={classes.formRow}>
															<Typography className={`text ${classes.inputLabel}`}>Adress of the project</Typography>
															<Typography>{pool.projectAdress}</Typography>
														</div>

													</li>

													<li className={classes.poolInfoItem}>

														<div className={classes.formRow}>
															<Typography className={`text ${classes.inputLabel}`}>Soft Cap of the pool</Typography>
															<Typography>{pool.poolSoftCap}</Typography>
														</div>

														<div className={classes.formRow}>
															<Typography className={`text ${classes.inputLabel}`}>Hard Cap of the pool</Typography>
															<Typography>{pool.poolHardCap}</Typography>
														</div>

														<div className={classes.formRow}>
															<Typography className={`text ${classes.inputLabel}`}>Current progress</Typography>
															<Typography>25.000eth (or 50%) completed</Typography>
														</div>

														<div className={classes.formRow}>
															<Typography className={`text ${classes.inputLabel}`}>Date of the end</Typography>
															<Typography>{new Date(pool.endDate).toLocaleDateString()}</Typography>
														</div>

													</li>

													<li className={classes.poolInfoItem}>
														<div className={classes.formRow}>
															<Typography className={`text ${classes.inputLabel}`}>Min deposit per participant</Typography>
															<Typography>{pool.minDeposit}</Typography>
														</div>

														<div className={classes.formRow}>
															<Typography className={`text ${classes.inputLabel}`}>Max deposit per participant</Typography>
															<Typography>{pool.maxDeposit}</Typography>
														</div>

														{/* <div className={classes.formRow}>
															<Typography className={`text ${classes.inputLabel}`}>I invested</Typography>
															<Typography>3 eth (or 1.350$)</Typography>
														</div> */}

														<div className={classes.formRow}>
															<Typography className={`text ${classes.inputLabel}`}>Commission of pool's holder</Typography>
															<Typography>{pool.ownerComission}</Typography>
														</div>

														<div className={`${classes.formRow} ${classes.formLastRow}`}>
															<Typography className={`text ${classes.inputLabel}`}>Commission of icoWorld</Typography>
															<Typography>{pool.iwComission}</Typography>
														</div>

													</li>
												</ul>
											</div>

										</div>

										<div className={classes.poolInvest}>

											<div className={`card ${classes.investCard}`}>
												<div className={`card-heading`}>
													<Typography className={`card-title`}>Invest money</Typography>
												</div>

												<div className={`card-content`}>
													<Typography className={`text`}>
														If you want to participate in the pool, please enter the amount in Ethereum:
													</Typography>

													<div className={classes.investForm}>
														<TextField InputProps={{ disableUnderline: true, classes: {input: `${classes.input} input border-input`} }}
																className={classes.midInput} name="sum" />
														<Button variant="contained" color="secondary" size="small" className={`button fill-button ${classes.btn} ${classes.investBtn}`}>
															Invest
														</Button>
													</div>

												</div>
											</div>

											<div className={`card ${classes.investCard}`}>
												<div className={`card-heading`}>
													<Typography className={`card-title`}>Invest money</Typography>
												</div>

												<div className={`card-content`}>
													<Typography className={`text`}>
														If you want to participate in the own pool, please enter the amount in Ethereum:
													</Typography>

													<div className={classes.investForm}>
														<TextField InputProps={{ disableUnderline: true, classes: {input: `${classes.input} input border-input`} }}
																className={classes.midInput} name="sum" />
														<Button variant="outlined" color="secondary" size="small" className={`button outline-button ${classes.btn} ${classes.investBtn}`}>
															Invest
														</Button>
													</div>

												</div>
											</div>

											<div className={`card ${classes.investCard}`}>
												<div className={`card-heading`}>
													<Typography className={`card-title`}>Pool management</Typography>
												</div>

												<div className={`card-content`}>
													<Typography className={`text`}>
														You can send the pool money to the project or cancel the pool and distribute the money among investors:
													</Typography>

													<div className={classes.investForm}>
														<Button variant="contained" color="secondary" size="small" className={`button fill-button ${classes.btn} ${classes.sendMoneyBtn}`}>
															Send money
														</Button>
														<Button variant="outlined" color="secondary" size="small" className={`button outline-button ${classes.btn} ${classes.cancelBtn}`}>
															Cancel pool
														</Button>
													</div>
													
												</div>
											</div>

										</div>

									</div>
								)
							}}
						</Query>
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </>
    )
  }
}

export default withStyles(styles)(PoolInfo);