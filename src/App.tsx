import React from 'react'
import { Switch } from "react-router";
import { Route, Router } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import OfferProtectionPage from './components/OfferProtectionPage'
import MarketMonopolyPage from './components/MarketMonopolyPage'
import PitchForInvestorsPage from './components/PitchForInvestorsPage'
import createHistory from "history/createBrowserHistory";

const history = createHistory();

export default function App() {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/market-monopoly" component={MarketMonopolyPage}/>
                <Route exact path="/offer-protection" component={OfferProtectionPage}/>
                <Route exact path="/pitch" component={PitchForInvestorsPage}/>
            </Switch>
        </Router>
    )
}