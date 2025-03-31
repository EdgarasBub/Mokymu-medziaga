import React, { useState } from "react";

function Sansas() {
  const [skaicius, setSkaicius] = useState(null);

  const generuotiSkaiciu = () => {
    const naujasSkaicius = Math.floor(Math.random() * 10) + 1;
    setSkaicius(naujasSkaicius);
    return naujasSkaicius;
  };

  const tikrintiSkaiciu = () => {
    const dabartinisSkaicius = skaicius || generuotiSkaiciu();

    if (dabartinisSkaicius >= 5) {
      alert(`Laimėjote! Jūsų skaičius: ${dabartinisSkaicius}`);
    } else {
      alert(`Pralaimėjote... Jūsų skaičius: ${dabartinisSkaicius}`);
    }
  };

  return (
    <div>
      <h2>Laimėjimo šansas</h2>

      {skaicius && <p>Sugeneruotas skaičius: {skaicius}</p>}

      <button onClick={tikrintiSkaiciu}>Tikrinti skaičių</button>

      <button onClick={generuotiSkaiciu}>Generuoti naują</button>
    </div>
  );
}

export default Sansas;
