const Role = ({ pavadinimas, kiekis }) => {
  const arDaugVarotoju = (kiekis) => {
    return kiekis >= 20
      ? "Vartotoju kiekis didisnis"
      : "Vartotoju kiekis mazesnis";
  };

  return (
    <div>
      <h3>{pavadinimas}</h3>
      <p>Vartotojų skaičius: {kiekis}</p>
      <p>{arDaugVarotoju(kiekis)}</p>
    </div>
  );
};

export default Role;
