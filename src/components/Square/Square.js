import PropTypes from 'prop-types';

import './Square.style.css';

const Square = ({ value, onClick, isWinner }) => {
    return (
        <button className={`square ${isWinner ? 'winner-square' : ''}`} onClick={onClick}>
            {value}
        </button>
    )
}

Square.propTypes = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isWinner: PropTypes.bool.isRequired,
}

export default Square;