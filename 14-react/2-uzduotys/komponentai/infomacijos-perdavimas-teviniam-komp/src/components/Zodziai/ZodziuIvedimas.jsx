import React, { useRef } from "react";

const ZodziuIvedimas = (props) => {
  const inputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const inputValue = inputRef.current.value.trim();
    if (inputValue !== "") {
      props.pridetiZodi(inputValue);
      inputRef.current.value = ""; // Clear the input field after submission
    }
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
