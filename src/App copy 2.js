import React, { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incDecCount } from "./redux/action/CounterAction";

function App() {
  let dispatch = useDispatch();
  let counters = useSelector((state) => state.counter);

  let incCounter = () => {
    // setCounters({ type: "inc" });
    dispatch(incDecCount("inc"));
  };

  let decCounter = () => {
    // setCounters({ type: "inc" });
    dispatch(incDecCount("dec"));
  };

  return (
    <>
      <button onClick={incCounter}>Inc</button>
      <button onClick={decCounter}>Dec</button>
      <h1>{counters.count}</h1>
      <h1>{counters.count2}</h1>
      <h1>{counters.count3}</h1>
    </>
  );
}

export default App;
