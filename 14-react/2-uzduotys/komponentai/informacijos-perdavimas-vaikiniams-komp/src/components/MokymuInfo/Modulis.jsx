const Modulis = ({ modulis }) => {
  return (
    <div>
      <h3>{modulis.pavadinimas}</h3>
      <p>Trukmė: {modulis.trukme} valandų</p>
    </div>
  );
};

export default Modulis;
