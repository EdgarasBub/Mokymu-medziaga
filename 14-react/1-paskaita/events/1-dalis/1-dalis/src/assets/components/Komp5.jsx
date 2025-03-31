const Komp5 = () => {
  const pirmasHandler = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.target.textContent);
  };
  const antrasHandler = (event) => {
    console.log(event.target);
  };

  return (
    <div>
      <h4>Komp4</h4>
      <button onClick={pirmasHandler}>
        {" "}
        Pirmas <hr /> <strong>abc</strong>
      </button>
      <button id="pvz" className="pvz2" onClick={antrasHandler}>
        {" "}
        Antras
      </button>
    </div>
  );
};

export default Komp5;
