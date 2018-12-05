import React, {Component} from 'react'
import { connect } from 'react-redux'
import { push } from "react-router-redux";
import {Link} from "react-router-dom";
import { createStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import '../style.css'
import { signUp } from '../../api'
import {userSignIn} from "../../actions";

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
    button: {
        minHeight: '30px',
        fontSize: '16px',
    },
    formFooter: {
        marginTop: '20px',
        textAlign: 'right',
    },
    link: {
        textDecoration: 'none',
    },
    linkButton: {
        color: '#2D3546',
    },
    disabled: {
        backgroundColor: 'rgba(139, 139, 139, 0.12)!important',
    },
});

class SignUpPage extends Component<any> {
    state = {
        name: '',
        lastname: '',
        nickname: '',
        email: '',
        password: '',
        nameInvalid: undefined,
        lastnameInvalid: undefined,
        nicknameInvalid: undefined,
        emailInvalid: undefined,
        passwordInvalid: undefined,
        nicknameUniq: undefined,
        emailUniq: undefined,
        error: undefined,
    };

    handleChange = (e:any)=> {
        this.setState({
            [e.target.name]: e.target.value
        });
        switch (e.target.name) {
            case 'name':
                if(e.target.value.length < 2 || e.target.value.search(/[*/~“`]/) !== -1) {
                    this.setState({nameInvalid: true});
                    break;
                }
                this.setState({nameInvalid: false});
                break;
            case 'lastname':
                if(e.target.value.length < 2 || e.target.value.search(/[*/~“`]/) !== -1) {
                    this.setState({lastnameInvalid: true});
                    break;
                }
                this.setState({lastnameInvalid: false});
                break;
            case 'nickname':
                if(e.target.value.length < 2 || e.target.value.search(/[*/~“`]/) !== -1) {
                    this.setState({nicknameInvalid: true});
                    break;
                }
                this.setState({nicknameUniq: false});
                this.setState({nicknameInvalid: false});
                break;
            case 'email':
                let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(e.target.value.match(pattern) === null) {
                    this.setState({emailInvalid: true});
                    break;
                }
                this.setState({emailUniq: false});
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

    handleClick =()=> {
        const data = {
            firstName: this.state.name,
            lastName: this.state.lastname,
            login: this.state.nickname,
            email: this.state.email,
            password: this.state.password
        };
        if(this.state.name.length > 0 && this.state.lastname.length > 0 && this.state.nickname.length > 0 && this.state.email.length > 0 && this.state.password.length > 0) {
            signUp(data)
                .then(json => {
                    localStorage.setItem("user", JSON.stringify(json)),
                    this.props.signIn(json)
                    return json
                })
                .then(json => {
                    if(json.error !== undefined) {
                        json.error.search(/email/) === -1 ? this.setState({emailUniq: false}) : this.setState({emailUniq: true})
                        json.error.search(/login/) === -1 ? this.setState({nicknameUniq: false}) : this.setState({nicknameUniq: true})
                        throw new Error("error")
                    }
                })
                .then(this.props.push)
                .catch(error => console.log(error));
        } else {
            this.setState({error: true})
        }
    };

    render() {
        const { classes } = this.props;
        
        const errorMessages = {
            email: 'This mail already exists',
            nickname: 'This nickname already exists',
            fieldsEmpty: 'Fill in all the fields',
        };

        return (
            <div className={classes.page}>
                <div className={classes.signupContainer}>

                    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', textDecoration: 'none', color: 'inherit', marginBottom: '25px'}}>
                        <img style={{width: '50px', marginBottom: '10px'}} src="./icons/logo.svg" alt="logo"/>
                        <h2 style={{fontFamily: 'HelveticaNeueCyr', margin: 0}}>icoWorld</h2>
                    </div>

                    <div>
                        <h2 style={{fontSize: '18px', fontWeight: 400, margin: 0, marginBottom: '15px'}}>Sign up</h2>
                        <form>
                            <TextField InputProps={{ disableUnderline: true, classes: {input: `${classes.input} border-input input`} }}
                                name="name" placeholder="First name" fullWidth={true} value={this.state.name}
                                onChange={this.handleChange} style={{marginBottom: '10px'}} />
                            
                            <TextField InputProps={{ disableUnderline: true, classes: {input: `${classes.input} border-input input`} }}
                                name="lastname" placeholder="Last name" fullWidth={true} value={this.state.lastname}
                                onChange={this.handleChange} style={{marginBottom: '10px'}} />

                            <TextField InputProps={{ disableUnderline: true, classes: {input: `${classes.input} border-input input`} }}
                                name="nickname" placeholder="Nickname" fullWidth={true} value={this.state.nickname} onChange={this.handleChange}
                                helperText={errorMessages.nickname} FormHelperTextProps={{classes: {root: 'invisible', error: 'visible'}}}
                                error={false || this.state.nicknameUniq} style={{marginBottom: '10px'}} />
                            
                            <TextField InputProps={{ disableUnderline: true, classes: {input: `${classes.input} border-input input`} }}
                                name="email" placeholder="Email" fullWidth={true} value={this.state.email} onChange={this.handleChange}
                                helperText={errorMessages.email} FormHelperTextProps={{classes: {root: 'invisible', error: 'visible'}}}
                                error={false || this.state.emailUniq} style={{marginBottom: '10px'}} />
                            
                            <TextField InputProps={{ disableUnderline: true, classes: {input: `${classes.input} border-input input`} }}
                                name="password" placeholder="Password" fullWidth={true} value={this.state.password} onChange={this.handleChange}
                                helperText={errorMessages.fieldsEmpty} FormHelperTextProps={{classes: {root: 'invisible', error: 'visible'}}}
                                error={false || this.state.error} style={{marginBottom: '10px'}} type="password" />

                            <Button fullWidth={true} variant="contained" color="secondary" onClick={this.handleClick}
                                className={`button fill-button ${classes.button}`} classes={{disabled: classes.disabled}}
                                style={{marginBottom: '10px'}}>
                                Sign up
                            </Button>
                        </form>
                    </div>
                    <div className={classes.formFooter}>
                        <Link className={classes.linkButton} to="/signin">I'm already a member</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SignUpPage))