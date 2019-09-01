import { HANDLE_ERROR } from '../../constants/actionTypes'

export default function errors(state = [], action) {
  switch (action.type) {
    case HANDLE_ERROR:
      console.log(HANDLE_ERROR, action.payload);
      return state.concat(action.payload);
    default:
      return state;
  }
}
