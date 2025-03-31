const Skaiciai = () => {
  let skaiciuMasyvas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function skaiciuSuma() {
    alert(skaiciuMasyvas.reduce((sum, digit) => sum + parseInt(digit), 0));
  }

  function didziausiasSkaicius() {
    alert(Math.max(...skaiciuMasyvas));
  }

  return (
    <div>
      <h2>Skaiciai</h2>
      <button onClick={skaiciuSuma}>Skaiciu Suma</button>
      <button onClick={didziausiasSkaicius}>Didziausias Skaicius</button>
    </div>
  );
};

export default Skaiciai;
