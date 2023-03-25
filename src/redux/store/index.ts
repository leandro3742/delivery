import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

export type RootState = ReturnType<typeof rootReducer>;

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...[])),
);
export default store;