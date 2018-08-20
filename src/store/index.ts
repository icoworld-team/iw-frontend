import { createStore, combineReducers, applyMiddleware } from "redux";
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from "history/createBrowserHistory";
import {auth} from '../reducers'

const history = createHistory();
const middleware = routerMiddleware(history);

export const store = createStore(combineReducers({
    auth: auth,
    router: routerReducer
}),
    applyMiddleware(middleware)
);

export { history }
