import { useState, useEffect } from "react";

import { calculateWinner } from "../../helper";

import { Board } from "../Board";
import { GameInfo } from "../GameInfo";

import './Game.styles.css';

const initialSquares = Array(9).fill(null);
const historyInitialState = [{ step: 0, squares: initialSquares }];

const Game = () => {
    const [history, setHistory] = useState(historyInitialState);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);

    const currentPlayer = xIsNext ? 'X' : 'O';
    const { squares } = history[stepNumber];
    const winnerResult = calculateWinner(squares);
    const winner = winnerResult?.winner || null;
    const winnerLine = winnerResult?.winnerLine || [];
    const [sort, setSort] = useState(false);
    const [gameInfoHistory, setGameInfoHistory] = useState(historyInitialState);

    useEffect(() => {
        const storageHistory = localStorage.getItem('history') || [];
        setHistory(JSON.parse(storageHistory));
    }, []);

    useEffect(() => {
        localStorage.setItem('history', JSON.stringify(history));
        setGameInfoHistory(history);
    }, [history]);

    useEffect(() => {
        setGameInfoHistory(sort ? [...history].reverse() : history);
    }, [sort, history]);

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
    }

    const jumpTo = (step) => () => {
            setStepNumber(step);
            setXisNext((step % 2) === 0);
    }

    const sorter = () => {
        setSort((sort) => !sort);
    }

    return (
        <div className='game'>
            <h1 className='game-heading'>Tic Tac Toe - with React</h1>

            <Board squares={squares} onClick={handleClick} winnerLine={winnerLine} />

            <GameInfo 
              history={gameInfoHistory}
              onRestart={onRestart} 
              goToStepHistory={jumpTo} 
              status={currentPlayer}
              winner={winner}
              sorter={sorter}
              sort={sort}
            />
        </div>
    )
}

export default Game;