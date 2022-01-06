import PropTypes from 'prop-types';

import { HistoryButton } from '../HistoryButton';

import { getWinnerResult } from '../../helper';

import './GameInfo.styles.css'

const GameInfo = ({ history, onRestart, goToStepHistory, status, winner, sorter }) => {
    const winnerResult = getWinnerResult(winner, history, status);

    return (
        <div className='game-info'>
            <button onClick={sorter}>reverse</button>
            <div className='game-history'>
                <ul>
                    <li> <HistoryButton onClick={onRestart} description={'Restart game'}/></li>
                    {history.map((step) => step.step ? (
                        <li key={step.step}>
                            <HistoryButton onClick={goToStepHistory(step.step)} description={`Go to move #${step.step}`}/>
                        </li>
                    ) : null)}
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