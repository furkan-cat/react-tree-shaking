import clickReducer from "./click";
import { combineReducers } from "redux";

// If you have more than one reducer, you may use combineReducers method to band them together.
const allReducers = combineReducers({
  click: clickReducer,
});

export default allReducers;
