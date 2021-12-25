import PropTypes from 'prop-types';

import './Square.style.css';

const Square = ({ value, onClick, isWinner }) => {
    return (
        <button className={`square ${isWinner ? 'winner-square' : ''}`} onClick={onClick}>
            {value}
        </button>
    )
}

// TODO: Need to add isRequired for propTypes
Square.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func,
    isWinner: PropTypes.bool.isRequired,
}

export default Square;