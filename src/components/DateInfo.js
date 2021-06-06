import Button from './Button';
import { useState, useRef } from 'react';

export default function DateInfo({ date, onInputChangeDate, yyyy }) {
  const inputDateEl = useRef();
  const [dateTextHidden, setDateTextHidden] = useState(false);
  const [dateInputHidden, setDateInputHidden] = useState(true);
  const [dateBtnHidden, setDateBtnHidden] = useState(false);
  const handleDateInputBlur = () => {
    setDateTextHidden(!dateTextHidden);
    setDateInputHidden(!dateInputHidden);
    setDateBtnHidden(!dateBtnHidden);
  }

  const handleInputOnChange = (e) => {

    setDateInputHidden(true);
    //inputDateEl.classList.add('hide');
    // document.querySelector('.btn-change-date').classList.remove('hide');
    // document.querySelector('.date-text').classList.remove('hide-sm');
    setDateBtnHidden(false);
    setDateTextHidden(false);
    onInputChangeDate(e, inputDateEl);
  }

  const handleButtonClick = (e) => {
    e.preventDefault();
    setDateTextHidden(!dateTextHidden);
    setDateInputHidden(!dateInputHidden);
    setDateBtnHidden(!dateBtnHidden);
  }
  return (
    <div className="container">
      <section className="date-info">
        <span className={dateTextHidden ? 'date-text hide-sm' : 'date-text'}>{date}</span>
        <input type="date"
          ref={inputDateEl}
          onChange={handleInputOnChange}
          onBlur={handleDateInputBlur}
          className={dateInputHidden ? 'btn input-date hide' : 'btn input-date'}
          aria-label="Choose a Date" value={yyyy} />
        <Button
          className={dateBtnHidden ? 'btn btn-change-date hide' : 'btn btn-change-date'}
          onClick={handleButtonClick}>Change Date</Button>
      </section>
    </div>

  )
}
