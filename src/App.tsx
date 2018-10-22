import React from 'react'
import { Switch } from "react-router";
import { Route } from 'react-router-dom'
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import {store, history} from "./store";
// import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import MainApp from './components/MainApp'
import LandingPage from './components/LandingPage'
import MarketMonopolyPage from './components/MarketMonopolyPage'
import PitchForInvestorsPage from './components/PitchForInvestorsPage'
import SignInPage from './components/SignInPage'
import SignUpPage from './components/SignUpPage'
import Contacts from './components/ContactsPage'
import PasswordRecovery from './components/PasswordRecovery'
import PrivateRoute from './components/PrivateRoute'
import {endpoint} from "./api";
import { ApolloClient } from 'apollo-client'
// import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'
import { createUploadLink } from 'apollo-upload-client'
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
    link: ApolloLink.from([
        onError(({graphQLErrors, networkError}) => {
            if (graphQLErrors)
                graphQLErrors.map(({message, locations, path}) =>
                    console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
            if (networkError) console.log(`[Network error]: ${networkError}`);
        }),
        // new HttpLink({
        //     uri: `${endpoint}/graphql`
        // }),
        createUploadLink({
            uri: `${endpoint}/graphql`,
            credentials: 'include'
        })
    ]),
    cache: cache
});

// const client = new ApolloClient({
//     uri: "http://icoworld.projects.oktend.com:3000/graphql",
//     cache
// });

export default function App() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <ApolloProvider client={client}>
                    <Switch>
                        <Route path="/landing" component={LandingPage}/>
                        <Route path="/market-monopoly" component={MarketMonopolyPage}/>
                        <Route path="/pitch" component={PitchForInvestorsPage}/>
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