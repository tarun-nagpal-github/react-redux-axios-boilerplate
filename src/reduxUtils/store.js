import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// import exampleReducer from "./reducers/example";

// const mainReducer = combineReducers({
//   example: exampleReducer
// });

// Saga 
import rootSaga from "../reduxUtils/sagas/index";

// Reducer 
import masterReducer from "./reducers/masterReducer";

// const store = createStore(
//   mainReducer,
//   compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
// );

const numberPersistConfig = {
  key: "persistedStore",
  version: 1,
  storage
};

let options = {
  name: `Redux`,
  realtime: true,
  trace: true,
  traceLimit: 25
}

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = composeWithDevTools(options);

const persistedReducer = persistReducer(numberPersistConfig, masterReducer);

const store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(sagaMiddleware, logger))
);


sagaMiddleware.run(rootSaga);


export default store;
