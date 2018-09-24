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
import { socket } from "../../api"

const styles = () => createStyles({
    investorsBlock: {
        padding: 0,
        flex: 'none',
        marginBottom: 0,
    },
    investors: {
        maxWidth: '786px',
        marginRight: '15px',
        flexBasis: '786px',
    },
    investorsFilter: {
        flex: 1,
    },
    investorsContent: {},
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
        // '&:nth-last-child(-n+4)': {
        //     borderBottom: 'none',
        // },
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
    state = {
        searchText: ""
    };

    componentDidMount() {
        socket.on("newMessage", (data:any) => console.log(data));
        socket.on("error", (error:any) => console.log('error:' + error));
    }

    handleChange = (e:any) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };


    render() {
        const { classes } = this.props;

        console.log(this.props.filter);
        const input = {
            name: this.state.searchText,
            ...this.props.filter
        };
        Object.keys(input).forEach((key) => (input[key] == "") && delete input[key]);

        return (
            <div>
                <MainAppBar/>
                <Grid container spacing={0}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>

                        <div className={`page-content`}>
                            <div className={`card ${classes.investorsBlock} ${classes.investors}`}>
                                <Query query={GET_INVESTORS} variables={{input: input}}>
                                    {({ loading, error, data }) => {
                                        if(loading) return (
                                            <div className="block-label">
                                                <Typography variant="subheading" align='center'>Loading</Typography>
                                            </div>
                                        );
                                        if(error) return `Error: ${error}`;
                                        const investors = data.getInvestors.map((investor:any) => <li key={investor.id} className={classes.investorsItem}><InvestorCard data={investor}/></li>);
                                        return (
                                            <>
                                                <div className={`card-heading`}>
                                                    <Typography className={`card-title`} variant="subheading">{`${data.getInvestors.length} investors`}</Typography>
                                                    <TextField InputProps={{ disableUnderline: true, classes: {input: `search-input input`} }} 
                                                        className={`heading-input`} name="searchText" placeholder="Search"
                                                               value={this.state.searchText} onChange={this.handleChange} autoFocus/>
                                                </div>
                                                <div className={classes.investorsContent}>
                                                    <ul className={classes.investorsList}>
                                                        {investors}
                                                    </ul>
                                                </div>
                                            </>
                                        )
                                    }}
                                </Query>
                            </div>
                            <div className={`card ${classes.investorsBlock} ${classes.investorsFilter}`}>
                                <div className={`card-heading`}>
                                    <Typography className={`card-title`}>Filters</Typography>
                                </div>
                                <InvestorsFilter />
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