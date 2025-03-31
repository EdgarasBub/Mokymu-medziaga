import Darbuotojas from "./Darbuotojas";

const Imone = () => {
  return (
    <div>
      <h1>Imone</h1>

      <Darbuotojas vardas="Mantas" pavarde="Katleris" kaledinisBonusas={50} />
      <Darbuotojas vardas="Mantas" pavarde="Stonkus" kaledinisBonusas={120} />
      <Darbuotojas
        vardas="Rolandas"
        pavarde="Katleris2"
        kaledinisBonusas={100}
      />
      <Darbuotojas vardas="Goda" pavarde="Problema" kaledinisBonusas={0} />
    </div>
  );
};
export default Imone;
