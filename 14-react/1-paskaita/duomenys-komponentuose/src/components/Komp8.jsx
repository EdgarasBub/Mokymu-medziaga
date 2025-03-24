const Komp8 = () => {

    let antraste = 'prekiu sarasas';
    let prekes = [
        {id:1, pavadinimas: 'Bulves', kaina: 1.5, kiekis: 10},
        {id:2, pavadinimas: 'Morkos', kaina: 2.5, kiekis: 5},
        {id:3, pavadinimas: 'Svogunas', kaina: 1,   kiekis: 20},
        {id:4, pavadinimas: 'Pomidoras', kaina: 3, kiekis: 7}, 
        {id:5, pavadinimas: 'Agurkas', kaina: 1.5, kiekis: 15},
    ];

  return (
    <div>
      <h1>{antraste}</h1>
      {
        prekes.length > 0
        ? prekes.map((preke, index) => {
            return (
                <div key={preke.id}>
                    <h4>{preke.pavadinimas}</h4>
                    <p>Kaina: {preke.kaina}, Kiekis: {preke.kiekis}</p>
                </div>
            )
        })

        : <p>prekiu nera</p>
      }
    </div>
  );
};

export default Komp8;