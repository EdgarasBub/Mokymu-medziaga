import TekstoVaik from "./TekstoVaik";

const TekstoBendras = () => {
  let manoKintamasis = "tekstas is kintamojo";
  let tekstai = [
    "labas",
    "labas labas",
    "",
    "",
    "labas labas labas",
    "labas labas labas labas",
  ];

  return (
    <div>
      <h1>Darbas su vaikuciais pabiruciais</h1>
      <div>
        <TekstoVaik tekstas="labas" />
        <TekstoVaik tekstas="antas vaikas" />
        <TekstoVaik tekstas="dar vienas vaikas su tekstu" />
        <TekstoVaik tekstas="lorem lorem lorem" />
        <TekstoVaik tekstas={manoKintamasis} />
        <TekstoVaik />

        {tekstai.map((item, key) => (
          <TekstoVaik key={key} tekstas={item} />
        ))}
      </div>
    </div>
  );
};
export default TekstoBendras;
