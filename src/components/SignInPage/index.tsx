import React, {Component} from 'react';
import { connect } from 'react-redux'
import { push } from "react-router-redux";
import { createStyles, withStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
// import LangugageSelector from '../LanguageSelector';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../style.css';
import {handleErrors, fetchPost, endpoint} from '../../api'
import {userSignIn} from '../../actions'

const styles = () => createStyles({
    page: {
        background: 'url(/static/media/signp.52de34ae.jpg)',
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {},
    signupContainer: {
        backgroundColor: '#fff',
        width: '420px',
        padding: '20px 15px',
        boxSizing: 'border-box',
    },
    input: {
        fontSize: '16px',
        height: '30px',
        color: '#171717',
        '&:-webkit-autofill': {
            '-webkit-box-shadow': 'inset 0 0 0 50px #fff!important',
            '-webkit-text-fill-color': '#171717!important',
            color: '#171717!important',
        }
    },
    formFooter: {
        marginTop: '20px',
        textAlign: 'right',
    },
    button: {
        minHeight: '30px',
        fontSize: '16px',
    },
    link: {
        textDecoration: 'none',
    },
    linkButton: {
        color: '#2D3546',
    },
});

class SignInPage extends Component<any> {
    state = {
        email: '',
        password: '',
        emailInvalid: undefined,
        passwordInvalid: undefined,
        error: undefined,
    };

    handleChange = (e:any)=> {
        this.setState({
            [e.target.name]: e.target.value,
            error: false
        });
        switch (e.target.name) {
            case 'email':
                let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(e.target.value.match(pattern) === null) {
                    this.setState({emailInvalid: true});
                    break;
                }
                this.setState({emailInvalid: false});
                break;
            case 'password':
                if(e.target.value.length < 6 || e.target.value.search(/[*/~“`]/) !== -1) {
                    this.setState({passwordInvalid: true});
                    break;
                }
                this.setState({passwordInvalid: false});
                break;
            default:
                break;
        }
    };

    handleClick = () => {
        const url = `${endpoint}/login`;
        const data = {
            email: this.state.email,
            password: this.state.password
        };

        if(this.state.email.length > 0 && this.state.password.length > 0) {
            fetchPost(url, data)
                .then(response => handleErrors(response))
                .then(response => response.json())
                .then(json => {
                    localStorage.setItem("user", JSON.stringify(json));
                    this.props.signIn(json)
                })
                .then(this.props.push)
                .catch(error => (
                    console.log(error),
                    this.setState({error: true})
                ))
        } else {
            this.setState({error: true})
        }
    };

    render() {
        const { classes } = this.props;

        const errorMessages = {
            login: 'Invalid email or password',
            fieldsEmpty: 'Fill in all the fields',
        };

        let emailNotEmpty = this.state.email.length > 0 ? true : false;
        let passwordNotEmpty = this.state.password.length > 0 ? true : false;
        let notEmpty = (emailNotEmpty && passwordNotEmpty);

        return (
            <div className={classes.page}>
                <div className={classes.signupContainer}>

                    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', textDecoration: 'none', color: 'inherit', marginBottom: '25px'}}>
                        <img style={{width: '50px', marginBottom: '10px'}} src="./icons/logo.svg" alt="logo"/>
                        <h2 style={{fontFamily: 'HelveticaNeueCyr', margin: 0}}>icoWorld</h2>
                    </div>

                    <div>
                        <h2 style={{fontSize: '18px', fontWeight: 400, margin: 0, marginBottom: '15px'}}>Sign in</h2>
                        <form>
                            <TextField InputProps={{ disableUnderline: true, classes: {input: `${classes.input} border-input input`} }} style={{marginBottom: '10px'}}
                                name="email" placeholder="Email" fullWidth={true} value={this.state.email} onChange={this.handleChange} />
                            <TextField InputProps={{ disableUnderline: true, classes: {input: `${classes.input} border-input input`} }} style={{marginBottom: '10px'}}
                                name="password" type="password" placeholder="Password" fullWidth={true} value={this.state.password} onChange={this.handleChange}
                                helperText={notEmpty ? errorMessages.login : errorMessages.fieldsEmpty} FormHelperTextProps={{classes: {root: 'invisible', error: 'visible'}}}
                                error={false || this.state.error} />

                            <Button fullWidth={true} variant="contained" color="secondary" onClick={this.handleClick}
                                className={`button fill-button ${classes.button}`} style={{marginBottom: '10px'}}>
                                Sign in
                            </Button>
                            <Link to="/signup" className={classes.link}>
                                <Button fullWidth={true} variant="outlined" color="secondary" className={`button outline-button ${classes.button}`}>
                                    Create an account
                                </Button>
                            </Link>

                        </form>
                    </div>
                    <div className={classes.formFooter}>
                        <Link className={classes.linkButton} to="/reset">Forgot password?</Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state:any) => {
    return {
        authUser: state.authUser
    }
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        signIn: (user:any) => dispatch(userSignIn(user)),
        push: () => dispatch(push('/feed'))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SignInPage))