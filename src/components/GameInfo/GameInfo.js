import PropTypes from 'prop-types';

import { getWinnerResult } from '../../helper';

import './GameInfo.styles.css';

const GameInfo = ({ history, onRestart, goToStepHistory, status, winner, sorting, isAscending, stepNumber }) => {
    const winnerResult = getWinnerResult(winner, history, status);

    return (
        <div className='game-info'>
            <button className={'sortingBtn'} onClick={sorting}>
                {isAscending ? '▼' : '▲'}
            </button>
            <div className='game-history'>
                <ul>
                    <li>
                        <button className={'restartBtn'} onClick={onRestart}>Restart game</button>
                    </li>
                    {isAscending ?
                        history.map((step) => step.step ? (
                        <li key={step.step}>
                            <button className={`historyBtn ${step.step === stepNumber ? 'currentBtn' : ''}`}
                            onClick={goToStepHistory(step.step)}>
                                Go to move #{step.step}
                            </button>
                        </li>
                    ) : null
                    ) :
                        [...history].reverse().map((step) => step.step ? (
                        <li key={step.step}>
                            <button className={`historyBtn ${step.step === stepNumber ? 'currentBtn' : ''}`}
                                    onClick={goToStepHistory(step.step)}>
                                Go to move #{step.step}
                            </button>
                        </li>
                    ) : null
                    )}
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