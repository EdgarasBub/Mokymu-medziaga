const CounterMygtukas = (props) => {
  const onButtonClick = (value) => {
    props.addValue(value);
    // console.log(value);
  };

  return (
    <div>
      <h3>mygtukai</h3>
      {/* <button onClick={() => onButtonClick(1)}>+1</button>
      <button onClick={() => onButtonClick(2)}>+2</button>
      <button onClick={() => onButtonClick(5)}>+5</button> */}

      {props.buttons.map((button, i) => {
        return (
          <button key={i} onClick={() => onButtonClick(button.value)}>
            {button.text}
          </button>
        );
      })}
    </div>
  );
};

export default CounterMygtukas;
