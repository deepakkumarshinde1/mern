let initCount = {
  count: 1,
  count2: 2,
  count3: 3,
  count4: 10,
};

export const CounterReducer = (state = initCount, action) => {
  switch (action.type) {
    case "inc":
      let _incCount = state.count + 1;
      let _incState = { ...state };
      _incState.count = _incCount;
      _incState.count2 = _incCount + 2;
      _incState.count3 = _incCount + 3;
      return { ...state, ..._incState };

    case "dec":
      let _decCount = state.count - 1;
      let _decState = { ...state };
      _decState.count = _decCount;
      _decState.count2 = _decCount - 2;
      _decState.count3 = _decCount - 3;
      return { ...state, ..._decState };

    default:
      console.log("default");
      return { ...state };
  }
};
