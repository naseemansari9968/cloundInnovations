import axios from 'axios';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';

export const login = (email, password) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  axios.post('https://reqres.in/api/login', { email, password })
    .then(response => {
      dispatch({ type: LOGIN_SUCCESS, payload: response.data.token });
    })
    .catch(error => {
      dispatch({ type: LOGIN_FAILURE });
      console.error('Login error:', error);
    });
};
