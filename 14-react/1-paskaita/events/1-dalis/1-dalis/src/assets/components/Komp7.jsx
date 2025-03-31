const Komp7 = () => {
  let skaiciukas = 145;
  const patikrintihandler = () => {
    if (skaiciukas > 10) {
      console.log("didesnis uz 10");
    } else {
      console.log("mazesnis arba lygus 10");
    }
  };

  return (
    <div>
      <h4>komp7</h4>
      <button onClick={patikrintihandler}>Patikrinti skaiciu</button>
    </div>
  );
};

export default Komp7;
