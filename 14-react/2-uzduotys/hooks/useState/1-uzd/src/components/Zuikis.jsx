import { useState } from "react";

const Zuikis = () => {
  let [arPersoko, setArPersoko] = useState(false);

  function persoktiAtsitiktinai() {
    const atsitiktineReiksme = Math.random() < 0.5;
    setArPersoko(atsitiktineReiksme);
  }

  const garantuotaiPersokti = () => {
    setArPersoko(true);
  };

  return (
    <div>
      <h2>Zuikis</h2>
      <p>Ar zuikis persoko griovi - {arPersoko ? "taip" : "ne"}</p>
      <button onClick={persoktiAtsitiktinai}>
        Bandyti persokti atsitiktibai
      </button>
      <button onClick={garantuotaiPersokti}> Garantuotai persokti </button>
    </div>
  );
};

export default Zuikis;
