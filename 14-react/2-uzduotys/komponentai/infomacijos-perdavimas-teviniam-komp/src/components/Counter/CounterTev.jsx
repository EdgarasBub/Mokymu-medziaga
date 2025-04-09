import { useState } from "react";
import CounterMygtukas from "./CounterMygtukai";

const CounterTev = () => {
  const [paspaudimai, setPaspaudimai] = useState(0);

  const counterButtons = [
    { value: 1, text: "+1" },
    { value: 2, text: "+2" },
    { value: 3, text: "+3" },
    { value: 4, text: "+4" },
    { value: 5, text: "+5" },
    { value: 9, text: "+9" },
    { value: 99, text: "+99" },
  ];

  const valueHandler = (value) => {
    setPaspaudimai(paspaudimai + value);
  };

  return (
    <div>
      <h2>CounterTev</h2>
      <p>{paspaudimai}</p>
      <CounterMygtukas addValue={valueHandler} buttons={counterButtons} />
    </div>
  );
};

export default CounterTev;
