import PropTypes from 'prop-types';

import './HistoryButton.style.css';

const HistoryButton = ({ onClick, description, isCurrent }) => {
    return (
        <button className={`historyBtn ${isCurrent ? 'currentBtn' : ''}`} onClick={onClick}>
            {description}
        </button>
    )
}

HistoryButton.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default HistoryButton;