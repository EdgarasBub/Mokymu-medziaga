import React, { useState } from "react";

function Tikrinimai() {
  const [skaicius, setSkaicius] = useState(Math.floor(Math.random() * 100) + 1);
  // Generuoti naują skaičių
  const generuotiNauja = () => {
    setSkaicius(Math.floor(Math.random() * 100) + 1);
  };
  // Tikrina ar lyginis
  const tikrintiLyginis = () => {
    alert(
      `Skaičius ${skaicius} ${skaicius % 2 === 0 ? "yra" : "nėra"} lyginis`
    );
  };
  // Tikrina ar didesnis nei 30
  const tikrintiDidesnisU30 = () => {
    alert(
      `Skaičius ${skaicius} ${skaicius > 30 ? "didesnis" : "nedidesnis"} už 30`
    );
  };

  // Tikrina ar pirminis
  const tikrintiPirminis = () => {
    let arPirminis = true;
    if (skaicius <= 1) arPirminis = false;
    for (let i = 2; i <= Math.sqrt(skaicius); i++) {
      if (skaicius % i === 0) {
        arPirminis = false;
        break;
      }
    }
    alert(`Skaičius ${skaicius} ${arPirminis ? "yra" : "nėra"} pirminis`);
  };

  return (
    <div>
      <h2>Skaičiaus tikrinimai</h2>
      <p>Dabartinis skaičius: {skaicius}</p>

      <button onClick={generuotiNauja}>Generuoti naują skaičių</button>
      <button onClick={tikrintiLyginis}>Tikrinti ar lyginis</button>
      <button onClick={tikrintiDidesnisU30}>Tikrinti ar didesnis nei 30</button>
      <button onClick={tikrintiPirminis}>Tikrinti ar pirminis</button>
    </div>
  );
}

export default Tikrinimai;
