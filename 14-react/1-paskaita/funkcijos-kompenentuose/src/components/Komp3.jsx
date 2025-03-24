import { averageArray } from "../utils/calculator";

const Komp3 = () => {
    let studentai = [
        {id: 1, name: 'Jonas', grades: [4, 6, 2, ]},
        {id: 2, name: 'Petras', grades: [5, 8, 7, 9]},
        {id: 3, name: 'Eva', grades: [9, 8, 7, 9]},
        {id: 4, name: 'Mindaugas', grades: [7, 8, 7, 9]}
    ]
    let minGoodGradeValue = 4.5;
    return (
        <div>
            <h1>Studentai:</h1>
            <table border="1">
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Grades avg</th>
                    <th>Is good?</th>
                </thead>
                <tbody>
                    {
                        studentai.map(studentas => {
                            return <tr key={studentas.id}>
                                <td>{studentas.id}</td>
                                <td>{studentas.name}</td>
                                <td>{averageArray(studentas.grades)}</td>
                                <td>{averageArray(studentas.grades) >= minGoodGradeValue ? 'Taip' : 'Ne'}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Komp3;