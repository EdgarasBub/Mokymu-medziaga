import { useRef, useState } from "react"
import {useNavigate } from "react-router-dom"
import Toast from 'react-bootstrap/Toast';

const CreateTask = () => {

    // REF yra naudojamas norint gauti prieiga prie DOM elemento, kuris yra sukurtas React komponento metu
    // useRef yra React hook, kuris leidžia sukurti ref objektą, kuris
    // išlieka nuoseklus tarp komponento atnaujinimų
    const [error,setError] = useState(null)
    const titleRef = useRef(null);
    const repsRef = useRef(null);
    const levelRef = useRef(null);
    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(false);

    const onCreateButtonClick = async () => {
        if(titleRef.current.value || repsRef.current.value || levelRef.current.value) {
        const response = await fetch('http://localhost:4000/api/pratimai', {
            method: 'POST',
            body: JSON.stringify({
                title: titleRef.current.value,
                reps: repsRef.current.value,
                level: levelRef.current.value
            }),
            headers: {'Content-Type': 'application/json'}
        })
        const data = await response.json();
        if (data.error) {
            setError(data.error.message);
            return;
        }
        if (response.ok) {
            setShowToast(true)

            navigate('/')
        }
    }
};

    return (
        <>
        <div className="taskCreateContainer">
            {error && <h2 className="errorMsg">{error}</h2>}
            <form>
                <label htmlFor="title"> Pavadinimas</label>
                <input ref={titleRef} type="text" name="title" />

                <br />

                <label htmlFor="title"> Pratimo pasikartojimai</label>
                <input ref={repsRef} type="number" name="reps" />

                <br />

                <label htmlFor="title"> Lygis</label>
                <input ref={levelRef} type="number" name="level"/>

                <br />

                <button type="button" onClick={onCreateButtonClick}>Sukurti nauja pratima</button>
            </form>
        </div>

            <Toast 
                className="toastPosition"
                bg="success" onClose={() => setShowToast(false)}
                show={showToast} 
                delay={2000} 
                autohide
            >
                <Toast.Header>
                    Sekmingai ivykdyta operacija
                </Toast.Header>
                <Toast.Body>
                    <strong>Pridejome nauja pratima</strong>
                </Toast.Body>
            </Toast>
        </>
    )

}
export default CreateTask