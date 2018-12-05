import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { auth } from './auth';
import { chat } from './chat';
import { investorsFilter } from './investorsFilter';
import { scroll } from './scroll';

const rootReducer = combineReducers({
    auth: auth,
    investorsFilter: investorsFilter,
    chat: chat,
    scroll: scroll,
    router: routerReducer
});

export default rootReducer;
