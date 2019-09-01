import store from '..'
import { INIT_BOTS_START, INIT_BOTS_DONE } from '../../constants/actionTypes'
import { FETCH_BOT_START, FETCH_BOT_DONE } from '../../constants/actionTypes'
import { HANDLE_ERROR } from '../../constants/actionTypes'
import EntitiesRepo from '../../EntitiesRepository'

const { dispatch } = store;

// Generic errors handling
if (window && typeof window.onerror !== undefined) {
  window.onerror = err => dispatch({ type: HANDLE_ERROR, payload: err })
}

//TODO see https://github.com/reactjs/redux/blob/master/examples/async/src/actions/index.js
// for a clean way to handle async loading or resources without duplicating calls

export const fetchEntitiesIfNeeded = () => {
  EntitiesRepo.getAll()
    .then(fetchEntitiesDone)
    .catch(handleError);
  return { type: INIT_BOTS_START };
}

export const fetchEntityIfNeeded = (botId) => {
  EntitiesRepo.get(botId)
    .then(fetchEntityDone)
    .catch(handleError);
  return { type: FETCH_BOT_START, payload: botId };
}

function fetchEntitiesDone(bots) {
  dispatch({ type: INIT_BOTS_DONE, payload: bots });
}

function fetchEntityDone(bot) {
  dispatch({ type: FETCH_BOT_DONE, payload: bot });
}

function handleError(err) {
  dispatch({ type: HANDLE_ERROR, payload: err });
}
