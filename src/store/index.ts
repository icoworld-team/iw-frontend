import { createStore, combineReducers, applyMiddleware } from "redux";
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from "history/createBrowserHistory";
import { auth, investorsFilter, chat, scroll } from '../reducers'

const history = createHistory();
const middleware = routerMiddleware(history);

export const store = createStore(combineReducers({
    auth: auth,
    investorsFilter: investorsFilter,
    chat: chat,
    scroll: scroll,
    router: routerReducer
}),
    applyMiddleware(middleware),
);

export { history }
