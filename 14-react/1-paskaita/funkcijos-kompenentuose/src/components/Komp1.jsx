import {suma} from '../utils/calculator';

const Komp1 = () => {
    let skaicius = 57;
    let pirmas = 5, antras = 10;

    const patikrinkSkaiciu = (skaiciukas) => {

        //pirmas budas

        // if (skaiciukas === 55) {
        //     return 'skaicius yra 55';
        // } else {
        //     return 'skaicius nera 55';
        // }

        //antras budas

        return skaiciukas === 55 ? 'skaicius yra 55' : 'skaicius nera 55';
    };

  return (
    <div>
        <h1>Komponentas 1</h1>
            <h2> skaiciai ir skaiciavimai</h2>
                <p>{skaicius}</p>
                <p>{skaicius + 5}</p>
                <p>{skaicius - 5}</p>
                <p>{skaicius * 5}</p>
                <p>{skaicius / 5}</p>
                <p>{skaicius === 55 ? 'skaicius yra 55' : 'skaicius nera 55'}</p>
                <p>{patikrinkSkaiciu(skaicius)}</p>
                <p>{pirmas + antras}</p>
                <p>{suma(pirmas, antras)}</p>
    </div>
  );
};

export default Komp1;

// const Komp1 = () => {
//     return (
//       <div>
//         <h1>Komponentas 1</h1>
//       </div>
//     );
//   };
  
//   export default Komp1;