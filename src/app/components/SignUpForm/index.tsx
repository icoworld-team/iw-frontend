import React, {Component} from 'react'
import styles from './style.css'

class SignUpForm extends Component {
  state = {
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
    checked: false,
    nameIsValid: false,
    surnameIsValid: false,
    emailIsValid: false,
    passwordIsValid: false,
    confirmPasswordIsValid: false
  };

  checkBoxStatus = () => {
    this.setState({
      checked: !this.state.checked
    });
  };

  handleChange =(e:any) => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.name+'IsValid']: false
    });
    //e.target.nextElementSibling.classList.toggle(styles.invisible);
    //e.target.parentNode.classList.toggle(styles.error);
    switch (e.target.name) {
      case 'name':
        if(e.target.value.length<2 || e.target.value.search(/[*/~“`]/)!==-1){
          e.target.parentNode.classList.add(styles.error);
          break;
        }
        e.target.parentNode.classList.remove(styles.error);
        this.setState({nameIsValid: true});
        break;
      case 'surname':
        if(e.target.value.length<2 || e.target.value.search(/[*/~“`]/)!==-1){
          e.target.parentNode.classList.add(styles.error);
          break;
        }
        e.target.parentNode.classList.remove(styles.error);
        this.setState({surnameIsValid: true});
        break;
      case 'email':
        let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(e.target.value.match(pattern) === null){
          e.target.parentNode.classList.add(styles.error);
          break;
        }
        e.target.parentNode.classList.remove(styles.error);
        this.setState({emailIsValid: true});
        break;
      case 'password':
        if(e.target.value.length<6 || e.target.value.search(/[*/~“`]/)!==-1){
          e.target.parentNode.classList.add(styles.error);
          break;
        }
        e.target.parentNode.classList.remove(styles.error);
        this.setState({passwordIsValid: true});
        break;
      case 'confirmPassword':
        if(e.target.value!==this.state.password){
          e.target.parentNode.classList.add(styles.error);
          break;
        }
        e.target.parentNode.classList.remove(styles.error);
        this.setState({confirmPasswordIsValid: true});
        break;
      default:
        break;
    }
  };

  render(){
    const errorMessages = {
      name: 'Имя должно быть не короче двух символов и не содержать *, /, ~, “',
      surname: 'Фамилия должна быть не короче двух символов и не содержать *, /, ~, “',
      email: 'Введите корректный адрес электронной почты',
      password: 'Минимальная длина пароля 6 символов. Запрещены символы *, /, ~, “',
      confirmPassword: 'Пароли должны совпадать'
    };
    let formValid = this.state.nameIsValid && this.state.surnameIsValid && this.state.emailIsValid
      && this.state.passwordIsValid && this.state.confirmPasswordIsValid && this.state.checked;
    const checkBoxText = "Я принимаю условия Пользовательского соглашения и даю свое согласие icoWorld на обработку " +
      "моей персональной информации на условиях, определенных Политикой конфиденциальности";
    return (
            <div className={styles['signup-container']}>
              <form className={styles['signup-form']}>
                <div>
                  <input name="name" value={this.state.name} required={true} type="text" placeholder="Имя" onChange={this.handleChange}/>
                  <p className={styles.invisible}>{errorMessages.name}</p>
                </div>
                <div>
                  <input name="surname" value={this.state.surname} required={true} type="text" placeholder="Фамилия" onChange={this.handleChange}/>
                  <p className={styles.invisible}>{errorMessages.surname}</p>
                </div>
                <div>
                  <input name="email" value={this.state.email} required={true} type="text" placeholder="Email" onChange={this.handleChange}/>
                  <p className={styles.invisible}>{errorMessages.email}</p>
                </div>
                <div>
                  <input name="password" value={this.state.password} required={true} type="password" placeholder="Пароль" onChange={this.handleChange}/>
                  <p className={styles.invisible}>{errorMessages.password}</p>
                </div>
                <div>
                  <input name="confirmPassword" value={this.state.confirmPassword} required={true} type="password" placeholder="Повторите пароль" onChange={this.handleChange}/>
                  <p className={styles.invisible}>{errorMessages.confirmPassword}</p>
                </div>
                <div>
                  <label className={styles.privacy}>
                  <input name="check" type="checkbox" onChange={this.checkBoxStatus}/>
                    <span>{checkBoxText}</span>
                  </label>
                </div>
                <div>
                  <input type="submit" value="Регистрация" disabled={!formValid}/>
                </div>
              </form>
            </div>
    )
  }
}

export default SignUpForm
