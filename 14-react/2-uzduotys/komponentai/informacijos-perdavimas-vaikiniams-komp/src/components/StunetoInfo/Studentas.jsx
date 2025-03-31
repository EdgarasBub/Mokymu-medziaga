import React from "react";
import Pazymys from "./Pazymys";

const Studentas = () => {
  // 1. Studento informacija
  const studentas = {
    vardas: "Jonas",
    pavarde: "Jonaitis",
    mokykla: "Vilniaus Universitetas",
    programa: "Informatika",
  };

  // 2. Pažymių masyvas
  const pazymiai = [8, 5, 7, 4, 9, 3, 6];

  return (
    <div>
      <h2>Studento informacija</h2>
      <div>
        <p>
          <strong>Vardas:</strong> {studentas.vardas}
        </p>
        <p>
          <strong>Pavardė:</strong> {studentas.pavarde}
        </p>
        <p>
          <strong>Mokykla:</strong> {studentas.mokykla}
        </p>
        <p>
          <strong>Programa:</strong> {studentas.programa}
        </p>
      </div>

      <h3>Pažymiai:</h3>
      <div>
        {pazymiai.map((pazymys, index) => (
          <Pazymys key={index} pazymys={pazymys} />
        ))}
      </div>
    </div>
  );
};

export default Studentas;
