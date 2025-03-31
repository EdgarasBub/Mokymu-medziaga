const Automobilis = ({ automobilis }) => {
  console.log(automobilis.gamintojas);
  return (
    <div>
      <h3>
        {automobilis.gamintojas} {automobilis.modelis}
      </h3>
      <ul>
        <li>
          Metai: <strong>{automobilis.metai}</strong>
        </li>
        <li>
          Rida: <strong>{automobilis.rida} km</strong>
        </li>
        <li>
          Kaina: <strong>{automobilis.kaina} €</strong>
        </li>
      </ul>
    </div>
  );
};

export default Automobilis;
