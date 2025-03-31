import Role from "./Role";

const VisosRoles = () => {
  // Galima naudoti ir tiesiogiai perduoti duomenis:
  return (
    <div>
      <h2>Visos Rolės</h2>

      <Role pavadinimas="Administratorius" kiekis={5} />
      <Role pavadinimas="Moderatorius" kiekis={12} />
      <Role pavadinimas="Vartotojas" kiekis={150} />
      <Role pavadinimas="Svečias" kiekis={42} />
    </div>
  );
};

export default VisosRoles;
