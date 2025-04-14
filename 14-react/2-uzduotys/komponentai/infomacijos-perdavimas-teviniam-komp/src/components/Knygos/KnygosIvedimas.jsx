import React, { useRef } from "react";

const KnygosIvedimas = ({ onPridetiKnyga }) => {
  const pavadinimasRef = useRef(null);
  const kainaRef = useRef(null);
  const metaiRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const naujaKnyga = {
      pavadinimas: pavadinimasRef.current.value.trim(),
      kaina: parseFloat(kainaRef.current.value),
      metai: parseInt(metaiRef.current.value),
    };

    if (
      !naujaKnyga.pavadinimas ||
      isNaN(naujaKnyga.kaina) ||
      isNaN(naujaKnyga.metai)
    ) {
      return;
    }

    onPridetiKnyga(naujaKnyga);

    // Išvalome laukus
    pavadinimasRef.current.value = "";
    kainaRef.current.value = "";
    metaiRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Pavadinimas:</label>
        <input type="text" ref={pavadinimasRef} required />
      </div>
      <div>
        <label>Kaina:</label>
        <input type="number" step="0.01" ref={kainaRef} required />
      </div>
      <div>
        <label>Metai:</label>
        <input type="number" ref={metaiRef} required />
      </div>
      <button type="submit">Pridėti knygą</button>
    </form>
  );
};

export default KnygosIvedimas;
