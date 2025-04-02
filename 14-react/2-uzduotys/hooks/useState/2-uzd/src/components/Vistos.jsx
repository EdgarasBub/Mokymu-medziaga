import React, { useState } from "react";

function Vistos() {
  // 2. Paprastas kintamasis (be būsenos) - dienos užsakymų kiekis
  const dienosUzsakymai = 120; // pastovus klientų užsakymų kiekis

  // 3. Būsenos kintamasis kiaušinių kiekiui saugoti
  const [kiaušiniuKiekis, setKiaušiniuKiekis] = useState("");

  // 4. Įvesties lauko apdorojimo funkcija
  const handleKiaušiniuChange = (e) => {
    setKiaušiniuKiekis(e.target.value);
  };

  // 5. Funkcija, kuri įvertina ar įgyvendins užsakymus
  const arIgyvendinsUzsakymus = () => {
    const kiaušiniai = parseInt(kiaušiniuKiekis) || 0;

    if (kiaušiniai >= dienosUzsakymai) {
      const perteklius = kiaušiniai - dienosUzsakymai;
      return `Viskas gerai! Ūkis įgyvendins užsakymus. Perteklius: ${perteklius} kiaušinių.`;
    } else {
      const trukumas = dienosUzsakymai - kiaušiniai;
      return `Ūkis nespėja įgyvendinti užsakymų. Trūksta: ${trukumas} kiaušinių.`;
    }
  };

  return (
    <div>
      <h2>Vištų kiaušinių skaičiuoklė</h2>

      <div>
        <label>
          Šiandien išperėtų kiaušinių kiekis:
          <input
            type="number"
            value={kiaušiniuKiekis}
            onChange={handleKiaušiniuChange}
            min="0"
          />
        </label>
      </div>

      <div>
        <p>Dienos užsakymų kiekis: {dienosUzsakymai} kiaušinių</p>
      </div>

      {/* 5. Rezultato atvaizdavimas */}
      <p>{arIgyvendinsUzsakymus()}</p>
    </div>
  );
}

export default Vistos;
