const PrekiuKrepselis = () => {
  let prekes = [
    { id: 1, name: "Kompiuteris", kiekis: 1, kaina: 1000, nuolaida: 100 },
    { id: 2, name: "Monitorius", kiekis: 2, kaina: 300, nuolaida: 54 },
    { id: 3, name: "Klaviatura", kiekis: 1, kaina: 50, nuolaida: 0 },
    { id: 4, name: "Pelė", kiekis: 1, kaina: 20, nuolaida: 0 },
  ];

  const prekiuLentele = (items) => {
    return (
      <div>
        <h1>Prekiu Krepselis:</h1>
        <table border="1">
          <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Kiekis</th>
            <th>Kaina</th>
            <th>Nuolaida</th>
          </thead>
          <tbody>
            {prekes.map((prekes) => {
              return (
                <tr key={prekes.id}>
                  <td>{prekes.id}</td>
                  <td>{prekes.name}</td>
                  <td>{prekes.kiekis}</td>
                  <td>{prekes.kaina}</td>
                  <td>{prekes.nuolaida}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  const kainaSuNuolaida = (preke) => {
    return preke.reduce((suma, preke) => {
      const nuolaidaVienam = preke.kaina * (preke.nuolaida / 100);
      return suma + nuolaidaVienam * preke.kiekis;
    }, 0);
  };

  const krepselioKaina = () => {
    let suma = 0;
    for (const preke of prekes) {
      suma += preke.kaina * preke.kiekis - preke.nuolaida;
    }
    return suma;
  };

  const atrinktiPagalKaina = (riba) => {
    return prekes.filter((preke) => preke.kaina > riba).join;
  };

  // Funkciju iskvietimas

  return (
    <div>
      <h1>Prekius Krepselis:</h1>

      {prekiuLentele(prekes)}

      <div>
        <p>Preke su nuolaida:</p>
        {kainaSuNuolaida(prekes)}
      </div>

      <div>
        <p>Krepselio kaina:</p>
        {krepselioKaina()}
      </div>

      <div>
        <p>Atrinkti pagal kaina:</p>
        {atrinktiPagalKaina(500)}
      </div>
    </div>
  );
};

export default PrekiuKrepselis;
