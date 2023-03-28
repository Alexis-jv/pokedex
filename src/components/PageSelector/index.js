import './style.css';
import Button from '../Button/index.js'

export default function PageSelector({ page, onPreviousClick, onNextClick }) {
    return (
      <div className='PageSelector'>
        <Button buttonValue="&larr;" onButtonClick={() => onPreviousClick()}/>
        <input onChange={() => null} type="text" value={page}/>
        <Button buttonValue="&rarr;" onButtonClick={() => onNextClick()}/>
      </div>
    )
  }