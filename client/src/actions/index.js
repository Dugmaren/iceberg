import axios from 'axios';
import { LOGIN_GOOGLE } from './types';

export const loginGoogle = () => async dispatch => {
    const res = await axios.get('/auth/google');

    dispatch({ type: LOGIN_GOOGLE, payload: res.data });
}