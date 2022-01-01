import PropTypes from 'prop-types';

import { Square } from '../Square';

import './Board.styles.css';

const Board = ({ squares, onClick, winnerLine }) => (
    <div className='board'>
        {squares.map((square, index) => {
            const isWinnerSquare = winnerLine.includes(index);

            return (
                <Square key={index} value={square} onClick={onClick(index)} isWinner={isWinnerSquare} />
            )})
        }
    </div>
)

Board.propTypes = {
    squares: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClick: PropTypes.func.isRequired,
    winnerLine: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default Board;