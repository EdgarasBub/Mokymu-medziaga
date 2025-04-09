import React, { useRef } from "react";

const ZodziuIvedimas = (props) => {
  const inputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    props.pridetiZodi(inputRef.value);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" ref={inputRef} />
        <button type="submit"> add word</button>
      </form>
    </>
  );
};

export default ZodziuIvedimas;
