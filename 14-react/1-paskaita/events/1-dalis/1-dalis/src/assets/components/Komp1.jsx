const Komp1 = () => {
  const pvz = () => {
    console.log("pvz");
  };

  return (
    <div>
      <h4>Komp1</h4>
      <button onClick={() => alert("click me paspaustas")}>click me</button>
      <button onClick={() => pvz()}>click me2</button>
    </div>
  );
};

export default Komp1;
