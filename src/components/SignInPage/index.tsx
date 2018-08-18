import React, {Component} from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import LangugageSelector from '../LanguageSelector';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../style.css';

const styles = () => createStyles({
    signInBtn: {
        textDecoration: 'none',
    }
});

class SignInPage extends Component<any> {
    state = {
        email: '',
        password: '',
        emailInvalid: undefined,
        passwordInvalid: undefined,
    };

    handleChange = (e:any)=> {
        this.setState({
            [e.target.name]: e.target.value
        });
        switch (e.target.name) {
            case 'email':
                let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(e.target.value.match(pattern) === null){
                    this.setState({emailInvalid: true});
                    break;
                }
                this.setState({emailInvalid: false});
                break;
            case 'password':
                if(e.target.value.length<6 || e.target.value.search(/[*/~“`]/)!==-1){
                    this.setState({passwordInvalid: true});
                    break;
                }
                this.setState({passwordInvalid: false});
                break;
            default:
                break;
        }
    };

    render() {
        const { classes } = this.props;
        return (
            <div className="page">
                <div className="language-selector">
                    <LangugageSelector/>
                </div>
                <div className="container">
                    <div className="signup-container">
                        <h1 className="form-title">icoWorld</h1>
                        <h3 className="form-text">Социальная сеть для криптоинвесторов, управляюших активами и ICO-проектов</h3>
                        <div className="signup-form">
                            <form>
                                <TextField name="email" label="Email" fullWidth margin="normal"
                                           value={this.state.email} onChange={this.handleChange}/>
                                <TextField name="password" type="password" fullWidth label="Пароль" margin="normal"
                                           value={this.state.password} onChange={this.handleChange}/>
                                <div className="form-links">
                                    <Link to="">Забыли пароль?</Link>
                                    <Link to="/signup">Регистрация</Link>
                                </div>
                                <Link to="/profile" className={classes.signInBtn}>
                                    <Button fullWidth variant="raised" color="primary">
                                        Войти
                                    </Button>
                                </Link>
                            </form>
                        </div>
                        <div className="form-footer">
                            <a href="#">Правила</a>
                            <a href="#">Помощь</a>
                            <a href="#">Контакты</a>
                        </div>
                    </div>
                </div>
                <div className="page-footer">
                    <h3 className="copyright">Copyright &copy; icoWorld 2018</h3>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(SignInPage);