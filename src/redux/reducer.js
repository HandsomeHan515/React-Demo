import { combineReducers } from 'redux';
import * as actions from './action';

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

let todoInitial = [
  { id: 1, name: '看parcel文档', status: 0 },
  { id: 2, name: 'webpack搭建react', status: 1 }
]

const todo = (state = todoInitial, action) => {
  switch (action.type) {
    case actions.ADD_TEXT:
      return [state, action.payload]

    case actions.DEL_TEXT:
      let tmpState = state.slice()
      return tmpState.filter(item => item.id === !action.payload.id)

    default:
      return state
  }
}

export const reducer = combineReducers({
  counter,
  todo
})