const Darbuotojas = ({ vardas, pavarde, kaledinisBonusas }) => {
  const arDaugBonusiuko = (kaledinisBonusas) => {
    if (!kaledinisBonusas || kaledinisBonusas === 0) {
      return "gaila";
    } else if (kaledinisBonusas > 0 && kaledinisBonusas < 100) {
      return "bent ant kebabo uzmete..";
    } else if (kaledinisBonusas >= 100) {
      return "nu, jau kazkas geriau";
    }
  };

  return (
    <div>
      <h3>Imones darbuotojai</h3>
      <p>
        {vardas}
        {pavarde}
      </p>
      <p>
        Ar gavo bonusiuko?{kaledinisBonusas} {arDaugBonusiuko(kaledinisBonusas)}
      </p>
    </div>
  );
};
export default Darbuotojas;
