import React, {Component} from 'react'
import {Link} from "react-router-dom";
import LangugageSelector from '../LanguageSelector/index'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CheckBox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import '../style.css'
import {handleErrors, fetchPost} from '../../api'

class SignUpPage extends Component {
    state = {
        name: '',
        surname: '',
        email: '',
        password: '',
        nameInvalid: undefined,
        surnameInvalid: undefined,
        emailInvalid: undefined,
        passwordInvalid: undefined,
        checked: false
    };

    checkBoxStatus = () => {
        this.setState({
            checked: !this.state.checked
        });
    };

    handleChange = (e:any)=> {
        this.setState({
            [e.target.name]: e.target.value
        });
        switch (e.target.name) {
            case 'name':
                if(e.target.value.length<2 || e.target.value.search(/[*/~“`]/)!==-1){
                    this.setState({nameInvalid: true});
                    break;
                }
                this.setState({nameInvalid: false});
                break;
            case 'surname':
                if(e.target.value.length<2 || e.target.value.search(/[*/~“`]/)!==-1){
                    this.setState({surnameInvalid: true});
                    break;
                }
                this.setState({surnameInvalid: false});
                break;
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

    handleClick =()=> {
        const url = 'http://icoworld.projects.oktend.com:3000/signup';
        const data = {
            firstName: this.state.name,
            lastName: this.state.surname,
            email: this.state.email,
            password: this.state.password
        };
        fetchPost(url, data)
            .then(response=>handleErrors(response))
            .then(response=>response.json())
            .then(json=>console.log(json))
            .catch(error=>console.log(error));
    };

    render() {
        const errorMessages = {
            name: 'Имя должно быть не короче двух символов и не содержать *, /, ~, “',
            surname: 'Фамилия должна быть не короче двух символов и не содержать *, /, ~, “',
            email: 'Введите корректный адрес электронной почты',
            password: 'Минимальная длина пароля 6 символов. Запрещены символы *, /, ~, “',
            confirmPassword: 'Пароли должны совпадать'
        };
        const checkBoxText = "Я принимаю условия Пользовательского соглашения и даю свое согласие icoWorld на обработку " +
            "моей персональной информации на условиях, определенных политикой конфиденциальности";
        let notEmpty = this.state.name && this.state.surname && this.state.email && this.state.password;
        let invalid = this.state.nameInvalid || this.state.surnameInvalid || this.state.emailInvalid
            || this.state.passwordInvalid;
        let disabled = !notEmpty || invalid || !this.state.checked;
        return (
            <div className="page">
                <div className="language-selector">
                    <LangugageSelector/>
                </div>
                <div className="container">
                    <div className="signup-container">
                        <h1 className="form-title">Регистрация</h1>
                        <div className="signup-form">
                            <form>
                                <TextField name="name" label="Имя" fullWidth margin="normal"
                                           helperText={errorMessages.name} FormHelperTextProps={{classes: {root: 'invisible', error: 'visible'}}}
                                           error={false || this.state.nameInvalid}
                                           value={this.state.name} onChange={this.handleChange}/>
                                <TextField name="surname" label="Фамилия" fullWidth margin="normal"
                                           helperText={errorMessages.surname} FormHelperTextProps={{classes: {root: 'invisible', error: 'visible'}}}
                                           error={false || this.state.surnameInvalid}
                                           value={this.state.surname} onChange={this.handleChange}/>
                                <TextField name="email" label="Email" fullWidth margin="normal"
                                           helperText={errorMessages.email} FormHelperTextProps={{classes: {root: 'invisible', error: 'visible'}}}
                                           error={false || this.state.emailInvalid}
                                           value={this.state.email} onChange={this.handleChange}/>
                                <TextField name="password" type="password" fullWidth label="Пароль" margin="normal"
                                           helperText={errorMessages.password} FormHelperTextProps={{classes: {root: 'invisible', error: 'visible'}}}
                                           error={false || this.state.passwordInvalid}
                                           value={this.state.password} onChange={this.handleChange}/>
                                <div className="form-links">
                                    <Link to="/">Уже есть аккаунт?</Link>
                                </div>

                                <Button fullWidth variant="raised" color="primary" disabled={disabled} onClick={this.handleClick}>
                                    Регистрация
                                </Button>
                                <FormControlLabel classes={{root: 'policy'}} control={
                                    <CheckBox onChange={this.checkBoxStatus} color="primary"/>
                                } label={checkBoxText}/>
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

export default SignUpPage