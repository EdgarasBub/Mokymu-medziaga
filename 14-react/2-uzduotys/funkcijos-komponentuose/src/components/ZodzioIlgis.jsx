const Komp1 = () => {

    let zodis = 'Labas';

    let zodzioIlgis = (zodis) => {
        return zodis.length;
    }

    return (
      <div>
        <h1>Zodzio Ilgos</h1>
        <p>Stebuklingas zodis:{zodis}</p>
        <p>Stebuklingas zodio ilgis:{zodzioIlgis(zodis)} simboliai </p>
      </div>
    );
  };
  
  export default Komp1;