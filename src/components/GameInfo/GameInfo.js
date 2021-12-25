import PropTypes from 'prop-types';

import './GameInfo.styles.css'

const GameInfo = ({ history, onRestart, goToStepHistory, status, winner }) => {
    return (
        <div className='game-info'>
            <div className='game-history'>
                <ul>
                    {history.map((step, move) => {
                        let desc;
                        move !== 0 ? desc = 'Go to move #' + move : desc = 'Restart game';
                        return (
                            <li key={move}>
                                <button onClick={move !== 0 ? goToStepHistory(move) : onRestart}>
                                    {desc}
                                </button>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
            <div className='game-data'>
                <h2 className='status'>
                    {history.length === 10 && !winner ? 'The game is a draw' : winner ? "Winner is: " + winner : 'Next player: ' + status}
                </h2>
            </div>
        </div>
    )
}

GameInfo.propTypes = {
    history: PropTypes.array,
    onRestart: PropTypes.func,
    goToStepHistory: PropTypes.func,
    status: PropTypes.string,
    winner: PropTypes.string,
}

export default GameInfo;