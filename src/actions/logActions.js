import { GET_LOGS, ADD_LOG, DELETE_LOG, SET_LOADING, LOGS_ERROR } from './types'

export const getLogs = () => async dispatch => {
  try {
    setLoading()

    const res = await fetch('/logs')
    const data = await res.json()

    dispatch({
      type: GET_LOGS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    })
  }
}

export const addLog = log => async dispatch => {
  try {
    setLoading()

    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()

    dispatch({
      type: ADD_LOG,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    })
  }
}

export const deleteLogs = id => async dispatch => {
  try {
    setLoading()

    await fetch(`/logs/${id}`, {
      method: 'DELETE'
    })

    dispatch({
      type: DELETE_LOG,
      payload: id
    })
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    })
  }
}

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}
