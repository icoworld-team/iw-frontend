import React from 'react'
import {Switch} from "react-router";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SignInPage from './components/SignInPage'
import SignUpPage from './components/SignUpPage'
import Profile from './components/Profile'
import PoolSearch from './components/PoolSearch'
import PoolCreate from './components/PoolCreate'
import PoolInfo from './components/PoolInfo'

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={SignInPage}/>
                <Route exact path="/signup" component={SignUpPage}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/pools" component={PoolSearch}/>
                <Route exact path="/create-pool" component={PoolCreate}/>
                <Route exact path="/pool-info" component={PoolInfo}/>
            </Switch>
        </Router>
    )
}