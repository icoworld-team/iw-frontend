import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import CheckBox from '@material-ui/core/Checkbox'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default class InvestorsFilter extends Component {
    state = {
        sortBy: 'followers',
        advanced: false
    };

    handleChange = (event:any)=> {
        this.setState({
            [event.target.name]: event.target.value
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
                    <TextField className="filter-textfield" name="country"/>
                </div>
                <div className="filter-row">
                    <div className="row-label"><p className="filter-text">Number of followers</p></div>
                    <p className="filter-text">from</p>
                    <TextField className="filter-textfield" name="fromFollowers"/>
                    <p className="filter-text">to</p>
                    <TextField className="filter-textfield" name="toFollowers"/>
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
                            <FormControlLabel value="followers" control={<Radio color="primary" />} label="Number of followers"/>
                            <FormControlLabel value="capitalAmount" control={<Radio color="primary" />} label="Capital Amount"/>
                            <FormControlLabel value="profitLevel" control={<Radio color="primary" />} label="Profit Level"/>
                            <FormControlLabel value="investments" control={<Radio color="primary" />} label="Percentage of profitable investments"/>
                        </RadioGroup>
                    </FormControl>
                </div>

            </div>
        )
    }
}