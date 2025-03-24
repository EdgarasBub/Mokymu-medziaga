const Komp5 = () => {
    let automobiliai = [
        'BMW',
        'Audi',
        'VW',
        'Toyota',
        'Mazda',
    ];
    let tittle = 'Mano Automobiliai';
  return (
    <div>
        <h1>{tittle}</h1>
        <ul>
        {automobiliai.map((automobilis, index) => <p key={index}>{automobilis}</p>)}
        </ul>
    </div>
  );
};

export default Komp5;