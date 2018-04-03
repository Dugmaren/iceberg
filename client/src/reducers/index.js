import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer,
    login: loginReducer
});