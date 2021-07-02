import clickReducer from "./click";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  click: clickReducer,
});

export default allReducers;
