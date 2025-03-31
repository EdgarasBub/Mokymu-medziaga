import Automobilis from "./Automobilis";

const Pardavejas = () => {
  let automobilis = {
    gamintojas: "Audi",
    modelis: "a7",
    metai: "2012",
    rida: "275000",
    kaina: "12000",
  };
  return (
    <div>
      <h2>Automobilio pardavejas</h2>
      <Automobilis automobilis={automobilis} />;
    </div>
  );
};

export default Pardavejas;
