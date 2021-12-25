import PropTypes from 'prop-types';

import './Square.style.css';

const Square = ({ value, onClick }) => {
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    )
}

// TODO: Need to add isRequired for propTypes
Square.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func,
}

export default Square;