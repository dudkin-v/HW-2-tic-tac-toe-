import { useState } from "react";

import { calculateWinner } from '../../helper';

import Board from "../Board/Board";
import GameInfo from "../GameInfo/GameInfo";

import './Game.styles.css';

const initialSquares = Array(9).fill(null);
const historyInitialState = [{ step: 0, squares: initialSquares }];

const Game = () => {
    const [xIsNext, setXisNext] = useState(true);
    const [history, setHistory] = useState(historyInitialState);
    const [stepNumber, setStepNumber] = useState(0);

    const handleClick = (i) => {
        const newHistory = history.slice(0, stepNumber + 1);
        const { length } = newHistory;

        const current = newHistory[length - 1];
        const squares = [...current.squares];

        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = xIsNext ? "X" : "O";

        setHistory(prevState => [...prevState, { step: length, squares }])
        setStepNumber(length);
        setXisNext(!xIsNext);
    }

    const onRestart = () => {
        setXisNext(true);
        setHistory(historyInitialState);
        setStepNumber(0);
    }

    const jumpTo = (step) => {
        setStepNumber(step);
        setXisNext((step % 2) === 0);
    }


    const { squares } = history[stepNumber];

    return (
        <div className='game'>
            <h1 className='game-heading'>Tic Tac Toe - with React</h1>
            <Board squares={squares} onClick={handleClick} />
            <GameInfo history={history} onRestart={onRestart} goToStepHistory={jumpTo} />
        </div>

    )
}

export default Game;