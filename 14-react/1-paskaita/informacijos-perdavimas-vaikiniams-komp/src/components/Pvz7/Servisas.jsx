import Automobilis from "./Autimobilis";

const Servisas = () => {
  let autobiliai = [
    { gamintojas: "Audi", modelis: "a7" },
    { gamintojas: "Audi", modelis: "a5" },
    { gamintojas: "Dodge", modelis: "avenger" },
    { gamintojas: "bmw", modelis: "x5" },
    { gamintojas: "maxda", modelis: "6" },
    { gamintojas: "toyota", modelis: "prius" },
  ];

  return (
    <div>
      <h2>Servisas</h2>
      {/* <Automobilis auto={autobiliai[0]} />
      <Automobilis auto={autobiliai[1]} />
      <Automobilis auto={autobiliai[2]} />
      <Automobilis auto={autobiliai[3]} />
      <Automobilis auto={autobiliai[4]} />
      <Automobilis auto={autobiliai[5]} /> */}
      {autobiliai.map((Automobilis, i) => (
        <Automobilis key={i} auto={Automobilis}></Automobilis>
      ))}
    </div>
  );
};

export default Servisas;
