import Darbuotojas from "./Darbuotojas";

const Imone = () => {
  let darbuotojas = {
    vardas: "Jonas",
    pavardas: "Jonaitis",
    amzius: 25,
    pareigos: "programuotojas",
    atlyginimas: 1500,
  };

  let darbuotojas2 = {
    vardas: "Jonas",
    pavardas: "Jonaitis",
    amzius: 23,
    pareigos: "dizaineris",
    atlyginimas: 2500,
  };

  return (
    <div>
      <h1> Imone:</h1>
      <Darbuotojas darbuotojas={darbuotojas} />
      <hr />
      <Darbuotojas darbuotojas={darbuotojas2} />
    </div>
  );
};

export default Imone;
