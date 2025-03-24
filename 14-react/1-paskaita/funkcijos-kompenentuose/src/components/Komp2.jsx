const Komp2 = () => {
    let skaiciai = [10, 120, 2, 45];

    const didziausiasSk = (mas) => {
        // ciklas begam per masyva ir ieskom didziausio skaiciaus
        return Math.max(...mas)
    }
    const maziausiasSk = (mas) => {
        return Math.min(...mas)
    }
    const vidurkisSk = (mas) => {
        return (mas.reduce((suma, skaicius) => suma + skaicius, 0)) / mas.length;
       }
    return (
        <div>
            Skaiciai
            <p>{skaiciai.join(', ')}</p>
            <p>Didziausias skaicius yra: <strong>{didziausiasSk(skaiciai)}</strong></p>
            <p>Maziausias skaicius yra: <strong>{maziausiasSk(skaiciai)}</strong></p>
            <p>Skaiciu vidurkis yra: {vidurkisSk(skaiciai)}</p>

        </div>
    )
}

export default Komp2;