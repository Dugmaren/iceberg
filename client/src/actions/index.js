import axios from 'axios'; // used to make Ajax requests
import { LOGIN_GOOGLE, FETCH_USER } from './types';

export const loginGoogle = () => async dispatch => {
    const res = await axios.get('/auth/google');

    dispatch({ type: LOGIN_GOOGLE, payload: res.data });
}

// the path in the .get(PATH) refers to the server's
// routing.. /api/current_user == authRoutes in this case
// using thunk & promise to deal with the time it takes
// to find/authenticate a user
//
// "res" is what axios responds with, and it has headers and
// status and a bunch of other crap we don't care about, so
// we're going to respond with specifically ONLY res.data
export const fetchUser = () => {
    return function(dispatch) {
        axios
        .get('/api/current_user')
        .then(res => dispatch ({
            type: FETCH_USER,
            payload: res.data
        }))
    };
};


/*
Regular action creator immediately returns an action with
a payload. By using Redux Thunk, we can instead return a promise
and give direct access to the dispatch function

const fetchUser = () => {
    const request = axios.get('/api/current_user');

    return {
        type: FETCH_USER,
        payload: request
    };
}
*/