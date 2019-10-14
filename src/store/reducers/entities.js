import { INIT_BOTS_START, INIT_BOTS_DONE } from '../../constants/actionTypes';
import { FETCH_BOT_START, FETCH_BOT_DONE } from '../../constants/actionTypes';

const initialState = [];

export default function entities(state = initialState, action) {
  switch (action.type) {
    case INIT_BOTS_START:
      console.log('Loading entities...');
      return state;

    case INIT_BOTS_DONE:
      console.log('...done loading entities', action.payload);
      return action.payload;

    case FETCH_BOT_START:
      console.log(`Loading entity ${action.payload}...`);
      return state;

    case FETCH_BOT_DONE:
      console.log(`...done loading entity ${action.payload.id}`);
      const botIndex = state.findIndex(bot => bot.id === action.payload.id);
      return botIndex === -1
        ? state.concat(action.payload)
        : state.map(bot =>
            bot.id === action.payload.id ? action.payload : bot
          );

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
      return state;
  }
}
