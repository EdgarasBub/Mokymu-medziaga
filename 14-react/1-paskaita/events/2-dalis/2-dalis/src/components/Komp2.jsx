const Komp2 = () => {
  const inputHandler = (event) => {
    let value = event.target.value;

    if (value > 100) {
      console.log("ivestas skaicius didesnis uz 100");
    } else {
      console.log("ivestas skaicius mazesnis arba lygus 100");
    }
  };

  return (
    <div>
      <h2>Komp2</h2>
      <input type="number" onInput={inputHandler} />
    </div>
  );
};

export default Komp2;
