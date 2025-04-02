import { useState } from "react";

const Zodis = () => {
  let [Zodis, setZodis] = useState(" ");

  const pasirinkimoHandler = (event) => {
    let pasirinktaReiksme = event.target.innerText;

    setZodis(pasirinktaReiksme);
  };

  const pakeisti = () => {
    switch (Zodis) {
      case "Hola":
        return "Pomidorcikas";
      case "Hola2":
        return "Agurkas";
      default:
        return "Nepasirinkta";
    }
  };

  return (
    <div>
      <h2>Zodis</h2>
      <p>dabartine zodis:{Zodis}</p>
      <button onClick={pasirinkimoHandler}>Pomidoras</button>
      <button onClick={pasirinkimoHandler}>Agurkas</button>
      <p>{pakeisti()}</p>
    </div>
  );
};

export default Zodis;
