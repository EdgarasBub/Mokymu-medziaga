import { useState, useRef } from "react";

const Prekes = () => {
  const [prekes, setPrekes] = useState([]);
  const inputPavRef = useRef();
  const inputKainasRef = useRef();
  const inputKiekisRef = useRef();
  const MAZAS_KIEKIS = 5;

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

  const onClearClickHandler = () => {
    setPrekes([]);
  };

  const isveskMazaiKiekiuPrekiu = () => {
    const prekiuLikuciai = prekes.filter(
      (preke) => preke.kiekis < MAZAS_KIEKIS
    );

    console.log(prekiuLikuciai);

    return prekiuLikuciai.length > 0 ? (
      <div>
        <h3>Prekiu likuciai: </h3>
        {prekiuLikuciai.map((preke, index) => (
          <p key={index}>
            pav: {preke.pavadinimas}, kaina: {preke.kaina}, kiekis:{" "}
            {preke.kiekis}
          </p>
        ))}
      </div>
    ) : (
      ""
    );
  };

  return (
    <div>
      <h2>Prekes</h2>
      <div>
        <form onSubmit={onFormSubmitHandler}>
          <input
            id="inputPav"
            ref={inputPavRef}
            type="text"
            placeholder="Pavadinimas"
          />
          <br />
          <input
            id="inputKaina"
            ref={inputKainasRef}
            type="number"
            placeholder="Kaina"
          />
          <br />
          <input
            id="inputKiekis"
            ref={inputKiekisRef}
            type="number"
            placeholder="Kiekis"
          />
          <br />
          <button type="submit">Prideti preke</button>
        </form>
        {prekes.length > 0 && (
          <div>
            {prekes.map((preke, index) => (
              <p key={index}>
                pav: {preke.pavadinimas}, kaina: {preke.kaina}, kiekis:{" "}
                {preke.kiekis}
              </p>
            ))}

            {isveskMazaiKiekiuPrekiu()}

            <button onClick={onClearClickHandler}> ISVALYK MANE </button>
          </div>
        )}
        {prekes.length > 0 && <h3>kol kas nera ivestu prekiu</h3>}
      </div>
    </div>
  );
};

export default Prekes;
