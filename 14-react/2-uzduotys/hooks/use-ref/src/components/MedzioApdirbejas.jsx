import { useRef } from "react";
import { useState } from "react";

const MedzioApdirbejas = () => {
  const [zalKaina, setZalKaina] = useState("");
  const [darboValandos, setDarboValandos] = useState("");
  const [valUzmokestis, setValUzmokestis] = useState("");

  const zalKainaRef = useRef();
  const darboValandosRef = useRef();
  const valUzmokestisRef = useRef();

  const magicNumber = 1.3;

  const onClickPatvirtinti = () => {
    const kaina = zalKainaRef.current.valueAsNumber;
    const dirbtaVal = darboValandosRef.current.valueAsNumber;
    const uzdarbis = valUzmokestisRef.current.valueAsNumber;

    setZalKaina(kaina);
    setDarboValandos(dirbtaVal);
    setValUzmokestis(uzdarbis);

    zalKainaRef.current.value = "";
    darboValandosRef.current.value = "";
    valUzmokestisRef.current.value = "";
  };
  const bendrosIslaidos = () => {
    return darboValandos * valUzmokestis - zalKaina;
  };

  const skaiciuotiPardavimoKaina = () => {
    return bendrosIslaidos() * magicNumber;
  };

  return (
    <div>
      <h2>Medzio Apdirbejas</h2>
      <div>
        <label htmlFor="zalKaina">Zaliavu kainos:</label>
        <input id="zalKaina" type="number" ref={zalKainaRef} />
      </div>
      <div>
        <label htmlFor="darboValandos">Darbo valandos:</label>
        <input id="darboValandos" type="number" ref={darboValandosRef} />
      </div>
      <div>
        <label htmlFor="valUzmokestis">Valandinis uzmokestis:</label>
        <input id="valUzmokestis" type="number" ref={valUzmokestisRef} />
      </div>
      <button onClick={onClickPatvirtinti}>Skaiciuoti</button>
      {zalKaina && darboValandos && valUzmokestis && (
        <>
          <p>Zaliavu kainos: {zalKaina}</p>
          <p>Darbo valandos: {darboValandos}</p>
          <p>Valandinis uzmokestis: {valUzmokestis}</p>
          <p>bendrosios Islaidos: {bendrosIslaidos().toFixed(2)}</p>
          <p>
            Rekomenduojama pardavimo kaina:{" "}
            {skaiciuotiPardavimoKaina().toFixed(2)}
          </p>
        </>
      )}
    </div>
  );
};
export default MedzioApdirbejas;
