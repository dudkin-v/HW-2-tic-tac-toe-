import './style.css'; // Need to rename

const GameInfo = ({ history, onRestart, goToStepHistory }) => {
    return (
        <div className='game-info'>
            <button className='restart-btn' onClick={onRestart}>
                Restart game
            </button>

            <ul>
                {history.map((step, move) => {
                    const desc = move ?
                        'Go to move #' + move :
                        'Go to game start';

                    return (
                        <li key={move}>
                            {/* Currying - onClick={goToStepHistory(move)} */}
                            <button onClick={() => goToStepHistory(move)}>
                                {desc}
                            </button>
                        </li>
                        
                    )})
                }
            </ul>
        </div>

    )
}

// PropTypes

export default GameInfo;