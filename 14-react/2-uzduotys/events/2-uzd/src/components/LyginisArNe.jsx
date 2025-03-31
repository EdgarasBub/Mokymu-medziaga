const LyginisArNe = () => {
  const inputHandler = (event) => {
    let skaicius = event.target.value;

    if (skaicius % 2 === 0) {
      console.log(`${skaicius} yra lyginis skaicius`);
    } else {
      console.log(`${skaicius} yra nelyginis skaicius`);
    }
  };

  return (
    <div>
      <h2>Lyginis ar ne</h2>
      <input type="number" onInput={inputHandler} />
    </div>
  );
};

export default LyginisArNe;
