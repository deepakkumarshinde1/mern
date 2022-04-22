import { combineReducers } from "redux";
import { CounterReducer } from "./CounterReducer";

const reducer = combineReducers({
  counter: CounterReducer,
});

export default reducer;
