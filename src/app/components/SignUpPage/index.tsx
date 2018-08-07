import React from 'react'
import styles from './style.css'
import SignUpForm from '../SignUpForm'
import {Link} from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'

export function SignUpPage() {
    return (
        <div>
          <Header/>
          <div className={styles['login-link']}>
            <p>Уже есть аккаунт в icoWorld? <Link to="/">Войти</Link></p>
          </div>
          <div className={styles.container}>
            <div className={styles.logo}>
              <img src="../../assets/img/earth.png"/>
              <h1 className={styles.title}>icoWorld</h1>
            </div>
            <SignUpForm/>
          </div>
          <Footer/>
        </div>
    )
}
