import { use, useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";

const Wordle = ({solution, getNewWord}) => {
    const {currentGuess, handleKeyup, turn, guesses,usedKeys, isCorrect, resetGame} = useWordle(solution);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup);

        if(isCorrect || turn > 5) {
            'keyup',
            handleKeyup
        }

        return () => window.removeEventListener(
                'keyup',
                handleKeyup
            );
    },[handleKeyup, isCorrect, turn])

    const onNewGameClickHandler = () => {
        getNewWord();
        resetGame();
    }

    return (
        <>
            { isCorrect && <h3 className="won-title">Congratulations! You guessed the word!</h3>}
            { turn > 5  && <h3 className="lost-title">Sorry, you lost! The word was {solution}</h3>}
            { (isCorrect || turn > 5) && <button onClick={onNewGameClickHandler}> Start new game</button>}
            { !isCorrect && turn <= 5 && <h3>current guess --- {currentGuess}  </h3> }
            <Grid
                currentGuess={currentGuess}
                guesses={guesses}
                turn={turn}
            />
            <Keypad usedKeys={usedKeys}/>
        </>  
    )
}
export default Wordle;