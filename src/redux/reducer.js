import { combineReducers } from 'redux';
import * as actions from './action';
import _ from 'lodash';

const counter = (state = 0, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return state + 1

    case actions.DECREMENT:
      return state - 1

    default:
      return state
  }
}

const todo = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_TEXT:
      return [...state, action.payload]

    case actions.DEL_TEXT:
      let tmpState = state.slice().filter(item => item.id !== action.payload.id)
      return tmpState

    case actions.UPDATE_TEXT:
      let han = state.slice().map(item => {
        if (item.id === action.payload.id) {
          item = action.payload
        }
        return item
      })
      return han

    default:
      return state
  }
}

const ads = (state = {}, action) => {
  switch (action.type) {
    case actions.GET_ADS:
      return [...state, ...action.payload]

    default:
      return state
  }
}

const status = (state = {}, action) => {
  switch (action.type) {
    case actions.AD_REQUEST:
      let request = _.cloneDeep(state)
      request.ads.isFetching = true
      return request

    case actions.AD_SUCCESS:
      let success = _.cloneDeep(state)
      success.ads.isFetching = false
      return success

    case actions.AD_FAILURE:
      let failure = _.cloneDeep(state)
      failure.ads.isFetching = true
      failure.ads.errMsg = action.errMsg
      return failure

    default:
      return state
  }
}


export const reducer = combineReducers({
  counter,
  todo,
  ads,
  status
})