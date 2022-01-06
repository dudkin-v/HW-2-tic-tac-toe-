import PropTypes from 'prop-types';

import './HistoryButton.style.css';

const HistoryButton = ({ onClick, description, style }) => {
    return (
        <button className={style ? 'currentBtn' : 'historyBtn'} onClick={onClick}>
            {description}
        </button>
    )
}

HistoryButton.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default HistoryButton;