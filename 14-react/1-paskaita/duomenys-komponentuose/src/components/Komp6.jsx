const Komp6 = () => {
    let skaiciai1 = [1, 2, 3, 4, 5];
    let skaiciai2 =[];
    let antraste = 'Masyvai su Skaiciais su if salyga';
    let arPrisijunges = true;

  return (
    <div>
        <h1>{antraste}</h1>
        <h3>Skaiciai1: </h3>
        {
            skaiciai1.length > 0
                  ? <ul>{skaiciai1.map((skaicius, i) => 
                      <li key={i}>
                        {skaicius} - { skaicius % 2 === 0 ? 'lyginis' : 'nelyginis' }
                      </li>)}
                      </ul>
                  : <p>masyvas 'Skaiciai1' tuscias</p>
                  }

        <h3>Skaiciai2: </h3>
        {
            skaiciai2.length > 0
                  ? <ul>{skaiciai2.map((skaicius, i) => 
                      <li key={i}>
                       {skaicius}
                      </li>)}
                      </ul>
                  : <p>masyvas 'Skaiciai2' tuscias</p>
                  }
                
                <h3>Ar prisijunges?</h3>
                {
                  arPrisijunges ? 'Taip' : 'Ne'
                }
    </div>
  );
};

export default Komp6;

// skaicius - lyginis arba nelyginis

// Salyga
//   ? veiksmas arba reiksme kada true
//   : veiksmas arba reiksme kada false