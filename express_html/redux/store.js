import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

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

  //store.runSagaTask();
  return store;
}
export default configureStore;
