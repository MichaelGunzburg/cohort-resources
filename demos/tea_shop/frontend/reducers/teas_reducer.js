import { RECEIVE_TEA } from '../actions/tea_actions'

const teasReducer = (state = {}, action) => {
  Object.freeze(state); // pure function, don't mutate state!!
  const nextState = Object.assign({}, state) // create copy of state

  switch (action.type) {
    case RECEIVE_TEA:
      nextState[action.tea.id] = action.tea;
      return nextState;
    default:
      return state;
  }
}

export default teasReducer;

/*
State Shape:
1: {
  flavor: 'green',
  amount: 2.75
  id: 1
},
2: {
  ...
},
3: {
  ...
}
*/