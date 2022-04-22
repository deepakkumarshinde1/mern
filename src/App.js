import React, { useMemo, useCallback, useState } from "react";

/* 16.8 < class  */
/* 16.8 >= hooks  */
function App() {
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);

  let incCount = () => {
    setCount(count + 1);
  };
  let incCount1 = () => {
    setCount1(count1 + 1);
  };

  let isEven = useCallback(() => {
    for (let index = 0; index < 1000; index++) {
      console.log("this is math calculation");
    }

    if (count % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }, [count]);

  let isEven1 = useMemo(() => {
    for (let index = 0; index < 1000; index++) {
      console.log("this is math calculation");
    }
    if (count % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }, [count]);
  /*
    useState
    useEffect
    useReducer
    useRef
    useContext
  */
  return (
    <>
      <h1>{count}</h1>
      <h1>{isEven() ? "even" : "odd"}</h1>
      <button onClick={incCount}>INC</button>

      <h1>{count1}</h1>
      <button onClick={incCount1}>INC</button>
    </>
  );
}

export default App;
