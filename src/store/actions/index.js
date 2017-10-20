import store from '..'
import { INIT_BOTS_START, INIT_BOTS_DONE } from '../../constants/actionTypes'
import EntitiesRepo from '../../EntitiesRepository'

//TODO see https://github.com/reactjs/redux/blob/master/examples/async/src/actions/index.js
// for a clean way to handle async loading or resources without duplicating calls

export const fetchEntitiesIfNeeded = () => {
  EntitiesRepo.getAll()
    .then(fetchEntitiesDone)
    .catch(console.error);
  return { type: INIT_BOTS_START };
}

// const fetchPosts = reddit => dispatch => {
//   dispatch(requestPosts(reddit))
//   return fetch(`https://www.reddit.com/r/${reddit}.json`)
//     .then(response => response.json())
//     .then(json => dispatch(receivePosts(reddit, json)))
// }

function fetchEntitiesDone(bots) {
  store.dispatch({ type: INIT_BOTS_DONE, payload: bots });
}
