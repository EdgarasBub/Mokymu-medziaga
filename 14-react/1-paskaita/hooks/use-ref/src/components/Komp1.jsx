import { useState, useRef } from "react";

const Komp1 = () => {
  const [salis, setSalis] = useState("");
  const salisInputRef = useRef();

  const onIvestiClick = () => {
    console.log(salisInputRef);
    console.log(salisInputRef.current.value);
    setSalis(salisInputRef.current.value);
  };

  return (
    <div>
      <h1>Komp1</h1>

      <h4>Megstamiausios salys</h4>
      <div>
        <label htmlFor="salis">Iveskite sali</label>
        <input ref={salisInputRef} type="text" id="salis" />
        <button onClick={onIvestiClick}>ivesti</button>
      </div>
      <p>Jus ivedet: {salis}</p>
    </div>
  );
};

export default Komp1;
