import React from 'react';

const Darbuotojas = () => {
  // 1. Objekto sukūrimas su darbuotojo informacija
  const darbuotojas = {
    vardas: "Jonas Petraitis",
    profesija: "Programuotojas",
    atlyginimas: 2000, // Eur
    etatas: 0.8, // 0.8 = 80% etato
    darboStazas: 6 // metai
  };

  // 3. Funkcija bendros uždirbtos sumos skaičiavimui
  const bendraUzdirbtaSuma = (darbuotojas) => {
    const faktinisAtlyginimas = darbuotojas.atlyginimas * darbuotojas.etatas;
    const bendraSuma = darbuotojas.darboStazas * 12 * faktinisAtlyginimas;
    return bendraSuma;
  };

  // 4. Funkcija ilgametis darbuotojas
  const ilgametisDarbuotojas = (darbuotojas) => {
    return darbuotojas.darboStazas >= 5 ? "ilgametis" : "naujokas";
  };

  // 5. Funkcija atlyginimo palyginimui
  const palygintiAtlyginima = (darbuotojas, kriterijus) => {
    const faktinisAtlyginimas = darbuotojas.atlyginimas * darbuotojas.etatas;
    
    if (faktinisAtlyginimas === kriterijus) {
      return "Darbuotojas uždirba lygiai nurodytą sumą";
    } else if (faktinisAtlyginimas > kriterijus) {
      return "Darbuotojas uždirba daugiau nei nurodyta";
    } else {
      return "Darbuotojas uždirba mažiau nei nurodyta";
    }
  };

  return (
    <div className="darbuotojas">
      <h1>Darbuotojas</h1>
      {/* 2. Objekto informacijos išvedimas */}
      <ul>
        <li><strong>Vardas:</strong> {darbuotojas.vardas}</li>
        <li><strong>Profesija:</strong> {darbuotojas.profesija}</li>
        <li><strong>Atlyginimas:</strong> {darbuotojas.atlyginimas} Eur</li>
        <li><strong>Etatas:</strong> {darbuotojas.etatas * 100}%</li>
        <li><strong>Darbo stažas:</strong> {darbuotojas.darboStazas} metai</li>
      </ul>

      <div className="skaičiavimai">
        <p><strong>Bendra uždirbta suma:</strong> {bendraUzdirbtaSuma(darbuotojas)} Eur</p>
        <p><strong>Darbuotojo statusas:</strong> {ilgametisDarbuotojas(darbuotojas)}</p>
        <p><strong>Atlyginimo palyginimas:</strong></p>
        <ul>
          <li>{palygintiAtlyginima(darbuotojas, 1600)} (1600 Eur)</li>
          <li>{palygintiAtlyginima(darbuotojas, 1500)} (1500 Eur)</li>
          <li>{palygintiAtlyginima(darbuotojas, 2000)} (2000 Eur)</li>
        </ul>
      </div>
    </div>
  );
};

export default Darbuotojas;