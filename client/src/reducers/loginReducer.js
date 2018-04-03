import { LOGIN_GOOGLE } from '../actions/types';

export default function(state = {}, action) {
    console.log("client/src/reducers/loginReducer - " + action);
    switch(action.type) {
        case LOGIN_GOOGLE:
            return action.payload || false;
        default:
            return state;
    }
}