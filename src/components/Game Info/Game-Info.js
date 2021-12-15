import React from "react";
import Game from "../Game/Game";
import './style.css'

const GameInfo = ({history, onRestart, goToStepHistory}) => {
    return (
        <div className='game-info'>
            <button className='restart-btn' onClick={onRestart}>
                Restart game
            </button>
            <ul>
                {
                    history.map(it => (
                        <button onClick={() => goToStepHistory(it.squares)}>
                            {
                                it.step === 0 ? <p>Go to start</p> : <p>Go to move #{it.step}</p>
                            }
                        </button>
                    ))
                }
            </ul>
        </div>

    )
}

export default GameInfo;