function Naujiena({ value }) {
  const { naujiena, tekstas, perziuruKiekis } = value;
  return (
    <div>
      <h2>
        {naujiena}
        {perziuruKiekis >= 1000 && " HOT"}
      </h2>
      <p>Perziuros: {perziuruKiekis}</p>
      <p>{tekstas}</p>
    </div>
  );
}

export default Naujiena;
