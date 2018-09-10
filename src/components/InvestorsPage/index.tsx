import React from 'react'
import MainAppBar from '../MainAppBar'
import Grid from '@material-ui/core/Grid'
import InvestorCard from '../InvestorCard'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import InvestorsFilter from '../InvestorsFilter'
import { withStyles, createStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
    pageContent: {
        display: 'flex',
        maxWidth: '1100px',
        margin: '20px auto',
        alignItems: 'flex-start',
    },
    investorsBlock: {
        border: '1px solid rgba(193, 193, 193, 1)',
        padding: 0,
        flex: 'none',
        marginBottom: 0,
    },
    investors: {
        maxWidth: '789px',
        marginRight: '15px',
        flexBasis: '789px',
    },
    investorsFilter: {
        flex: 1,
    },
    investorsBlockHeading: {
        borderBottom: '1px solid rgba(193, 193, 193, 1)',
        padding: '5px 15px',
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        fontFamily: 'Open Sans',
        width: '175px',
        fontSize: '12px',
        padding: '8px 10px',
        borderRadius: '3px',
        boxSizing: 'border-box',
        backgroundColor: '#ebebeb',
        '&:focus': {
            outline: '#a6c8ff auto 5px',
        },
    },
    searchInput: {
        marginLeft: 'auto',
    },
    investorsContent: {},
    investorsBlockTitle: {
        fontSize: '18px', 
        lineHeight: '20px',
        fontFamily: 'Open Sans',
    },
    investorsList: {
        flexWrap: 'wrap',
        margin: 0,
        padding: 0,
        listStyle: 'none',
        display: 'flex',
    },
    investorsItem: {
        display: 'flex',
        flex: 1,
        minWidth: '196px',
        maxWidth: '196px',
        height: '284px',
        borderRight: '1px solid rgba(193, 193, 193, 1)',
        borderBottom: '1px solid rgba(193, 193, 193, 1)',
        '&:nth-child(4n)': {
            borderRight: 'none',
        },
    },
    filter: {
        flex: 1,
    },
  });

class InvestorsPage extends React.Component<any> {
    render() {
        const { classes } = this.props;

        const data = {
            name: 'Paul Smith',
            login: '@paul',
            followers: 75
        };

        return (
            <div>
                <MainAppBar/>
                <Grid container spacing={0}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        <div className={classes.pageContent}>
                            <div className={`card ${classes.investorsBlock} ${classes.investors}`}>
                                <div className={classes.investorsBlockHeading}>
                                    <Typography className={classes.investorsBlockTitle} variant="subheading">403 investors, 20 shows</Typography>
                                    <TextField InputProps={{ disableUnderline: true, classes: {input: classes.input} }} 
                                        className={classes.searchInput} name="toFollowers" placeholder="Search" />
                                </div>
                                <div className={classes.investorsContent}>
                                    <ul className={classes.investorsList}>
                                        <li className={classes.investorsItem}><InvestorCard data={data}/></li>
                                        <li className={classes.investorsItem}><InvestorCard data={data}/></li>
                                        <li className={classes.investorsItem}><InvestorCard data={data}/></li>
                                        <li className={classes.investorsItem}><InvestorCard data={data}/></li>
                                        <li className={classes.investorsItem}><InvestorCard data={data}/></li>
                                        <li className={classes.investorsItem}><InvestorCard data={data}/></li>
                                        <li className={classes.investorsItem}><InvestorCard data={data}/></li>
                                        <li className={classes.investorsItem}><InvestorCard data={data}/></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`card ${classes.investorsBlock} ${classes.investorsFilter}`}>
                                <div className={classes.investorsBlockHeading}>
                                    <Typography className={classes.investorsBlockTitle} variant="subheading">Filters</Typography>
                                </div>
                                <InvestorsFilter/>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(InvestorsPage);