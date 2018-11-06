import React from 'react'
import { Switch } from "react-router";
import { Route, Router } from 'react-router-dom'
import { history } from "./store";
import LandingPage from './components/LandingPage'
import OfferProtectionPage from './components/OfferProtectionPage'
import MarketMonopolyPage from './components/MarketMonopolyPage'
import PitchForInvestorsPage from './components/PitchForInvestorsPage'

export default function App() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" component={LandingPage}/>
                <Route path="/market-monopoly" component={MarketMonopolyPage}/>
                <Route path="/offer-protection" component={OfferProtectionPage}/>
                <Route path="/pitch" component={PitchForInvestorsPage}/>
            </Switch>
        </Router>
    )
}