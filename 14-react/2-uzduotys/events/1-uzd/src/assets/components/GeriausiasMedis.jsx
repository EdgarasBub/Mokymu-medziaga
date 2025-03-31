const GeriausiasMedis = () => {
  const ivertintiMedi = (medis) => {
    const vertinimai = {
      Uosis: "Oho, koks rimtas medis!",
      Ąžuolas: "Labai mielas raštas!",
      Beržas: "Švarus ir švelnus medis!",
      default: `Įdomus pasirinkimas: ${medis}`,
    };

    alert(vertinimai[medis] || vertinimai.default);
  };

  return (
    <div>
      <h2>Geriausias Medis</h2>

      <button onClick={() => ivertintiMedi("Uosis")}>Uosis</button>
      <button onClick={() => ivertintiMedi("Ąžuolas")}>Ąžuolas</button>
      <button onClick={() => ivertintiMedi("Beržas")}>Beržas</button>
    </div>
  );
};

export default GeriausiasMedis;
