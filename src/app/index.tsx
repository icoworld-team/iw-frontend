import * as React from 'react';
import { Route, Switch } from 'react-router';
import { hot } from 'react-hot-loader';
import Main from 'app/containers/Main';
import {SignUpPage} from 'app/components/SignUpPage'

export const App = hot(module)(() => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/signup" component={SignUpPage} />
  </Switch>
));
