import { useState, useEffect } from "react";

import { calculateWinner } from "../../helper";

import { Board } from "../Board";
import { GameInfo } from "../GameInfo";

import './Game.styles.css';

const initialSquares = Array(9).fill(null);
const historyInitialState = [{ step: 0, squares: initialSquares }];

const Game = () => {
    const [history, setHistory] = useState(JSON.parse(localStorage.getItem('history')));
    const [stepNumber, setStepNumber] = useState(history[history.length - 1].step);
    const [xIsNext, setXisNext] = useState(true);
    const [isAscending, setIsAscending] = useState(true);

    const currentPlayer = xIsNext ? 'X' : 'O';
    const { squares } = history[stepNumber];
    const winnerResult = calculateWinner(squares);
    const winner = winnerResult?.winner || null;
    const winnerLine = winnerResult?.winnerLine || [];

    useEffect(() => {
        localStorage.setItem('history', JSON.stringify(history));
    }, [history]);

    const handleClick = (i) => () => {
        const newHistory = history.slice(0, stepNumber + 1);
        const { length } = newHistory;
        const current = newHistory[stepNumber];
        const squares = [...current.squares];

        if (winner || squares[i]) return;

        squares[i] = currentPlayer;

        setHistory(() => [...newHistory, { step: length, squares }]);
        setStepNumber(length);
        setXisNext((xIsNext) => !xIsNext);
    }

    const onRestart = () => {
        setXisNext(true);
        setHistory(historyInitialState);
        setStepNumber(0);
        setIsAscending(true);
    }

    const jumpTo = (step) => () => {
            setStepNumber(step);
            setXisNext((step % 2) === 0);
    }

    const onSorting = () => {
        setIsAscending((isAscending) => !isAscending);
    }

    return (
        <div className='game'>
            <h1 className='game-heading'>Tic Tac Toe - with React</h1>

            <Board squares={squares} onClick={handleClick} winnerLine={winnerLine} />

            <GameInfo 
              history={history}
              onRestart={onRestart}
              goToStepHistory={jumpTo}
              status={currentPlayer}
              winner={winner}
              onSorting={onSorting}
              isAscending={isAscending}
              stepNumber={stepNumber}
            />
        </div>
    )
}

export default Game;