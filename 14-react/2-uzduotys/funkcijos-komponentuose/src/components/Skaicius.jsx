const Skaicius = () => {

    let skaicius = 57;

    const arTeigiamas = (skaicius) => {
        if (skaicius > 0) {
            return "Skaičius yra teigiamas";
        } else if (skaicius < 0) {
            return "Skaičius yra neigiamas";
        } else {
            return "Skaičius yra lygus nuliui";
        }
    };

    const arLyginis = (skaicius) => {
        return skaicius % 2 === 0 ? "Taip" : "Ne"; // Grąžiname "Taip", jei lyginis, ir "Ne", jei nelyginis
    };
    return (
      <div>
        <h1>Skaiciai</h1>
        <p>{skaicius}</p>
        <p> ar lyginis - {arLyginis(skaicius)}</p>
        <p>ar teigiamas - {arTeigiamas(skaicius)}</p>

      </div>
    );
  };
  
  export default Skaicius;