import { combineReducers } from "redux";
import exampleReducer from "./example";
const masterReducer = combineReducers({
  exampleReducer
});

export default (state, action) =>
  action.type === "LOGOUT_SUCCESS"
    ? masterReducer(undefined, action)
    : masterReducer(state, action);
