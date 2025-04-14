import React from "react";

const KnyguSpausdinimas = ({ knygos }) => {
  return (
    <div>
      <h3>Knygų sąrašas</h3>

      {knygos.length > 0 ? (
        <ul>
          {knygos.map((knyga, index) => (
            <li key={index}>
              <strong>{knyga.pavadinimas}</strong> ({knyga.metai}), Kaina:{" "}
              {knyga.kaina.toFixed(2)}€
            </li>
          ))}
        </ul>
      ) : (
        <p>Šiuo metu nėra įvestų knygų</p>
      )}
    </div>
  );
};

export default KnyguSpausdinimas;
