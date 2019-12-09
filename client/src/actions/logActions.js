import {
  GET_LOGS,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SEARCH_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT
} from './types';

import axios from 'axios';

export const getLogs = () => async dispatch => {
  try {
    setLoading();

    const res = await axios.get('/api/logs');

    dispatch({ type: GET_LOGS, payload: res.data });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.data.message });
  }
};

export const addLog = log => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/api/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const deleteLog = id => async dispatch => {
  try {
    setLoading();

    await fetch(`/api/logs/${id}`, {
      method: 'DELETE'
    });

    dispatch({
      type: DELETE_LOG,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const updateLog = log => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    setLoading();

    const res = await axios.put(`/api/logs/${log._id}`, log, config);

    dispatch({ type: UPDATE_LOG, payload: res.data });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.data.message });
  }
};

export const searchLogs = text => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/api/logs?q=${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log
  };
};

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
