import { useState } from "react";
import { useRef } from "react";

const Temperaturos = () => {
  const [temperaturos, setTemperaturos] = useState([]);

  const setTemperaturosRef = useRef();

  const onClickPatvirtinti = (event) => {
    event.preventDefault();

    const temperatura = setTemperaturosRef.current.valueAsNumber;

    setTemperaturos([...temperaturos, temperatura]);

    setTemperaturosRef.current.value = "";
  };

  const vidutineTemperatura = () => {
    return (
      temperaturos.reduce((prev, curr) => prev + curr, 0) / temperaturos.length
    );
  };

  const zemiausiaTemperatura = () => {
    return Math.min(...temperaturos);
  };
  const auksciausiaTemperatura = () => {
    return Math.max(...temperaturos);
  };

  const skirtumaiTarpMinMaxTemperaturu = () => {
    return Math.max(...temperaturos) - Math.min(...temperaturos);
  };

  const onClickDelete = () => {
    setTemperaturos([]);
  };

  return (
    <div>
      <h2>Temperaturos</h2>
      <div>
        <input
          type="number"
          placeholder="Temperatura"
          ref={setTemperaturosRef}
        />
        <br />
        <button onClick={onClickPatvirtinti}> Patvirtinti </button>
      </div>
      {temperaturos.length > 0 && (
        <>
          <p>Temperaturos: {temperaturos.join(",")}</p>
          <p>Temperaturu vidurkis: {vidutineTemperatura().toFixed(2)}</p>
          <p>Zemiausia temperatura: {zemiausiaTemperatura()}</p>
          <p>Auksciausia temperatura: {auksciausiaTemperatura()}</p>
          <p>
            Skirtumas tarp didziausios temperaturos '{auksciausiaTemperatura()}'{" "}
            ir maziausios '{zemiausiaTemperatura()}' yra: '
            {skirtumaiTarpMinMaxTemperaturu()}'
            <br />
            <button onClick={onClickDelete}>VISKA ISTRINTI</button>
          </p>
        </>
      )}
      {temperaturos.length === 0
        ? "Nera ivestu temperaturu"
        : `Is viso ${temperaturos.length} ivestu temperaturu`}
    </div>
  );
};

export default Temperaturos;
