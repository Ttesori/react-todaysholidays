import Button from './Button';

export default function DateInfo({ date, onBtnChangeDate, onInputChangeDate, yyyy }) {
  const onDateInputBlur = () => {
    const dateInputEl = document.querySelector('.input-date');
    const dateBtnEl = document.querySelector('.btn-change-date');
    dateInputEl.classList.toggle('hide');
    dateBtnEl.classList.toggle('hide');
    document.querySelector('.date-text').classList.remove('hide-sm');
  }
  return (
    <div className="container">
      <section className="date-info">
        <span className="date-text">{date}</span>
        <input type="date" onChange={onInputChangeDate} onBlur={onDateInputBlur} className="btn input-date hide" aria-label="Choose a Date" value={yyyy} />
        <Button className='btn btn-change-date' onClick={onBtnChangeDate}>Change Date</Button>
      </section>
    </div>

  )
}
