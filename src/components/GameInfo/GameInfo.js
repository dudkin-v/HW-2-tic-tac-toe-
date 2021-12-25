import PropTypes from 'prop-types';

import { getWinnerResult } from '../../helper';

import './GameInfo.styles.css'

const GameInfo = ({ history, onRestart, goToStepHistory, status, winner }) => {
    const winnerResult = getWinnerResult(winner, history, status);

    const handleClick = (move) => () => {
        if (move) {
            goToStepHistory(move)();   
        } else {
            onRestart();
        }
    }

    return (
        <div className='game-info'>
            <div className='game-history'>
                <ul>
                    {history.map((step, move) => {
                        // let desc;
                        // move !== 0 ? desc = 'Go to move #' + move : desc = 'Restart game';

                        const description = move ? `Go to move #${move}` : 'Restart game';

                        return (
                            <li key={move}>
                                <button onClick={handleClick(move)}>
                                    {description}
                                </button>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>

            <div className='game-data'>
                <h2 className='status'>
                    {winnerResult}
                </h2>
            </div>
        </div>
    )
}

// TODO: Need to add isRequired for propTypes
// TODO: Need to add specific type for "history" -> arrayOf(PropTypes.shape({ ... }))
GameInfo.propTypes = {
    history: PropTypes.array,
    onRestart: PropTypes.func,
    goToStepHistory: PropTypes.func,
    status: PropTypes.string,
    winner: PropTypes.string,
}

export default GameInfo;