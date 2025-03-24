// TODO: prijunkite šį komponentą prie App.jsx

const Komp4 = () => {
    let filmas = {
        pavadinimas: 'Pulp Fiction',
        rezisierius: 'Quentin Tarantino',
        metai: 1994,
    };

    return (
        // TODO: į šio komponento div įstatykite
        // filmo pavadinimą, režisierių ir metus
        <div>
            <h1>Komp4</h1>
                <p>Filmo pavadinimas: {filmas.pavadinimas}</p>
                <p>Filmo režisierius: {filmas.rezisierius}</p>
                <p>Filmo metai: {filmas.metai}</p>
        </div>
    )
}

export default Komp4
