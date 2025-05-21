import { useState } from "react";

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([...Array(6)]);
    const [history, setHistory] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const [usedKeys, setUsedKeys] = useState({});

    const formatGuess = () => {
        const solutionArray = [...solution];

        // foreach -> map
        const formattedGuess = [...currentGuess].map((letter, index) => ({
        key: letter,
        color: 
            solutionArray[index] === letter
            ? (solutionArray[index] = null, 'green')
            : solutionArray.includes(letter)
                ? (solutionArray[solutionArray.indexOf(letter)] = null, 'yellow')
                : 'grey'
        }));
        return formattedGuess;
    }

    const addNewGuess = (formattedGuess) => {
        if (currentGuess === solution) {
            setIsCorrect(true);
        }

        setGuesses((prev) => {
            const newGuesses = [...prev];
            newGuesses[turn] = formattedGuess;

            return newGuesses;
        });

        setHistory((prev) => [...prev, currentGuess]);
        setTurn((prev) => prev + 1);
        setCurrentGuess('');
        setUsedKeys((prev) => {
            let newKeys = {...prev};


            formattedGuess.forEach((letter) => {
                newKeys[letter.key] = letter.color
            });
            return newKeys;
        })
    }

    const handleKeyup = ({key}) => {
        if (key === 'Enter') {
            if (
                turn > 5 ||
                history.includes(currentGuess) ||
                currentGuess.length !== 5
            ) {
                return;
            }

            const formatted = formatGuess();
            addNewGuess(formatted)
            console.log(formatted);
        }

        if (key === 'Backspace') {
            setCurrentGuess((prev) => prev.slice(0, -1));

            return;
        }

        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess((prev) => prev + key);
            }
            return;
        }
    }

    const resetGame = () => {
        setTurn(0);
        setCurrentGuess('');
        setGuesses([...Array(6)]);
        setHistory([]);
        setIsCorrect(false);
        setUsedKeys({});
    }

    return ({turn, currentGuess, guesses, isCorrect,usedKeys, resetGame ,handleKeyup})
};

export default useWordle;