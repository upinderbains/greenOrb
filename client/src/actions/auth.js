import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  USER_LOADED,
  AUTH_ERROR
} from './type';

import axios from 'axios';

const url = 'http://localhost:5000/api';
const config = {
  headers: {
    'Content-Type': 'application/json'
  }
};

export const registerUser = ({
  username,
  email,
  password
}) => async dispatch => {
  const body = JSON.stringify({ username, email, password });
  try {
    const res = await axios.post(url + `/users/signup`, body, config);
    const { data } = res;
    dispatch({
      type: REGISTER_SUCCESS,
      payload: data
    });
    dispatch(loadUser());
  } catch (error) {
    if (typeof error.response !== 'undefined') {
      const { data } = error.response;
      dispatch({
        type: REGISTER_FAIL,
        payload: data
      });
    }
  }
};

export const loginUser = ({ username, password }) => async dispatch => {
  const body = JSON.stringify({ username, password });
  try {
    const res = await axios.post(url + '/auth/login', body, config);
    const { data } = res;
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data
    });
  } catch (error) {
    if (typeof error.response !== 'undefined') {
      const { data } = error.response;
      dispatch({
        type: LOGIN_FAIL,
        payload: data
      });
    }
  }
};

export const loadUser = () => async dispatch => {
  let token = localStorage.token;
  if (token !== undefined || null) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }

  try {
    const res = await axios.get(url + '/auth');
    const { data } = res;
    dispatch({
      type: USER_LOADED,
      payload: data
    });
  } catch (error) {
    if (typeof error.response !== 'undefined') {
      const { data } = error.response;
      dispatch({
        type: AUTH_ERROR,
        payload: data
      });
    }
  }
};
