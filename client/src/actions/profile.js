import { GET_PROFILE, PROFILE_ERROR } from './type';

import axios from 'axios';
const config = {
  headers: {
    'Content-Type': 'application/json'
  }
};
const url = 'http://localhost:5000/api/profile';

export const createProfile = ({ name, bio, location }) => async dispatch => {
  const body = JSON.stringify({ name, bio, location });
  try {
    const res = await axios.post(`${url}`, body, config);
    const { data } = res;

    dispatch({
      type: GET_PROFILE,
      payload: data
    });
  } catch (error) {
    if (typeof error.response !== 'undefined') {
      const { data } = error.response;
      dispatch({
        type: PROFILE_ERROR,
        payload: data
      });
    }
  }
};

export const getProfile = id => async dispatch => {
  try {
    const res = await axios.get(`${url}/user/${id}`);
    const { data } = res;
    console.log(data);
    dispatch({
      type: GET_PROFILE,
      payload: data
    });
  } catch (error) {
    if (typeof error.response !== 'undefined') {
      const { data } = error.response;
      dispatch({
        type: PROFILE_ERROR,
        payload: data
      });
    }
  }
};
