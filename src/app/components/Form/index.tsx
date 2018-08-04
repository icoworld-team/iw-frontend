import React,{Component} from 'react';
import * as style from './style.scss';

export namespace SignInTextInput {
  export interface Props {
    email?: string;
    password?: string;
    // onSave: (email: string) => void;
  }

  export interface State {
    email: string;
    password: string;
  }
}

class Form extends Component<SignInTextInput.Props, SignInTextInput.State> {
  constructor(props: SignInTextInput.Props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  // handleUserInput = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   this.setState({[name]: value});
  // }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name;
    const value = event.target.value;
    // this.setState({ [name]: value });
    // this.setState({ email: event.target.value });
    console.log(name, value)
  }

  render() {
    return (
      <div className={style.signIn}>
        <form className={style.signIn__form} id="mail" method="post" action="">
          <div className={style.form__cont}>
            <div className={style.form__fields}>
              <input
                className={style.form__input}
                value={this.state.email}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={this.handleChange}
              />
              <input
                className={style.form__input}
                value={this.state.password}
                type="password"
                name="pass"
                id="pass"
                placeholder="Пароль"
                onChange={this.handleChange}
              />
            </div>
            <div className={style.form__buttons}>
              <button className={style.form__btnSubmit} type="submit">Войти</button>
              <a href="#" className={style.form__btnLink} type="submit">Забыли пароль?</a>
              <a href="#" className={style.form__btnLink} type="submit">Регистрация</a>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
      
export default Form;
