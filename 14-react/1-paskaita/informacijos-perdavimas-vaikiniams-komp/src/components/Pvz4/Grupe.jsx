import Studentas from "./Studentas";

const Grupe = () => {
  let studentas = {
    vardas: "Jonas",
    pavardas: "Jonaitis",
    amzius: 25,
  };

  return (
    <div>
      <h2> grupe </h2>
      <Studentas studentas={studentas} />
    </div>
  );
};

export default Grupe;
