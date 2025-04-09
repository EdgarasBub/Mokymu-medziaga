import { useRef, useState } from "react";
const Kepyklele = () => {
  const [darbuotojuSkaicius, setDarbuotojuSkaicius] = useState(0);
  const [kepiniuKiekis, setKepiniuKiekis] = useState(0);
  const [valanduKiekis, setValanduKiekis] = useState(0);
  const [uzsakymai, setUzsakymai] = useState([]);
  const darbuotojuSkaiciusRef = useRef();
  const kepiniuKiekisRef = useRef();
  const valanduKiekisRef = useRef();
  const uzsakymaiRef = useRef();
  const inputHandler = () => {
    setDarbuotojuSkaicius(darbuotojuSkaiciusRef.current.valueAsNumber || 0);
    setKepiniuKiekis(kepiniuKiekisRef.current.valueAsNumber || 0);
    setValanduKiekis(valanduKiekisRef.current.valueAsNumber || 0);
  };
  const pridetiUzsakyma = (event) => {
    event.preventDefault();
    setUzsakymai([...uzsakymai, uzsakymaiRef.current.valueAsNumber]);
    uzsakymaiRef.current.value = "";
  };
  const uzsakymuSuma = () => {
    return uzsakymai.reduce((uzsk, sum) => uzsk + sum, 0);
  };
  const bendrasPajegumas = () => {
    return darbuotojuSkaicius * kepiniuKiekis * valanduKiekis;
  };
  const palyginimas = () =>
    bendrasPajegumas() > uzsakymuSuma() ? "Spes" : "Nespes";
  return (
    <div>
      <h2>Kepyklele</h2>
      <input
        placeholder="Darbuotoju Skaicius"
        type="number"
        ref={darbuotojuSkaiciusRef}
        onChange={inputHandler}
      />
      <br />
      <input
        placeholder="Kepiniu skaicius"
        type="number"
        ref={kepiniuKiekisRef}
        onChange={inputHandler}
      />
      <br />
      <input
        placeholder="Valandu kiekis"
        type="number"
        ref={valanduKiekisRef}
        onChange={inputHandler}
      />
      <br />
      <p>
        Darbuotoju skaicius: {darbuotojuSkaicius} Kepiniu kiekis:{" "}
        {kepiniuKiekis} Valandu kiekis: {valanduKiekis}
      </p>

      <input type="number" placeholder="Uzsakymu kiekis" ref={uzsakymaiRef} />
      <button onClick={pridetiUzsakyma}>Ivesti</button>
      <p>Uzsakymai: {uzsakymai.join(", ")}</p>
      {uzsakymai && (
        <>
          <p>Uzsakymu suma: {uzsakymuSuma()}</p>
          <p>Bendras pajegumas: {bendrasPajegumas()}</p>
          <p>Ar spes iskepti: {palyginimas()}</p>
        </>
      )}
    </div>
  );
};
export default Kepyklele;
