// const Preke = (props) => {
//     return (
//         <div>
//             <h3>{props.pavadinimas}</h3>
//             <p>Prekyboje turime: <strong>{props.kiekis}</strong></p>
//             <p>Kaina: {props.kaina}</p>
//         </div>
//     )

// }

// TYPESCRIPT

// type PrekeProps = {
//     pavadinimas: string,
//     kiekis: Number,
//     aprasymas?: string,
//     arParduodama:boolean
//     kaina: any
// }

const Preke = ({ pavadinimas, kiekis, kaina }) => {
  return (
    <div>
      be propsu
      <h3>{pavadinimas}</h3>
      <p>
        Prekyboje turime: <strong>{kiekis}</strong>
      </p>
      <p>Kaina: {kaina}</p>
    </div>
  );
};

export default Preke;
