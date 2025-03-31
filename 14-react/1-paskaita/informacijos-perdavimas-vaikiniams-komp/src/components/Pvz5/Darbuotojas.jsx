const Darbuotojas = (props) => {
  let darb = props.darbuotojas;

  return (
    <div>
      <h3>
        vardas:
        {darb.vardas}, pavarde:
        {darb.pavarde}
      </h3>
      <h3>amzius:{darb.amzius}</h3>
      <h3>pareigos:{darb.pareigos}</h3>
      <h3>alga:{darb.atlyginimas}</h3>
    </div>
  );
};

export default Darbuotojas;
