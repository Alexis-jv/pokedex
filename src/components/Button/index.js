import './style.css';

export default function Button({ buttonValue, onButtonClick }) {
    return (
        <button className='Button' onClick={onButtonClick}>{buttonValue}</button>
    )
}