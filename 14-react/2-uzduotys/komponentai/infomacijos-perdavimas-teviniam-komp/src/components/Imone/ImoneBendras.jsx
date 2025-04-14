import ImonesIvedimas from "./ImonesIvedimas";
import ImoneSarasas from "./ImonesSarasas";
import { useState } from "react";

const ImoneBendras = () => {
  const [imone, setImone] = useState([]);

  const pridetiImone = (naujaImone) => {
    setImone((prev) => [...prev, naujaImone]);
  };

  const isvalytiImone = () => {
    setImone([]);
  };

  return (
    <div>
      <h2>Imones Valdymo Menas</h2>

      <ImonesIvedimas onPridetiImone={pridetiImone} />

      {imone.length > 0 && (
        <button onClick={isvalytiImone}>Išvalyti viską</button>
      )}
    </div>
  );
};
export default ImoneBendras;
