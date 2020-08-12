import {
  GET_PROFILE,
  PROFILE_ERROR
} from '../actions/type';

const intialState = {
  profile: {},
  loading: true,
  error: null
};

export default function(state = intialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };

    case PROFILE_ERROR:
      return {
        ...state,
        loading: false,
        error: payload.errors
      };
    default:
      return state;
  }
}
