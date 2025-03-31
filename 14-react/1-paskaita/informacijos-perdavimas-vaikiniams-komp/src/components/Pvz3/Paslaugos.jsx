import Paslauga from "./Paslauga";

const Paslaugos = () => {
  return (
    <div>
      <h2>Paslaugos</h2>
      <Paslauga pavadinimas="ravejimas" kategorija="sodas" />
      <Paslauga pavadinimas="tvarkimas" kategorija="meistras" />
      <Paslauga pavadinimas="melzimas" kategorija="gyvunai" />
    </div>
  );
};

export default Paslaugos;
