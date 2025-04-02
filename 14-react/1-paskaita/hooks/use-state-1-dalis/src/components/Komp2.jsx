import { useState } from "react";

const Komp2 = () => {
  let zodziai = ["labas", "rytas", "Lietyva", "sakau", "tau"];
  let [istrauktas, setIstrauktas] = useState("Cia random zodis bus");

  const gautiRandomZodi = () => {
    let randomIndex = Math.floor(Math.random() * zodziai.length);

    setIstrauktas(zodziai[randomIndex]);
  };

  return (
    <div>
      <h2>Komp2</h2>
      <h3>Random zodis</h3>
      <button onClick={gautiRandomZodi}>Traukti</button>
      <p>
        Istraukem: <strong>{istrauktas}</strong>
      </p>
    </div>
  );
};

export default Komp2;
