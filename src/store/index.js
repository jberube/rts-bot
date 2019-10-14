import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';

import reducers from './reducers';

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middlewares = [routerMiddleware(history)];

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
export default createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  composeWithDevTools(applyMiddleware(...middlewares))
);

// Now you can dispatch navigation actions from anywhere!
// import { push } from 'react-router-redux'
// store.dispatch(push('/foo'))
