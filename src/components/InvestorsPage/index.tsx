import React from 'react'
import MainAppBar from '../MainAppBar'
import Grid from '@material-ui/core/Grid'
import InvestorCard from '../InvestorCard'
import Typography from '@material-ui/core/Typography'
import InvestorsFilter from '../InvestorsFilter'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { connect } from 'react-redux'
import './style.css'

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

function InvestorsPage (props:any) {
        // const data = {
        //     name: 'Paul Smith',
        //     login: '@paul',
        //     followers: 75
        // };
        console.log(props.filter);
        const input = {...props.filter};
        Object.keys(input).forEach((key) => (input[key] == "") && delete input[key]);
        return (
            <div>
                <MainAppBar/>
                <Grid container spacing={0}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        <div className="page-content">
                            <Query query={GET_INVESTORS} variables={{input: input}}>
                                {({ loading, error, data }) => {
                                    if(loading) return (
                                        <div className="investors-block">
                                            <div className="block-label">
                                                <Typography variant="subheading" align='center'>Loading</Typography>
                                            </div>
                                        </div>
                                    );
                                    if(error) return `Error: ${error}`;
                                    const investors = data.getInvestors.map((investor:any) => <div key={investor.id} className="investor-card"><InvestorCard data={investor}/></div>);
                                    return (
                                        <div className="investors-block">
                                            <div className="block-label">
                                                <Typography variant="subheading" align='center'>{`${data.getInvestors.length} investors`}</Typography>
                                            </div>
                                            <div className="investors">
                                                {investors}
                                            </div>
                                        </div>
                                    )
                                }}
                            </Query>
                            <div className="filter-block">
                                <div className="block-label">
                                    <Typography variant="subheading" align='center'>Filters</Typography>
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

const mapStateToProps = ({investorsFilter}:any) => {
    return {
        filter: investorsFilter.filter
    }
};

export default connect(mapStateToProps)(InvestorsPage)