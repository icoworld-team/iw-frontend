import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import CheckBox from '@material-ui/core/Checkbox'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { connect } from 'react-redux'
import { investorsFilter } from "../../actions";


class InvestorsFilter extends Component<any> {
    state = {
        sortBy: 'NUMBER_OF_FOLLOWERS',
        country: '',
        fromFollowers: '',
        toFollowers: '',
        advanced: false
    };

    handleChange = async (event:React.ChangeEvent<HTMLInputElement>)=> {
        await this.setState({
            [event.target.name]: event.target.value
        });
        this.props.filter({
            country: this.state.country,
            followersRangeFilter: {
                from: +this.state.fromFollowers,
                to: +this.state.toFollowers
            },
            sortBy: this.state.sortBy
        });
    };

    showAdvanced = ()=> {
        this.setState({
            advanced: !this.state.advanced
        })
    };

    render() {
        return (
            <div className="filter">
                <div className="filter-row">
                    <div className="row-label"><p>Country</p></div>
                    <TextField className="filter-textfield" name="country" value={this.state.country} onChange={this.handleChange}/>
                </div>
                <div className="filter-row">
                    <div className="row-label"><p className="filter-text">Number of followers</p></div>
                    <p className="filter-text">from</p>
                    <TextField className="filter-textfield" name="fromFollowers" value={this.state.fromFollowers} onChange={this.handleChange}/>
                    <p className="filter-text">to</p>
                    <TextField className="filter-textfield" name="toFollowers" value={this.state.toFollowers} onChange={this.handleChange}/>
                </div>
                <div className="filter-row">
                    <div className="row-label"><p>Public portfolio</p></div>
                    <CheckBox name="advanced" checked={this.state.advanced} onChange={this.showAdvanced} color="primary"/>
                </div>

                <div className={this.state.advanced ? '' : 'hidden'}>
                    <div hidden className="filter-row">
                        <div className="row-label"><p className="filter-text">Capital amount, $</p></div>
                        <p className="filter-text">from</p>
                        <TextField className="filter-textfield" name="fromFollowers"/>
                        <p className="filter-text">to</p>
                        <TextField className="filter-textfield" name="toFollowers"/>
                    </div>
                    <div className="filter-row">
                        <div className="row-label"><p className="filter-text">Profit level (per year), %</p></div>
                        <p className="filter-text">from</p>
                        <TextField className="filter-textfield" name="fromFollowers"/>
                        <p className="filter-text">to</p>
                        <TextField className="filter-textfield" name="toFollowers"/>
                    </div>
                    <div className="filter-row">
                        <div className="row-label"><p className="filter-text">Max drawdown, %</p></div>
                        <p className="filter-text">from</p>
                        <TextField className="filter-textfield" name="fromFollowers"/>
                        <p className="filter-text">to</p>
                        <TextField className="filter-textfield" name="toFollowers"/>
                    </div>
                    <div className="filter-row">
                        <div className="row-label"><p className="filter-text">Average investment, $</p></div>
                        <p className="filter-text">from</p>
                        <TextField className="filter-textfield" name="fromFollowers"/>
                        <p className="filter-text">to</p>
                        <TextField className="filter-textfield" name="toFollowers"/>
                    </div>
                    <div className="filter-row">
                        <div className="row-label"><p className="filter-text">Average duration of investment, month</p></div>
                        <p className="filter-text">from</p>
                        <TextField className="filter-textfield" name="fromFollowers"/>
                        <p className="filter-text">to</p>
                        <TextField className="filter-textfield" name="toFollowers"/>
                    </div>
                    <div className="filter-row">
                        <div className="row-label"><p className="filter-text">Percentage of profitable investments, %</p></div>
                        <p className="filter-text">from</p>
                        <TextField className="filter-textfield" name="fromFollowers"/>
                        <p className="filter-text">to</p>
                        <TextField className="filter-textfield" name="toFollowers"/>
                    </div>
                </div>

                <div className="filter-sort">
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Sort by</FormLabel>
                        <RadioGroup value={this.state.sortBy} onChange={this.handleChange} name="sortBy">
                            <FormControlLabel value="NUMBER_OF_FOLLOWERS" control={<Radio color="primary" />} label="Number of followers"/>
                            <FormControlLabel value="CAPITAL_AMOUNT" control={<Radio color="primary" />} label="Capital Amount"/>
                            <FormControlLabel value="PROFIT_LEVEL" control={<Radio color="primary" />} label="Profit Level"/>
                            <FormControlLabel value="PERCENTAGE_OF_PROFITABLE_INVESTMENTS" control={<Radio color="primary" />} label="Percentage of profitable investments"/>
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        filter: (filter:any) => dispatch(investorsFilter(filter))
    }
};

export default connect(null, mapDispatchToProps)(InvestorsFilter)