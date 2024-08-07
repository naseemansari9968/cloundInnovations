// action.js
import axios from "axios";
import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
} from "./actionTypes";

const BASE_URL = `https://cloud-innovation-be-ojoi.onrender.com`;
// Adjust the base URL as necessary

export const fetchMovies =
  (filterParams = {}) =>
  (dispatch) => {
    dispatch({ type: FETCH_MOVIES_REQUEST });

    // Construct the query string based on the filterParams
    const queryParams = new URLSearchParams(filterParams).toString();

    axios
      .get(`${BASE_URL}/movies?${queryParams}`)
      .then((response) => {
        dispatch({ type: FETCH_MOVIES_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_MOVIES_FAILURE });
        console.error("Error fetching movies:", error);
      });
  };
