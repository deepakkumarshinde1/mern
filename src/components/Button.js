import React, { forwardRef, useRef, useImperativeHandle } from "react";

let Button = forwardRef((props, ref) => {
  let input = useRef();
  useImperativeHandle(ref, () => {
    return {
      getData: () => {
        input.current.style.backgroundColor = "red";
      },
    };
  });

  return (
    <div>
      <input type="text" ref={input} />
    </div>
  );
});

export default Button;
