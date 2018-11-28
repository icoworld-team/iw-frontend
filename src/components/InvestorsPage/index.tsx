import React from 'react'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import InvestorsFilter from '../InvestorsFilter'
// import { Query } from 'react-apollo'
import { connect } from 'react-redux'
import { withStyles, createStyles } from '@material-ui/core/styles';
import { GET_INVESTORS } from '../../api/graphql'
// import { socket } from "../../api"
import CustomQuery from '../CustomQuery'
import InvestorsList from '../InvestorsList'

const styles = () => createStyles({
    investorsBlock: {
        padding: 0,
        flex: 'none',
        marginBottom: 0,
    },
    investors: {
        maxWidth: '784px',
        marginRight: '15px',
        flexBasis: '784px',
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

class InvestorsPage extends React.Component<any> {
    state = {
        searchText: "",
        investorsAmount: 0,
    };

    handleChange = (e:any) => {
        if(e.keyCode === 13)
            this.setState({
                [e.target.name]: e.target.value
            });
    };

    changeAmount = (amount:number) => {
        this.setState({investorsAmount: amount});
    };

    render() {
        const { classes } = this.props;

        const input = {
            name: this.state.searchText,
            skip: 0,
            limit: 30,
            ...this.props.filter
        };

        Object.keys(input).forEach((key) => (input[key] == "" && input[key] !== 0) && delete input[key]);

        return (
            <div>
                <div className={`page-wrapper`}>

                        <div className={`page-content`}>
                            <div className={`card ${classes.investorsBlock} ${classes.investors}`}>
                                <div className={`card-heading`}>
                                    <Typography className={`card-title`} variant="subheading">{`${this.state.investorsAmount} investors`}</Typography>
                                    <TextField InputProps={{ disableUnderline: true, classes: {input: `search-input input`} }} 
                                        className={`heading-input`} name="searchText" placeholder="Search"
                                        onKeyDown={this.handleChange} />
                                </div>
                                <div className={classes.investorsContent}>
                                    <ul className={classes.investorsList}>
                                        <CustomQuery query={GET_INVESTORS} variables={{input: input}}>
                                            {({ error, data, fetchMore }:any) => {
                                                if(error) return `Error: ${error}`;
                                                return <InvestorsList data={data.getInvestors} classes={classes} changeAmount={this.changeAmount}
                                                                      onLoadMore={()=> fetchMore({
                                                                          variables: {input: {...input, skip: data.getInvestors.length}},
                                                                          updateQuery: (prev:any, {fetchMoreResult}:any) => {
                                                                              if (!fetchMoreResult) return prev;
                                                                              return Object.assign({}, prev, {
                                                                                  getInvestors: [...prev.getInvestors, ...fetchMoreResult.getInvestors]
                                                                              });
                                                                          }
                                                                      })}/>;
                                                // const investors = data.getInvestors.map((investor:any) => <li key={investor.id} className={classes.investorsItem}><InvestorCard data={investor}/></li>);
                                                // investors.length !== this.state.investorsAmount ? this.setState({investorsAmount: investors.length}) : null
                                                // return investors.length ? investors : <Typography style={{padding: '15px'}} variant="subheading" align='center'>Not results</Typography>
                                            }}
                                        </CustomQuery>
                                    </ul>
                                </div>
                            </div>
                            <div className={`card ${classes.investorsBlock} ${classes.investorsFilter}`}>
                                <div className={`card-heading`}>
                                    <Typography className={`card-title`}>Filters</Typography>
                                </div>
                                <InvestorsFilter />
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}




const mapStateToProps = ({investorsFilter}:any) => {
    return {
        filter: investorsFilter.filter,
    }
};

export default connect(mapStateToProps)(withStyles(styles)(InvestorsPage))