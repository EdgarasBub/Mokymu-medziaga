import { useState } from "react";
import useInput from "../hooks/useInput";

const Komp3 = () => {
  const nameInput = useInput("");
  const ageInput = useInput("");
  const [name, setName] = useState();
  const [age, setAge] = useState();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setName(nameInput.value);
    setAge(ageInput.value);
  };

  return (
    <>
      <h2>form input pvz</h2>

      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" {...nameInput} />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="number" id="number" {...ageInput} />
        </div>
        <button type="submit">submit</button>
        <p>mano vardas: {name}</p>
        <p>amzius: {age}</p>
      </form>
    </>
  );
};

export default Komp3;
