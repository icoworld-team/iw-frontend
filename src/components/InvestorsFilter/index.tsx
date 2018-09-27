import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
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
        sortBy: 'REGISTRATION_DATE',
        country: ''
    };

    handleChange = async (event:React.ChangeEvent<HTMLInputElement>)=> {
        await this.setState({
            [event.target.name]: event.target.value
        });
        this.props.filter({
            country: this.state.country,
            sortBy: this.state.sortBy
        });
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
                <div className={classes.filtersRadio}>
                    <FormControl component="fieldset">
                        <FormLabel className={`${classes.inputLabel} ${classes.RadioGroupLabel}`} component="legend">Sort by</FormLabel>
                        <RadioGroup value={this.state.sortBy} onChange={this.handleChange} name="sortBy">
                            <FormControlLabel
                                classes={{label: classes.inputLabel}}
                                className={classes.radioBtnRow}
                                value="REGISTRATION_DATE"
                                control={<Radio color="primary" className={classes.radioBtn} />}
                                label="Registration date"
                            />
                            <FormControlLabel
                                classes={{label: classes.inputLabel}}
                                className={classes.radioBtnRow}
                                value="NUMBER_OF_FOLLOWERS"
                                control={<Radio color="primary" className={classes.radioBtn} />}
                                label="Number of followers"
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