const Komp6 = () => {
  const slaptasSkHandler = () => {
    let slaptasSk = Math.floor(Math.random() * 10 + 1);
    console.log(slaptasSk);
  };

  return (
    <div>
      <h4>komp6</h4>
      <button onClick={slaptasSkHandler}>Slaptas skaicuus</button>
    </div>
  );
};

export default Komp6;
