import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { apolloReducer } from 'apollo-cache-redux';

import modules from '../client/src/modules';

export const storeReducer = combineReducers({
  router: routerReducer,
  apollo: apolloReducer,
  ...modules.reducers
});

const createReduxStore = (initialState, routerMiddleware) => {
  return createStore(
    storeReducer,
    initialState, // initial state
    routerMiddleware ? composeWithDevTools(applyMiddleware(routerMiddleware)) : undefined
  );
};

export default createReduxStore;
