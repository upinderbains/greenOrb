import {
  CREATE_POST,
  DELETE_POST,
  CREATE_POST_ERROR,
  GET_POSTS,
  POST_ERROR,
} from '../actions/type';

const intialState = {
  posts: [],
  post: null,
  loading: true,
  error: null,
};

export default function (state = intialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    case CREATE_POST:
      return {
        ...state,
        post: payload,
        loading: false,
      };
    case DELETE_POST:
      console.log(payload);
      return {
        ...state,
        loading: false,
      };
    case CREATE_POST_ERROR:
    case POST_ERROR:
      return {
        ...state,
        loading: false,
        error: payload.errors,
      };
    default:
      return state;
  }
}
