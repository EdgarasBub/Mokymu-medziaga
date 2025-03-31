const Delione = (props) => {
  let { pavadinimas, detaliuKiekis, plotis, aukstis } = props.delione;

  const delionesSunkumas = () => {
    if (detaliuKiekis > 0 && detaliuKiekis < 500) {
      return "Lengvutis";
    } else if (detaliuKiekis > 500 && detaliuKiekis < 1000) {
      return "50/50";
    } else if (detaliuKiekis >= 1000) {
      return "Povelniu sunku";
    }
  };

  return (
    <div>
      <p>
        Delione: {pavadinimas} turi {detaliuKiekis} puzliu, jos plotis yra:{" "}
        {plotis}cm, o aukstis: {aukstis}cm sudetingumo lygis yra:{" "}
        {delionesSunkumas()}
      </p>
    </div>
  );
};

export default Delione;
