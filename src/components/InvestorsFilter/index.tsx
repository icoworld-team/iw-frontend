import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { connect } from 'react-redux'
import { investorsFilter } from "../../actions";
import { withStyles, createStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
    filters: {
        padding: '15px',
    },
    filtersRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '15px',
    },
    fromToInputs: {
        display: 'flex',
        alignItems: 'center',
        width: '110px',
    },
    inputLabel: {
        fontFamily: 'Open Sans',
        fontSize: '14px',
        lineHeight: '14px',
        color: '#171717',
    },
    input: {
        width: '110px',
        fontSize: '14px',
    },
    minInput: {
        minWidth: '45px',
        flex: 1,
    },
    marginRightText: {
        marginRight: '5px',
    },
    marginText: {
        margin: '0 5px',
    },
    filtersChecboxRow: {
        marginTop: '30px',
    },
    filtersCheckbox: {
        margin: 0,
        alignItems: 'center',
    },
    checkboxLabel: {
        marginRight: '10px',
        color: '#8b8b8b',
    },
    checkboxBtn: {
        width: '20px',
        height: '20px',
    },
    checkboxIcon: {
        fontSize: '20px',
    },
    filtersRadio: {
        marginTop: '30px',
    },
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
    },
    hidden: {
        display: 'none',
    },
});

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
        const { classes } = this.props;

        return (
            <div className={classes.filters}>
                <div className={classes.filtersRow}>
                    <Typography className={classes.inputLabel}>Country</Typography>
                    <TextField InputProps={{ disableUnderline: true, classes: {input: `${classes.input} border-input input`} }}
                        name="country" value={this.state.country} onChange={this.handleChange} />
                </div>
                <div className={classes.filtersRow}>
                    <Typography className={classes.inputLabel}>Number of followers</Typography>
                    <div className={classes.fromToInputs}>
                        <TextField InputProps={{ disableUnderline: true, classes: {input: `${classes.input} ${classes.minInput} border-input input`} }}
                            name="fromFollowers" placeholder="From"
                            value={this.state.fromFollowers} onChange={this.handleChange} />
                        <p className={classes.marginText}>–</p>
                        <TextField InputProps={{ disableUnderline: true, classes: {input: `${classes.input} ${classes.minInput} border-input input`} }}
                            name="toFollowers" placeholder="To"
                            value={this.state.toFollowers} onChange={this.handleChange} />
                    </div>
                </div>

                <div className={`${classes.filtersRow} ${classes.filtersChecboxRow}`}>
                    <FormControlLabel
                        className={classes.filtersCheckbox}
                        classes={{label: `${classes.inputLabel} ${classes.checkboxLabel}`}}
                        labelPlacement="start"
                        label="Public portfolio"
                        control={
                            <Checkbox
                                color="primary"
                                onChange={this.showAdvanced}
                                className={classes.checkboxBtn}
                                icon={<CheckBoxOutlineBlankIcon className={classes.checkboxIcon} />}
                                checkedIcon={<CheckBoxIcon className={classes.checkboxIcon} />}
                            />
                        }
                    />
                </div>

                <div className={this.state.advanced ? '' : classes.hidden}>
                    
                    <div className={classes.filtersRow}>
                        <Typography className={classes.inputLabel}>Capital amount, $</Typography>
                        <div className={classes.fromToInputs}>
                            <TextField InputProps={{ disableUnderline: true, classes: {input: `${classes.input} ${classes.minInput} border-input input`} }}
                                name="fromCapitalAmount" placeholder="From" />
                            <p className={classes.marginText}>–</p>
                            <TextField InputProps={{ disableUnderline: true, classes: {input: `${classes.input} ${classes.minInput} border-input input`} }}
                                name="toCapitalAmount" placeholder="To" />
                        </div>
                    </div>
                    <div className={classes.filtersRow}>
                        <Typography className={classes.inputLabel}>Profit level (per year), %</Typography>
                        <div className={classes.fromToInputs}>
                            <TextField InputProps={{ disableUnderline: true, classes: {input: `${classes.input} ${classes.minInput} border-input input`} }}
                                name="fromProfitLevel" placeholder="From" />
                            <p className={classes.marginText}>–</p>
                            <TextField InputProps={{ disableUnderline: true, classes: {input: `${classes.input} ${classes.minInput} border-input input`} }}
                                name="toProfitLevel" placeholder="To" />
                        </div>
                    </div>
                    <div className={classes.filtersRow}>
                        <Typography className={classes.inputLabel}>Max drawdown, %</Typography>
                        <div className={classes.fromToInputs}>
                            <TextField InputProps={{ disableUnderline: true, classes: {input: `${classes.input} ${classes.minInput} border-input input`} }}
                                name="fromMaxDrawdown" placeholder="From" />
                            <p className={classes.marginText}>–</p>
                            <TextField InputProps={{ disableUnderline: true, classes: {input: `${classes.input} ${classes.minInput} border-input input`} }}
                                name="toMaxDrawdown" placeholder="To" />
                        </div>
                    </div>
                    <div className={classes.filtersRow}>
                        <Typography className={classes.inputLabel}>Average investment, $</Typography>
                        <div className={classes.fromToInputs}>
                            <TextField InputProps={{ disableUnderline: true, classes: {input: `${classes.input} ${classes.minInput} border-input input`} }}
                                name="fromAverageInvestment" placeholder="From" />
                            <p className={classes.marginText}>–</p>
                            <TextField InputProps={{ disableUnderline: true, classes: {input: `${classes.input} ${classes.minInput} border-input input`} }}
                                name="toAverageInvestment" placeholder="To" />
                        </div>
                    </div>
                    <div className={classes.filtersRow}>
                        <Typography className={classes.inputLabel}>Average duration of investment, month</Typography>
                        <div className={classes.fromToInputs}>
                            <TextField InputProps={{ disableUnderline: true, classes: {input: `${classes.input} ${classes.minInput} border-input input`} }}
                                name="fromAverageDuration" placeholder="From" />
                            <p className={classes.marginText}>–</p>
                            <TextField InputProps={{ disableUnderline: true, classes: {input: `${classes.input} ${classes.minInput} border-input input`} }}
                                name="toAverageDuration" placeholder="To" />
                        </div>
                    </div>
                    <div className={classes.filtersRow}>
                        <Typography className={classes.inputLabel}>Percentage of profitable investments, %</Typography>
                        <div className={classes.fromToInputs}>
                            <TextField InputProps={{ disableUnderline: true, classes: {input: `${classes.input} ${classes.minInput} border-input input`} }}
                                name="fromPercentageOfProfitable" placeholder="From" />
                            <p className={classes.marginText}>–</p>
                            <TextField InputProps={{ disableUnderline: true, classes: {input: `${classes.input} ${classes.minInput} border-input input`} }}
                                name="toPercentageOfProfitable" placeholder="To" />
                        </div>
                    </div>

                </div>

                <div className={classes.filtersRadio}>
                    <FormControl component="fieldset">
                        <FormLabel className={`${classes.inputLabel} ${classes.RadioGroupLabel}`} component="legend">Sort by</FormLabel>
                        <RadioGroup value={this.state.sortBy} onChange={this.handleChange} name="sortBy">
   
                            <FormControlLabel
                                classes={{label: classes.inputLabel}}
                                className={classes.radioBtnRow}
                                value="NUMBER_OF_FOLLOWERS"
                                control={<Radio color="primary" className={classes.radioBtn} />}
                                label="Number of followers"
                            />
                            <FormControlLabel
                                classes={{label: classes.inputLabel}}
                                className={classes.radioBtnRow}
                                value="CAPITAL_AMOUNT"
                                control={<Radio color="primary" className={classes.radioBtn} />}
                                label="Capital Amount"
                            />
                            <FormControlLabel
                                classes={{label: classes.inputLabel}}
                                className={classes.radioBtnRow}
                                value="PROFIT_LEVEL"
                                control={<Radio color="primary" className={classes.radioBtn} />}
                                label="Profit Level"
                            />
                            <FormControlLabel
                                classes={{label: classes.inputLabel}}
                                className={classes.radioBtnRow}
                                value="PERCENTAGE_OF_PROFITABLE_INVESTMENTS"
                                control={<Radio color="primary" className={classes.radioBtn} />}
                                label="Percentage of profitable investments"
                            />

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

export default connect(null, mapDispatchToProps)(withStyles(styles)(InvestorsFilter))

