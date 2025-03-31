import Delione from "./Delione";

const HobiuParduotuve = () => {
  let Delione1 = [
    {
      pavadinimas: "Dziungles",
      detaliuKiekis: "500",
      plotis: "20cm",
      aukstis: "20cm",
    },
    {
      pavadinimas: "Karalyste",
      detaliuKiekis: "1500",
      plotis: "40cm",
      aukstis: "40cm",
    },
    {
      pavadinimas: "Dziumbrynai",
      detaliuKiekis: "2500",
      plotis: "60cm",
      aukstis: "60cm",
    },
  ];

  return (
    <div>
      <h1>Deliones</h1>
      {Delione1.map((delione, i) => (
        <Delione key={i} delione={delione} />
      ))}
    </div>
  );
};

export default HobiuParduotuve;
