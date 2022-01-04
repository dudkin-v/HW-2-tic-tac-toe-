import PropTypes from 'prop-types';

import { HistoryButton } from '../HistoryButton';

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
                                <HistoryButton onClick={handleClick(move)} description={description} />
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
    history: PropTypes.arrayOf(PropTypes.object).isRequired,
    onRestart: PropTypes.func.isRequired,
    goToStepHistory: PropTypes.func.isRequired,
    status: PropTypes.string.isRequired,
    winner: PropTypes.string,
}

export default GameInfo;