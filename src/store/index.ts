import { createStore, combineReducers, applyMiddleware } from "redux";
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from "history/createBrowserHistory";
import { auth, investorsFilter, chat } from '../reducers'

const history = createHistory();
const middleware = routerMiddleware(history);

export const store = createStore(combineReducers({
    auth: auth,
    investorsFilter: investorsFilter,
    chat: chat,
    router: routerReducer
}),
    applyMiddleware(middleware),
);

export { history }
