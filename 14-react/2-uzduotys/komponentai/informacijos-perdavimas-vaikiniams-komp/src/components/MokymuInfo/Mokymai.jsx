import Modulis from "./Modulis";

const Mokymai = () => {
  const moduliai = [
    { pavadinimas: "HTML", trukme: 20 },
    { pavadinimas: "CSS", trukme: 30 },
    { pavadinimas: "JavaScript", trukme: 50 },
    { pavadinimas: "React", trukme: 40 },
    { pavadinimas: "Node.js", trukme: 35 },
  ];

  return (
    <div>
      <h2>Mokymų programą</h2>
      <ul>
        {moduliai.map((modulis, index) => (
          <li key={index}>
            <Modulis modulis={modulis} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mokymai;
