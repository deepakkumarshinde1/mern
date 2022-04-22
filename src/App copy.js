import React, { useReducer, useState } from "react";

let counterReducer = (state, action) => {
  switch (action.type) {
    case "inc":
      let _count = state.count + 1;
      let _state = { ...state };
      _state.count = _count;
      _state.count2 = _count * 2;
      _state.count3 = _count * 3;
      return _state;

    default:
      console.log("default");
      return { ...state };
  }
};

let initCount = {
  count: 1,
  count2: 1,
  count3: 1,
};

function App() {
  let [counters, setCounters] = useReducer(counterReducer, initCount);
  let incCounter = () => {
    setCounters({ type: "inc" });
  };

  return (
    <>
      <button onClick={incCounter}>Click</button>
      <h1>{counters.count}</h1>
      <h1>{counters.count2}</h1>
      <h1>{counters.count3}</h1>
    </>
  );
}

export default App;
