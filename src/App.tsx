import React from 'react'
import { Switch } from "react-router";
import { Route } from 'react-router-dom'
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import {store, history} from "./store";
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import MainApp from './components/MainApp'
import SignInPage from './components/SignInPage'
import SignUpPage from './components/SignUpPage'
import Contacts from './components/ContactsPage'
import PasswordRecovery from './components/PasswordRecovery'
// import Profile from './components/Profile'
// import PoolSearch from './components/PoolSearch'
// import PoolCreate from './components/PoolCreate'
// import PoolInfo from './components/PoolInfo'
// import InvestorsPage from './components/InvestorsPage'
// import NewsPage from './components/NewsPage'
// import Chat from './components/Chat'
//
// import Settings from './components/ProfileSettings'
//
import PrivateRoute from './components/PrivateRoute'

import { InMemoryCache, defaultDataIdFromObject } from 'apollo-cache-inmemory';
const cache = new InMemoryCache({
    dataIdFromObject: object => {
        switch (object.__typename) {
            case 'PostEditResponse': return (object as any).postId;
            case 'Post': return (object as any).postId;
            default: return defaultDataIdFromObject(object);
        }
    }
});

const client = new ApolloClient({
    uri: "http://icoworld.projects.oktend.com:3000/graphql",
    cache
});

export default function App() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <ApolloProvider client={client}>
                    <Switch>
                        <Route path="/signin" component={SignInPage}/>
                        <Route path="/signup" component={SignUpPage}/>
                        <Route path="/contacts" component={Contacts}/>
                        <Route path="/password-recovery" component={PasswordRecovery}/>
                        <PrivateRoute path="/" component={MainApp}/>
                    </Switch>
                </ApolloProvider>
            </ConnectedRouter>
        </Provider>
    )
}