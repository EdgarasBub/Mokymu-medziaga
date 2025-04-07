import { useState, useRef } from "react";

const Kepyklele = () => {
  const [kepyklele, setkepyklele] = useState([]);
  const inputDarbSkaiciusRef = useRef();
  const inputKepiniuKiekisRef = useRef();
  const inputDarboValandosRef = useRef();

  const onFormSubmitHandler = (event) => {
    event.preventDefault();

    setPrekes([
      ...prekes,
      {
        pavadinimas: inputPavRef.current.value,
        kaina: inputKainasRef.current.valueAsNumber,
        kiekis: inputKiekisRef.current.valueAsNumber,
      },
    ]);
    inputPavRef.current.value = null;
    inputKainasRef.current.value = null;
    inputKiekisRef.current.value = null;
  };

  return (
    <div>
      <h2>Kepyklele</h2>
      <div>
        <form onChange={onFormSubmitHandler}>
          <input
            type="number"
            placeholder="darbuotojų skaičius."
            ref={inputDarbSkaiciusRef}
          />
          <input
            type="number"
            placeholder="vieno darbuotojo kepinių
kiekis per valandą."
            ref={inputKepiniuKiekisRef}
          />
          <input
            type="number"
            placeholder="darbo valandų per dieną kiekis."
            ref={inputDarboValandosRef}
          />
        </form>
      </div>
    </div>
  );
};

export default Kepyklele;
