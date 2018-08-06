import * as React from 'react';
import { Route, Switch } from 'react-router';
import { hot } from 'react-hot-loader';
import Main from 'app/containers/Main';
import {SignUpPage} from 'app/components/SignUpPage'

export const App = hot(module)(() => (
  <Switch>
    <Route path="/" component={Main} />
    <Route path="/signup" component={SignUpPage} />
  </Switch>
));
