import React from 'react'
import {Switch} from "react-router";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SignInPage from './components/SignInPage'
import SignUpPage from './components/SignUpPage'
import Profile from './components/Profile'

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={SignInPage}/>
                <Route exact path="/signup" component={SignUpPage}/>
                <Route exact path="/profile" component={Profile}/>
            </Switch>
        </Router>
    )
}