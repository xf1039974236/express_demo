import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers/index";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  //   store.runSagaTask = () => {
  //     store.sagaTask = sagaMiddleware.run(rootSaga);
  //   };

  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
}
export default configureStore;
