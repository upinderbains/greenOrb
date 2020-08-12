import { combineReducers } from 'redux';
import auth from './auth';
import post from './post';
import userProfile from './profile'

export default combineReducers({
  auth,
  post,
  userProfile
});
