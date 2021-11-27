import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk"
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducers from './reducers'
import "store/actions"


const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

// preloadedState will be passed in by the plugin
export default (preloadedState = {}) => {
  const store = createStore(
    persistedReducer,
    preloadedState, // initial state
    applyMiddleware(thunk)
  );
  const persistor = persistStore(store);
  return { store, persistor };
}
