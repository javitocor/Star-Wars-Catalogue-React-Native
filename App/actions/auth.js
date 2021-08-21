import {
  LOGIN, LOGOUT
} from '../constants/constants';
import authenticate from '../helpers/authenticate';

export const logIn = (user) => {
  return {
    type: LOGIN,
    payload: user
  };
};

export const authenticateUser = (user) => (dispatch) => {
  if (authenticate(user)){
    dispatch(logIn(user));
  } else {
    return false;
  }
};

export const logOut = () => {
  return {
    type: LOGOUT
  };
};