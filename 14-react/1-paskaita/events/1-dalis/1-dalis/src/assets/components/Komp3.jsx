const Komp3 = () => {
  const mygtukasHandler = () => {
    console.log("clicked button");
  };

  const pvz = "pvz";

  return (
    <div>
      <h4>Komp3</h4>

      <button onClick={mygtukasHandler}>mygtukas</button>
      {/* <input value={pvz}></input> */}
    </div>
  );
};

export default Komp3;
