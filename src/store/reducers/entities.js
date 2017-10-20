import { INIT_BOTS_START, INIT_BOTS_DONE } from '../../constants/actionTypes'

const initialState = [];

export default function entities(state = initialState, action) {
  switch (action.type) {
    case INIT_BOTS_START:
      console.log('Loading entities...');
      return state;
    case INIT_BOTS_DONE:
      console.log('...done loading entities', action.payload);

      return state.concat(action.payload);

    // case DELETE_TODO:
    //   return state.filter(todo =>
    //     todo.id !== action.id
    //   )

    // case EDIT_TODO:
    //   return state.map(todo =>
    //     todo.id === action.id ?
    //       { ...todo, text: action.text } :
    //       todo
    //   )

    // case COMPLETE_TODO:
    //   return state.map(todo =>
    //     todo.id === action.id ?
    //       { ...todo, completed: !todo.completed } :
    //       todo
    //   )

    // case COMPLETE_ALL:
    //   const areAllMarked = state.every(todo => todo.completed)
    //   return state.map(todo => ({
    //     ...todo,
    //     completed: !areAllMarked
    //   }))

    // case CLEAR_COMPLETED:
    //   return state.filter(todo => todo.completed === false)

    default:
      return state
  }
}