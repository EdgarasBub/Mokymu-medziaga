import { useState } from "react";

const TrysKepyklos = () => {
  const [dienosUzsakymai, setDienosUzsakymai] = useState("");
  const [kepykla1, setkepykla1] = useState("");
  const [kepykla2, setkepykla2] = useState("");
  const [kepykla3, setkepykla3] = useState("");

  const handleDienosUzsakymaiChange = (e) => {
    setDienosUzsakymai(e.target.value);
  };
  const handleKepykla1Change = (e) => {
    setkepykla1(e.target.value);
  };
  const handleKepykla2Change = (e) => {
    setkepykla2(e.target.value);
  };
  const handleKepykla3Change = (e) => {
    setkepykla3(e.target.value);
  };

  const uzsakymuVykdymas = () => {
    const pajegus = Number(kepykla1) + Number(kepykla2) + Number(kepykla3);
    const skirtumas = pajegus - dienosUzsakymai;
    if (skirtumas >= 0) {
      return `kepyklos uzsakymus padarys, uzsakinekit daugiau`;
    } else {
      return `truks jegy, truks${Math.abs(skirtumas)} daugiau`;
    }
  };

  return (
    <div>
      <h2>Trijų kepyklių pajėgumo skaičiuoklė</h2>
      <input
        type="number"
        id="dienosUzskymai"
        onChange={handleDienosUzsakymaiChange}
      />
      <div>
        <label htmlFor="">Kepykla1</label>
        <input type="number" id="kepykla1" onChange={handleKepykla1Change} />
      </div>
      <div>
        <label htmlFor="">Kepykla2</label>
        <input type="number" id="kepykla2" onChange={handleKepykla2Change} />
      </div>
      <div>
        <label htmlFor="">Kepykla3</label>
        <input type="number" id="kepykla3" onChange={handleKepykla3Change} />
      </div>
      <p>{uzsakymuVykdymas()}</p>
    </div>
  );
};

export default TrysKepyklos;
// import { useState } from "react"

// const TrysKepyklos = () => {

//     const [dienos, setDienos] = useState('')
//     const [pirmaKepykla, setPirmaKepykla] = useState('')
//     const [antraKepykla, setAntraKepykla] = useState('')
//     const [treciaKepykla, setTreciaKepykla] = useState('')

//     const dienosHandler = (e) => {
//         setDienos(e.target.value)
//     }
//     const pirmaHandler = (e) => {
//         setPirmaKepykla(e.target.value)
//     }
//     const antraHandler = (e) => {
//         setAntraKepykla(e.target.value)
//     }
//     const treciaHandler = (e) => {
//         setTreciaKepykla(e.target.value)
//     }

//     const uzsakymuVykdymas = () => {
//         const pajegus = Number(pirmaKepykla) + Number(antraKepykla) + Number(treciaKepykla);
//         const skirtumas = pajegus - dienos
//         if (skirtumas >= 0) {
//             return 'Kepyklos uzsakymus padarys, uzsakinekit daugiau'
//         } else {
//             return `truksta jegu, truks ${Math.abs(skirtumas)} kepiniu`
//         }
//     }
// return (
//         <div>
//           <h2>Kepyklų užsakymų vertinimas</h2>

//           <label htmlFor="dienosUzsakymai">Uzsakymu kiekis</label>
//           <input onChange={dienosHandler} type="number" id="dienosUzsakymai" />

//           <label htmlFor="kepyklaVienas">Pirma kepykla :</label>
//           <input onChange={pirmaHandler} type="number" id="kepyklaVienas"/>

//           <label htmlFor="kepyklaDu">Antra kepykla:</label>
//           <input onChange={antraHandler} type="number" id="kepyklaDu"/>

//           <label htmlFor="kepyklaTrys">Trecia kepykla:</label>
//           <input onChange={treciaHandler} type="number" id="kepyklaTrys"/>

//           <p>{uzsakymuVykdymas()}</p>
//         </div>
//       );

// }

// export default TrysKepyklos
