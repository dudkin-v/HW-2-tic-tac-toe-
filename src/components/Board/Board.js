import PropTypes from 'prop-types';

import Square from '../Square/Square';

import './Board.styles.css';

const Board = ({ squares, onClick }) => (
    <div className='board'>
        {squares.map((square, index) => (
            <Square key={index} value={square} onClick={onClick(index)}/>
        ))}
    </div>
)

Board.propTypes = {
    squares: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Board;