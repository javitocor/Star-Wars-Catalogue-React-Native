import {
  initialStateAuth, LOGIN, LOGOUT
} from '../constants/constants';



const authReducer = (state = initialStateAuth, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, loggedIn: true, user: action.payload };
    case LOGOUT:
      return { ...state, loggedIn: false, user: null };
    default:
      return state;
  }
};

export default authReducer;