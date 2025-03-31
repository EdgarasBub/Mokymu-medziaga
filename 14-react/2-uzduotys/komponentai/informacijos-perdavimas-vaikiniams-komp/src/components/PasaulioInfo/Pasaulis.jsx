import Salis from "./Salis";

const Pasaulis = () => {
  let PasaulioSalis = [
    { kontinentas: "Europa", salis: "Lietuva" },
    { kontinentas: "Europa", salis: "Latvija" },
    { kontinentas: "Europa", salis: "Estija" },
    { kontinentas: "Europa", salis: "Lenkija" },
  ];
  return (
    <div>
      <h2>Pasaulio salys</h2>
      {PasaulioSalis.map((PasaulioSalisMap, i) => (
        <Salis key={i} salis={PasaulioSalisMap}></Salis>
      ))}
    </div>
  );
};

export default Pasaulis;
