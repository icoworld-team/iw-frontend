import React,{Component} from 'react';
import * as style from './style.scss';
import Socials from '../Socials';

class Header extends Component{
  render() {
    return (
      <header className={style.header}>
        <div className={style.container}>
          <div className={style.header__left}>
            <Socials />
          </div>
          <div className={style.header__right}>
            <span className={style.header__langBtn}>
              Ru
            </span>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
