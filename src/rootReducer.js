import {combineReducers} from 'redux';
import isLogged from './reducers/isLogged';
import suite from './reducers/suite';
import nav from './reducers/nav';
import alerts from './reducers/alerts';

const allReducers = combineReducers({isLogged, suite, nav, alerts});

export default allReducers;