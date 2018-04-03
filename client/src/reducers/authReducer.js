import {FETCH_USER} from '../actions/types';

export default function(state = null, action) {
  console.log("client/src/reducers/authReducer - " + action);
  switch (action.type) {
    case FETCH_USER:
      // at this point, it's returned
      return action.payload || false; // remember this came from axios (req.data)
    default:
      return state;
  }
}