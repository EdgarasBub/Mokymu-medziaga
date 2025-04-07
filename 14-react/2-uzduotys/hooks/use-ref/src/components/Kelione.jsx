import { useRef } from "react";
import { useState } from "react";

const Kelione = () => {
  const [atstumas, setAtstumas] = useState("");
  const [sanaudos, setSanaudos] = useState("");
  const [kuroKaina, setKuroKaina] = useState("");

  const atstumasRef = useRef();
  const sanaudosRef = useRef();
  const kainaRef = useRef();

  const onSkaiciuotiClick = () => {
    setAtstumas(atstumasRef.current.value);
    setSanaudos(sanaudosRef.current.value);
    setKuroKaina(kainaRef.current.value);

    atstumasRef.current.value = "";
    sanaudosRef.current.value = "";
    kainaRef.current.value = "";
  };

  const bendrasKuras = () => {
    return (atstumas / 100) * sanaudos;
  };

  const bendrosIslaidos = () => {
    return bendrasKuras() * kuroKaina;
  };

  return (
    <div>
      <h2>Kelione</h2>
      <div>
        <label htmlFor="atstumas">keliones km:</label>
        <input id="atstumas" type="number" ref={atstumasRef} />
      </div>
      <div>
        <label htmlFor="sanaudos">Sanaudos:</label>
        <input id="sanaudos" type="number" ref={sanaudosRef} />
      </div>
      <div>
        <label htmlFor="kuroKaina">Kaina:</label>
        <input id="kuroKaina" type="number" ref={kainaRef} />
      </div>
      <button onClick={onSkaiciuotiClick}>Skaiciuoti</button>

      {atstumas && sanaudos && kuroKaina && (
        <>
          <p>Atstumas: {atstumas}km</p>
          <p>Vidutines sanaudos: {sanaudos} litro</p>
          <p>Kuro kaina: {kuroKaina} eur</p>
          <p>Is viso sunaudosite kuro: {bendrasKuras().toFixed(2)} litro</p>
          <p>Bendra kuro kaina: {bendrosIslaidos().toFixed(2)} eur</p>
        </>
      )}
    </div>
  );
};

export default Kelione;
