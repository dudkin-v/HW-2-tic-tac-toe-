import React, {useState, useEffect} from "react";
import Board from "../Board/Board";
import './style.css'
import GameInfo from "../Game Info/Game-Info";

const initialState = Array(9).fill(null);
const historyInitialState = [{step: 0, squares: initialState}];

const Game = () => {
    const [squares, setSquares] = useState(initialState);
    const [xIsNext, setXisNext] = useState(true);
    const [history, setHistory] = useState(historyInitialState);

    const handleClick = (index) => {
        const newSquares = squares.map((el, i) => {
            if (i === index) {
                return xIsNext ? 'X' : 'O';
            }
            return el;
        })


        setHistory([...history, {step: history.length, squares: newSquares}]);
        setSquares(newSquares);
        setXisNext(!xIsNext);
    }

    const onRestart = () => {
        setSquares(initialState);
        setXisNext(true);
        setHistory(historyInitialState);
    }

    const goToStepHistory = (squares) => {
        setSquares(squares)
    }


    return (
        <div className='game'>
            <h1 className='game-heading'>Tic Tac Toe - with React</h1>
            <Board squares={squares} onClick={handleClick}/>
            <GameInfo history={history} onRestart={onRestart} goToStepHistory={goToStepHistory}/>

        </div>

    )
}

export default Game;