const Komp3 = () => {
    let objektas = {
        Vardas: 'Jonas',
        amzius: 25,
        miestas: 'Vilnius',
        adresas: {
            gatve: 'Gedimino',
            numeris: 9,
        },
        bedarbis: false,
        pazymiai: [10, 8, 6, 4, 2],
    };

    const ArBedarbis = (bedarbis) => {

        return bedarbis ? 'Taip' : 'Ne';
    }


  return (
    <div>
        <h2>Studento informacija:</h2>
        <p>
            Studento vardas: <strong>{objektas.Vardas}</strong>
            Amzius: {objektas.amzius}
        </p>

        <p>Ar bedarbis? {ArBedarbis(objektas.bedarbis)}</p>
        <p>
            Miestas: {objektas.miestas},
            Gatve: {objektas.adresas.gatve} - {objektas.adresas.numeris},
        </p>
        <p>Pazymiai: {objektas.pazymiai.join(',')}</p>
    </div>
  );
};

export default Komp3;