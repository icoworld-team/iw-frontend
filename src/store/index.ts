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
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(middleware),
);

export { history }
