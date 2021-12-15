import Square from '../Square/Square';

import './style.css'; // Need to rename

const Board = ({ squares, onClick }) => (
    <div className='board'>
        {squares.map((square, index) => (
            <Square key={index} value={square} onClick={() => onClick(index)}/> // () => onClick={onClick(index)} - каррирование
        ))}
    </div>
)

// Need to add PropTypes

export default Board;