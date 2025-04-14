import React, { useState } from "react";
import KnygosIvedimas from "./KnygosIvedimas";
import KnyguSpausdinimas from "./KnyguSpausdinimas";

const KnyguBendras = () => {
  const [knygos, setKnygos] = useState([]);

  const pridetiKnyga = (naujaKnyga) => {
    setKnygos([...knygos, naujaKnyga]);
  };

  const isvalytiKnygas = () => {
    setKnygos([]);
  };

  return (
    <div>
      <h2>Knygų Valdymo Sistema</h2>

      <KnygosIvedimas onPridetiKnyga={pridetiKnyga} />

      {knygos.length > 0 && (
        <button onClick={isvalytiKnygas}>Išvalyti viską</button>
      )}

      <KnyguSpausdinimas knygos={knygos} />
    </div>
  );
};

export default KnyguBendras;
