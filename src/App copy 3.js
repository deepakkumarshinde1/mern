import { render } from "@testing-library/react";
import React, {
  useState,
  useEffect,
  useReducer,
  useRef,
  useContext,
  useLayoutEffect,
  useImperativeHandle,
  useMemo,
  useCallback,
  forwardRef,
} from "react";
import Button from "./components/Button";

/* 16.8 < class  */
/* 16.8 >= hooks  */
function App() {
  let button = useRef();

  useEffect(() => {
    console.log("effect");
  }); // load()

  useLayoutEffect(() => {
    console.log("layout");
  });
  /*
    useState
    useEffect
    useReducer
    useRef
    useContext
  */
  return (
    <>
      {console.log("render")}
      <button onClick={() => button.current.getData()}> Click</button>
      <Button ref={button} />
    </>
  );
}

export default App;
