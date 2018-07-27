const ADD = "ADD";

let initState = {
  num: 10,
  title: 'hello'
}
export function counter(state = initState, action) {
  switch (action.type) {
    case ADD:
      return { ...state, num: state.num + action.payload }
    default:
      return state;
  }
}

export function addCount() {
  return {
    type: ADD,
    payload: 3
  }
}