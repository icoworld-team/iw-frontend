import React from 'react'
import MainAppBar from '../MainAppBar'
import Grid from '@material-ui/core/Grid'
import InvestorCard from '../InvestorCard'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import InvestorsFilter from '../InvestorsFilter'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { connect } from 'react-redux'
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

const GET_INVESTORS = gql`
    query getInvestors($input: InvestorsFilterParamsInput!) {
        getInvestors(input: $input) {
            id
            name
            login
            countOfFollowers
        }
    }
`;

class InvestorsPage extends React.Component<any> {
    render() {
        const { classes } = this.props;

        // const data = {
        //     name: 'Paul Smith',
        //     login: '@paul',
        //     followers: 75
        // };
        console.log(this.props.filter);
        const input = {...this.props.filter};
        Object.keys(input).forEach((key) => (input[key] == "") && delete input[key]);
        return (
            <div>
                <MainAppBar/>
                <Grid container spacing={0}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>

                        <div className={classes.pageContent}>
                            <Query query={GET_INVESTORS} variables={{input: input}}>
                                {({ loading, error, data }) => {
                                    if(loading) return (
                                        <div className={`card ${classes.investorsBlock} ${classes.investors}`}>
                                            <div className="block-label">
                                                <Typography variant="subheading" align='center'>Loading</Typography>
                                            </div>
                                        </div>
                                    );
                                    if(error) return `Error: ${error}`;
                                    const investors = data.getInvestors.map((investor:any) => <li key={investor.id} className={classes.investorsItem}><InvestorCard data={investor}/></li>);
                                    return (
                                        <div className={`card ${classes.investorsBlock} ${classes.investors}`}>
                                            <div className={classes.investorsBlockHeading}>
                                                <Typography className={classes.investorsBlockTitle} variant="subheading">{`${data.getInvestors.length} investors`}</Typography>
                                                <TextField InputProps={{ disableUnderline: true, classes: {input: classes.input} }} 
                                                    className={classes.searchInput} name="toFollowers" placeholder="Search" />
                                            </div>
                                            <div className={classes.investorsContent}>
                                                <ul className={classes.investorsList}>
                                                    {investors}
                                                </ul>
                                            </div>
                                        </div>
                                    )
                                }}
                            </Query>
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


const mapStateToProps = ({investorsFilter}:any) => {
    return {
        filter: investorsFilter.filter
    }
};

export default connect(mapStateToProps)(withStyles(styles)(InvestorsPage))