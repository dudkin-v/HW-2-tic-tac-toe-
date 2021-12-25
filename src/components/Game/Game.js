import { useState } from "react";

import { calculateWinner } from "../../helper";

import Board from "../Board/Board";
import GameInfo from "../GameInfo/GameInfo";

import './Game.styles.css'

const initialSquares = Array(9).fill(null);
const historyInitialState = [{ step: 0, squares: initialSquares }];

const Game = () => {
    const [history, setHistory] = useState(historyInitialState);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);

    // TODO: need to rename variable
    const xO = xIsNext ? 'X' : 'O';
    const { squares } = history[stepNumber];
    const winnerResult = calculateWinner(squares);
    const winner = winnerResult?.winner || null;
    const winnerLine = winnerResult?.winnerLine || [];

    const handleClick = (i) => () => {
        const newHistory = history.slice(0, stepNumber + 1);
        const { length } = newHistory;
        const current = newHistory[stepNumber];
        const squares = [...current.squares];

        if (winner || squares[i]) return;

        squares[i] = xO;

        setHistory(() => [...newHistory, { step: length, squares }]);
        setStepNumber(length);
        setXisNext(!xIsNext);
    }

    const onRestart = () => {
        setXisNext(true);
        setHistory(historyInitialState);
        setStepNumber(0);
    }

    // TODO: Need to remove "function declaration", use arrow function
    const jumpTo = (step) => {
        return function () {
            setStepNumber(step);
            setXisNext((step % 2) === 0);
        }
    }

    return (
        <div className='game'>
            <h1 className='game-heading'>Tic Tac Toe - with React</h1>

            <Board squares={squares} onClick={handleClick} winnerLine={winnerLine} />

            <GameInfo 
              history={history} 
              onRestart={onRestart} 
              goToStepHistory={jumpTo} 
              status={xO} 
              winner={winner}
            />
        </div>
    )
}

export default Game;