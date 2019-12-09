import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR
} from './types';

import axios from 'axios';

export const getTechs = () => async dispatch => {
  try {
    const res = await axios.get('/api/techs');

    dispatch({ type: GET_TECHS, payload: res.data });
  } catch (err) {
    dispatch({ type: TECHS_ERROR, payload: err.response.data.message });
  }
};

export const addTech = tech => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/techs', tech, config);

    dispatch({ type: ADD_TECH, payload: res.data });
  } catch (err) {
    dispatch({ type: TECHS_ERROR, payload: err.response.data.message });
  }
};

export const deleteTech = id => async dispatch => {
  try {
    await axios.delete(`/api/techs/${id}`);

    dispatch({ type: DELETE_TECH, payload: id });
  } catch (err) {
    dispatch({ type: TECHS_ERROR, payload: err.response.data.message });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
