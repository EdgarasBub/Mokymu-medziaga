import { Children } from "react";
import { useState } from "react";

const Card = ({ title, Children }) => {
const [counter, setCounter] = useState(10);

  return (
    <div className="card">
      <h2 onClick={()=>{setCounter(counter-1)}}>{title}</h2>
      <h3>{counter}</h3>
      <button onClick={()=>{setCounter(counter+1)}}>Padidinti</button>
      <p>{Children}</p>
    </div>
  );
}

export default Card;