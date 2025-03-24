const TrysSkaiciai = () => {
    let masyvas = [1,2,3];

    const isvedimas = (masyvas) => {
        return masyvas.join(', ');
    }
    const bendraSuma = (masyvas) => {
        return masyvas.reduce((suma, skaicius) => suma + skaicius, 0);
    }

    return (
      <div>
        <h1>Trys Skaiciai</h1>
        <p>{isvedimas(masyvas)}</p>
        <p> rastas didziausias skaisius </p>
        <p> rastas triju skaiciu suma - {bendraSuma(masyvas)} </p>
      </div>
    );
  };
  
  export default TrysSkaiciai;