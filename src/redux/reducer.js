import * as actions from './action';

export const counter = (state = 0, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return state + 1

    case actions.DECREMENT:
      return state - 1

    default:
      return state
  }
}