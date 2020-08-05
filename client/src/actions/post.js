import axios from 'axios';
import {
  CREATE_POST,
  DELETE_POST,
  CREATE_POST_ERROR,
  GET_POSTS,
  POST_ERROR,
} from './type';
const url = 'http://localhost:5000/api';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const createPost = (text) => async (dispatch) => {
  const body = JSON.stringify(text);

  try {
    const res = await axios.post(`${url}/posts/`, body, config);
    dispatch({
      type: CREATE_POST,
      payload: res.data,
    });
  } catch (error) {
    if (typeof error.response !== 'undefined') {
      const { data } = error.response;
      dispatch({
        type: CREATE_POST_ERROR,
        payload: data,
      });
    }
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${url}/posts/${id}`);
    dispatch({
      type: DELETE_POST,
      payload: res.data,
    });
  } catch (error) {
    if (typeof error.response !== 'undefined') {
      const { data } = error.response;
      dispatch({
        type: CREATE_POST_ERROR,
        payload: data,
      });
    }
  }
};

export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get(`${url}/posts`);
    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (error) {
    if (typeof error.response !== 'undefined') {
      const { data } = error.response;
      dispatch({
        type: POST_ERROR,
        payload: data,
      });
    }
  }
};
