import {
  COUNTER_DECREMENT,
  COUNTER_INCREMENT
} from './actions'

const initialState = {
  count: 0
}

export const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case COUNTER_DECREMENT:
      return { count: state.count - 1 }
    case COUNTER_INCREMENT:
      return { count: state.count + 1 }
    default:
      return state
  }
}