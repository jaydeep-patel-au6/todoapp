import {
  GET_JOKES_REQUEST,
  GET_JOKES_SUCCESS,
  GET_JOKES_FAIL,
} from "../constansts/jokeConstants";
export const jokeReducer = (state = { jokes: [] }, action) => {
  switch (action.type) {
    case GET_JOKES_REQUEST:
      return { loading: true, jokes: [] };

    case GET_JOKES_SUCCESS:
      return { loading: false, jokes: action.payload };

    case GET_JOKES_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
