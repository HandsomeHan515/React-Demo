export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const ADD_TEXT = 'ADD_TEXT';
export const DEL_TEXT = 'DEL_TEXT';
export const UPDATE_TEXT = 'UPDATE_TEXT';

export const increment = payload => ({
  type: INCREMENT,
  payload
})

export const decrement = payload => ({
  type: DECREMENT,
  payload
})

export const addText = payload => ({
  type: ADD_TEXT,
  payload
})

export const delText = payload => ({
  type: DEL_TEXT,
  payload
})

export const updateText = payload => ({
  type: UPDATE_TEXT,
  payload
})

export const AD = 'AD';
export const GET_ADS = 'GET_ADS';
export const AD_REQUEST = 'AD_REQUEST';
export const AD_SUCCESS = 'AD_SUCCESS';
export const AD_FAILURE = 'AD_FAILURE';

export const ad = () => ({ type: AD });

export const getAds = payload => ({
  type: GET_ADS,
  payload
})
