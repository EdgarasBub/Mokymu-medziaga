import React from "react";
import { Button } from "react-bootstrap";


const Score = ({score, restartButtonClick}) => (
    <div>
        <h2>Quiz completed</h2>
        <p>score: {score}</p>
        <Button onClick={restartButtonClick}>Restart</Button>
    </div>
);

export default Score;
