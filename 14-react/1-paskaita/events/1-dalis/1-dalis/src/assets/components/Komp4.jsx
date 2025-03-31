const Komp4 = () => {
  const pirmasHandler = () => {
    console.log("pirmas");
  };
  const antrasHandler = () => {
    console.log("antras");
  };

  return (
    <div>
      <h4>Komp4</h4>
      <button onClick={pirmasHandler}> Pirmas</button>
      <button onClick={antrasHandler}> Antras</button>
      <button onClick={pirmasHandler}> Trecias</button>
    </div>
  );
};

export default Komp4;
