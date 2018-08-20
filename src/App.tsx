import React from 'react'
import { Switch } from "react-router";
import { Route } from 'react-router-dom'
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import SignInPage from './components/SignInPage'
import SignUpPage from './components/SignUpPage'
import Profile from './components/Profile'
import PoolSearch from './components/PoolSearch'
import PoolCreate from './components/PoolCreate'
import PoolInfo from './components/PoolInfo'
import {store, history} from "./store";


export default function App() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact path="/" component={SignInPage}/>
                    <Route exact path="/signup" component={SignUpPage}/>
                    <Route exact path="/profile" component={Profile}/>
                    <Route exact path="/pools" component={PoolSearch}/>
                    <Route exact path="/create-pool" component={PoolCreate}/>
                    <Route exact path="/pool-info" component={PoolInfo}/>
                </Switch>
            </ConnectedRouter>
        </Provider>
    )
}