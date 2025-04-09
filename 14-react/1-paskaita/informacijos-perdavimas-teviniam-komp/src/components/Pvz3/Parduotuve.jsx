import Pridejimas from "./Pridejimas";
import VisosPrekes from "./VisosPrekes";
import { useState } from "react";
const Parduotuve = () => {
  //   const TEST_PREKES = [
  //     { id: 156, pavadinimas: "knyga", kiekis: 5, kaina: 10 },
  //     { id: 147, pavadinimas: "vanduo", kiekis: 100, kaina: 1 },
  //     { id: 142, pavadinimas: "tv", kiekis: 15, kaina: 1000 },
  //     { id: 124, pavadinimas: "laptopas", kiekis: 25, kaina: 1500 },
  //     { id: 19901, pavadinimas: "kate", kiekis: 1, kaina: 1200 },
  //   ];
  const [prekes, setPrekes] = useState([]);

  const hadlePrekesPridejimas = (newpreke) => {
    console.log("parduotuve gavo");
    console.log(newpreke);
    setPrekes((prevState) => [...prevState, newpreke]);
  };

  return (
    <div>
      <h2>Parduotuve</h2>
      <Pridejimas pridetiPreke={hadlePrekesPridejimas} />
      <VisosPrekes data={prekes} />
    </div>
  );
};

export default Parduotuve;
