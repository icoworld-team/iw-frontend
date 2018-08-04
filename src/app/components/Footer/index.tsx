import React,{Component} from 'react';
import Link from '../Link';
import * as style from './style.scss';

class Footer extends Component{
  render() {
    return (
      <footer className={style.footer}>
        <div className={style.container}>
          <div className={style.footer__left}>
            <div className={style.logo}>
              <span className={style.logo__text}>icoWorld</span>
              <p className={style.logo__desc}>
                Социальная сеть для инвесторов, управляющих активами и проектов, которая обеспечивает честность деловых отношений
              </p>
            </div>
          </div>
          <div className={style.footer__center}>
            <ul className={style.links}>
              <li className={style.links__item}>
                <Link href="#" text="О компании" />
              </li>
              <li className={style.links__item}>
                <Link href="#" text="Команда" />
              </li>
              <li className={style.links__item}>
                <Link href="#" text="Контакты" />
              </li>
              <li className={style.links__item}>
                <Link href="#" text="Помощь" />
              </li>
              <li className={style.links__item}>
                <Link href="#" text="FAQ" />
              </li>
              <li className={style.links__item}>
                <Link href="#" text="Для прессы" />
              </li>
            </ul>
          </div>
          <div className={style.footer__right}>
            <Link href="#" text="Условия использования и политика конфеденциальности" />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
