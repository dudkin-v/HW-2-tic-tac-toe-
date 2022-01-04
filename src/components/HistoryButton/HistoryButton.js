import {useEffect, useState} from "react";

import PropTypes from 'prop-types';

import './HistoryButton.style.css';

const HistoryButton = ({ onClick, description }) => {
    const [style,  setStyle] = useState('historyBtn');
    return (
        <button className={style} onClick={onClick}>
            {description}
        </button>
    )
}

HistoryButton.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default HistoryButton;