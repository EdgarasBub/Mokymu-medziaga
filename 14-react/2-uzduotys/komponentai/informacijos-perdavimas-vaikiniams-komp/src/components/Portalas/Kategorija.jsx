import Naujiena from "./Naujiena";

const Kategorija = () => {
  let naujienos = [
    {
      naujiena: "karsti kebabai",
      perziuruKiekis: "13215",
      tekstukas: "kazkiek tekstuko",
    },
    {
      naujiena: "salti kugekiai",
      perziuruKiekis: "5132",
      tekstukas: "kazkiek tekstuko2",
    },
    {
      naujiena: "cepelinukai",
      perziuruKiekis: "22516",
      tekstukas: "kazkiek tekstuko3",
    },
  ];

  return (
    <div>
      <h1>Portalo skaitimai</h1>
      <div>
        {naujienos.map((nauj, index) => (
          <Naujiena key={index} value={nauj} />
        ))}
      </div>
    </div>
  );
};

export default Kategorija;
