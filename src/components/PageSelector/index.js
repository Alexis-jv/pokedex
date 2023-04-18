import "./style.css";
import Button from "../Button/index.js";

export default function PageSelector({ page, onArrowClick, onPageChange }) {
  function handleChange(event) {
    onPageChange(event.target.value);
  }
  return (
    <div className="PageSelector">
      <Button buttonValue="&lt;" onButtonClick={() => onArrowClick(-1)} />
      <input type="text" onChange={handleChange} value={page} />
      <Button buttonValue="&gt;" onButtonClick={() => onArrowClick(1)} />
    </div>
  );
}
