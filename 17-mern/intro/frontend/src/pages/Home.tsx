import { useEffect, useState } from "react";

const Home = () => {
    const [pratimai, setPratimai] = useState(null);

    useEffect(() => {
        const getPratimai = async () => {
            const response = await fetch('http://localhost:4000/api/pratimai');
            const json = await response.json();

            if (response.ok) {
                setPratimai(json);
                console.log(json);
            }
        }

        getPratimai();
    }, [])

    return (
        <>
            <h1>Mano pratimai</h1>

            <table>
                <thead>
                    <tr>
                        <th>Pavadinimas</th>
                        <th>Pratimo pasikartojimai</th>
                        <th>lygis</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </>
    )
}

export default Home;