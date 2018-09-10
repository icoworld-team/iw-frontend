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
import { withStyles, createStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
    filters: {
        padding: '15px',
    },
    filtersRow: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: '15px',
    },
    fromToInputs: {
        display: 'flex',
        alignItems: 'center',
    },
    inputLabel: {
        fontFamily: 'Open Sans',
        fontSize: '12px',
        lineHeight: '14px',
        color: '#171717',
    },
    input: {
        fontFamily: 'Open Sans',
        width: '100px',
        fontSize: '12px',
        padding: '1px 5px',
        borderRadius: '3px',
        border: '1px solid #c1c1c1',
        '&:focus': {
            outline: '#a6c8ff auto 5px',
        },
    },
    minInput: {
        width: '45px',
    },
    marginRightText: {
        marginRight: '5px',
    },
    marginText: {
        margin: '0 5px',
        marginTop: '6px',
    },
    filtersChecboxRow: {
        marginTop: '30px',
    },
    filtersCheckbox: {
        margin: 0,
        alignItems: 'flex-end',
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
        const { classes } = this.props;

        return (
            <div className={classes.filters}>
                <div className={classes.filtersRow}>
                    <Typography className={classes.inputLabel}>Country</Typography>
                    <TextField InputProps={{ disableUnderline: true, classes: {input: classes.input} }} 
                        name="country"/>
                </div>
                <div className={classes.filtersRow}>
                    <Typography className={classes.inputLabel}>Number of followers</Typography>
                    <div className={classes.fromToInputs}>
                        <TextField InputProps={{ disableUnderline: true, classes: {input: classes.input} }} 
                            className={classes.minInput} name="fromFollowers" placeholder="From" />
                        <p className={classes.marginText}>—</p>
                        <TextField InputProps={{ disableUnderline: true, classes: {input: classes.input} }} 
                            className={classes.minInput} name="toFollowers" placeholder="To" />
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
                            <TextField InputProps={{ disableUnderline: true, classes: {input: classes.input} }} 
                                className={classes.minInput} name="fromCapitalAmount" placeholder="From" />
                            <p className={classes.marginText}>—</p>
                            <TextField InputProps={{ disableUnderline: true, classes: {input: classes.input} }} 
                                className={classes.minInput} name="toCapitalAmount" placeholder="To" />
                        </div>
                    </div>
                    <div className={classes.filtersRow}>
                        <Typography className={classes.inputLabel}>Profit level (per year), %</Typography>
                        <div className={classes.fromToInputs}>
                            <TextField InputProps={{ disableUnderline: true, classes: {input: classes.input} }} 
                                className={classes.minInput} name="fromProfitLevel" placeholder="From" />
                            <p className={classes.marginText}>—</p>
                            <TextField InputProps={{ disableUnderline: true, classes: {input: classes.input} }} 
                                className={classes.minInput} name="toProfitLevel" placeholder="To" />
                        </div>
                    </div>
                    <div className={classes.filtersRow}>
                        <Typography className={classes.inputLabel}>Max drawdown, %</Typography>
                        <div className={classes.fromToInputs}>
                            <TextField InputProps={{ disableUnderline: true, classes: {input: classes.input} }} 
                                className={classes.minInput} name="fromMaxDrawdown" placeholder="From" />
                            <p className={classes.marginText}>—</p>
                            <TextField InputProps={{ disableUnderline: true, classes: {input: classes.input} }} 
                                className={classes.minInput} name="toMaxDrawdown" placeholder="To" />
                        </div>
                    </div>
                    <div className={classes.filtersRow}>
                        <Typography className={classes.inputLabel}>Average investment, $</Typography>
                        <div className={classes.fromToInputs}>
                            <TextField InputProps={{ disableUnderline: true, classes: {input: classes.input} }} 
                                className={classes.minInput} name="fromAverageInvestment" placeholder="From" />
                            <p className={classes.marginText}>—</p>
                            <TextField InputProps={{ disableUnderline: true, classes: {input: classes.input} }} 
                                className={classes.minInput} name="toAverageInvestment" placeholder="To" />
                        </div>
                    </div>
                    <div className={classes.filtersRow}>
                        <Typography className={classes.inputLabel}>Average duration of investment, month</Typography>
                        <div className={classes.fromToInputs}>
                            <TextField InputProps={{ disableUnderline: true, classes: {input: classes.input} }} 
                                className={classes.minInput} name="fromAverageDuration" placeholder="From" />
                            <p className={classes.marginText}>—</p>
                            <TextField InputProps={{ disableUnderline: true, classes: {input: classes.input} }} 
                                className={classes.minInput} name="toAverageDuration" placeholder="To" />
                        </div>
                    </div>
                    <div className={classes.filtersRow}>
                        <Typography className={classes.inputLabel}>Percentage of profitable investments, %</Typography>
                        <div className={classes.fromToInputs}>
                            <TextField InputProps={{ disableUnderline: true, classes: {input: classes.input} }} 
                                className={classes.minInput} name="fromPercentageOfProfitable" placeholder="From" />
                            <p className={classes.marginText}>—</p>
                            <TextField InputProps={{ disableUnderline: true, classes: {input: classes.input} }} 
                                className={classes.minInput} name="toPercentageOfProfitable" placeholder="To" />
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
                                value="followers"
                                control={<Radio color="primary" className={classes.radioBtn} />}
                                label="Number of followers"
                            />
                            <FormControlLabel
                                classes={{label: classes.inputLabel}}
                                className={classes.radioBtnRow}
                                value="capitalAmount"
                                control={<Radio color="primary" className={classes.radioBtn} />}
                                label="Capital Amount"
                            />
                            <FormControlLabel
                                classes={{label: classes.inputLabel}}
                                className={classes.radioBtnRow}
                                value="profitLevel"
                                control={<Radio color="primary" className={classes.radioBtn} />}
                                label="Profit Level"
                            />
                            <FormControlLabel
                                classes={{label: classes.inputLabel}}
                                className={classes.radioBtnRow}
                                value="investments"
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

export default withStyles(styles)(InvestorsFilter);