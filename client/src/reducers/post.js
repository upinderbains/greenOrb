import {
  CREATE_POST,
  DELETE_POST,
  CREATE_POST_ERROR,
  GET_POSTS,
  GET_POST,
  POST_ERROR,
  UPDATE_LIKES
} from '../actions/type';

const intialState = {
  posts: [],
  post: {},
  comments: [],
  loading: true,
  error: null
};

export default function(state = intialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false
      };
    case GET_POST:
      return {
        ...state,
        post: payload.post,
        comments: payload.posts,
        loading: false
      };
    case CREATE_POST:
      return {
        ...state,
        post: payload,
        loading: false
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== payload),
        loading: false
      };
    case CREATE_POST_ERROR:
    case POST_ERROR:
      return {
        ...state,
        loading: false,
        error: payload.errors
      };
    case UPDATE_LIKES:
      return {
        ...state,
        posts: state.posts.map(post =>
          post._id === payload.postId ? { ...post, likes: payload.likes } : post
        ),
        loading: false
      };
    default:
      return state;
  }
}
