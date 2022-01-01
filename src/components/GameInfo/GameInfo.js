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

GameInfo.propTypes = {
    history: PropTypes.shape({
        step: PropTypes.number,
        squares: PropTypes.arrayOf(PropTypes.string)
    }).isRequired,
    onRestart: PropTypes.func.isRequired,
    goToStepHistory: PropTypes.func.isRequired,
    status: PropTypes.string.isRequired,
    winner: PropTypes.string.isRequired,
}

export default GameInfo;