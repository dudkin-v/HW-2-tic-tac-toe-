import './style.css';  // Need to rename

const Square = ({ value, onClick }) => {
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    )
}

// PropTypes

export default Square;