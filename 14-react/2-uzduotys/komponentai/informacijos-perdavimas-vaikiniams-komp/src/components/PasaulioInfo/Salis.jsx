const Salis = (props) => {
  let { kontinentas, salis } = props.salis;
  const tikrintiZemyna = () => {
    if (kontinentas === "Europa") {
      return "Jėga!";
    }
    return "sss";
  };

  return (
    <div>
      <h2>Salis</h2>
      <h4>Kontinentas: {kontinentas}</h4>
      <h4>Salis: {salis}</h4>
      <p>{tikrintiZemyna()}</p>
    </div>
  );
};

export default Salis;
