import { useState } from "react";

const Komp3 = () => {
  let [skaicius, setSkaiciai] = useState(0);
  // 1-budas - skaidrese sukurti 5 atskirus metodus kiekvienam mygtukui
  // 2-budas - sukurti generic metoda
  //   const onClickButtonAction = (value) => {
  //     if (value === 0) {
  //       setSkaicius(0);
  //     }
  //     setSkaiciai(skaicius + value);
  //   };

  //   return (
  //     <div>
  //       <h2>Komp3</h2>
  //       <h3>skaiciu keitinejimas</h3>
  //       <button onClick={() => onClickButtonAction(1)}>didinti vienu</button>
  //       <button onClick={() => onClickButtonAction(-1)}> mazinti vienu</button>
  //       <button onClick={() => onClickButtonAction(5)}>didinti penkiais</button>
  //       <button onClick={() => onClickButtonAction(-5)}>mazinti penkiai</button>
  //       <button onClick={() => onClickButtonAction(0)}>nustatyti 0</button>
  //       <p>dabartine reiksme:{skaicius}</p>
  //     </div>
  //   );
  // };

  //3 budas  su setValue metodu is useState hookso

  return (
    <div>
      <h2>Komp3</h2>
      <h3>skaiciu keitinejimas</h3>
      <button onClick={() => setSkaiciai(1)}>didinti vienu</button>
      <button onClick={() => setSkaiciai(-1)}> mazinti vienu</button>
      <button onClick={() => setSkaiciai(5)}>didinti penkiais</button>
      <button onClick={() => setSkaiciai(-5)}>mazinti penkiai</button>
      <button onClick={() => setSkaiciai(0)}>nustatyti 0</button>
      <p>dabartine reiksme:{skaicius}</p>
    </div>
  );
};

export default Komp3;
