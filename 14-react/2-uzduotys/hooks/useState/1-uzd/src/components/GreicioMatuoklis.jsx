import { useState } from "react";

const GreicioMatuoklis = () => {
  let [greitis, setGreitis] = useState(0);

  const keistiGreiti = (naujasGreitis) => {
    setGreitis(naujasGreitis);
  };

  const tikrinti = () => {
    switch (greitis) {
      case 0:
        return "Stovite";
      case 10:
        return "Vaziuojate letai";
      case 20:
        return "Vaziuojate letai";
      case 30:
        return "Opa pradedam vaziuoti";
      case 50:
        return "Opa pradedam vaziuoti";
      case 100:
        return "SKRENDAM";
      default:
        return "";
    }
  };

  return (
    <div>
      <h2>GreicioMatuoklis</h2>
      <p>{greitis}</p>
      <p>{tikrinti()}</p>
      <button onClick={() => keistiGreiti(0)}>0 km/h</button>
      <button onClick={() => keistiGreiti(10)}>10 km/h</button>
      <button onClick={() => keistiGreiti(20)}>20 km/h</button>
      <button onClick={() => keistiGreiti(30)}>30 km/h</button>
      <button onClick={() => keistiGreiti(50)}>50 km/h</button>
      <button onClick={() => keistiGreiti(100)}>100 km/h</button>
    </div>
  );
};

export default GreicioMatuoklis;
