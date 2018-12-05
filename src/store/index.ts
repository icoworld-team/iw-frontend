import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from 'react-router-redux'
import createHistory from "history/createBrowserHistory";
import rootReducer from "../reducers";

const history = createHistory();
const middleware = routerMiddleware(history);

export const store = createStore(rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(middleware),
);

export { history }
