import { useState } from "react";

const Begikai = () => {
  const [begikas1, setBegikas1] = useState("");
  const [begikas2, setBegikas2] = useState("");

  const handleBegiko1Change = (e) => {
    setBegikas1(e.target.value);
  };
  const handleBegiko2Change = (e) => {
    setBegikas2(e.target.value);
  };

  const kurisGreitesnis = () => {
    const laikas1 = parseFloat(begikas1);
    const laikas2 = parseFloat(begikas2);

    if (isNaN(laikas1) || isNaN(laikas2)) {
      return "iveskite abieju begiku laikus";
    }
    if (laikas1 === laikas2) {
      return "begiku laikai lygus";
    }

    const skirtumas = Math.abs(laikas1 - laikas2).toFixed(2);

    if (laikas1 < laikas2) {
      return `pirmas begikas buvo greitesnis uz antra per ${skirtumas} sekundciu`;
    } else {
      return `antras begikas buvo greitesnis uz pirma per ${skirtumas} sekundciu`;
    }
  };

  return (
    <div>
      <h2>Begikai</h2>
      <div>
        <label>pirmo begiko laikas</label>
        <input type="number" onChange={handleBegiko2Change} />
      </div>
      <div>
        <label>antro begiko laikas</label>
        <input type="number" onChange={handleBegiko1Change} />
      </div>

      <p>{kurisGreitesnis()}</p>
    </div>
  );
};

export default Begikai;
