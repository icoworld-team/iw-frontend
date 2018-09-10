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
import InvestorsPage from './components/InvestorsPage'
import NewsPage from './components/NewsPage'
import Chat from './components/Chat'
import Contacts from './components/ContactsPage'
import PrivateRoute from './components/PrivateRoute'
import {store, history} from "./store";
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

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
                        <Route exact path="/" component={SignInPage}/>
                        <Route exact path="/signup" component={SignUpPage}/>
                        <PrivateRoute exact path="/profile" component={Profile}/>
                        <PrivateRoute exact path="/pools" component={PoolSearch}/>
                        <PrivateRoute exact path="/create-pool" component={PoolCreate}/>
                        <PrivateRoute exact path="/pool-info" component={PoolInfo}/>
                        <PrivateRoute exact path="/investors" component={InvestorsPage}/>
                        <PrivateRoute exact path="/news" component={NewsPage}/>
                        <PrivateRoute exact path="/messages" component={Chat}/>
                        <Route exact path="/contacts" component={Contacts}/>
                    </Switch>
                </ApolloProvider>
            </ConnectedRouter>
        </Provider>
    )
}