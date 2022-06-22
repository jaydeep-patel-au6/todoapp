import axios from "axios";
import {
  GET_JOKES_REQUEST,
  GET_JOKES_SUCCESS,
  GET_JOKES_FAIL,
} from "../constansts/jokeConstants";

export const jokeAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_JOKES_REQUEST });
    const { data } = await axios.get(
      "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10"
    );
    dispatch({ type: GET_JOKES_SUCCESS, payload: data?.jokes });
  } catch (error) {
    dispatch({
      type: GET_JOKES_FAIL,
      payload:
        error.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
