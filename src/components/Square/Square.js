import React from "react";
import './style.css';

const Square = ({value, onClick}) => {
    return (
        <button className="square" onClick={onClick} disabled={value}>
            {value}
        </button>
    )
}

export default Square;