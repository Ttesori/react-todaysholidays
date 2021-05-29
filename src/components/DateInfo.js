import Button from './Button';

export default function DateInfo({ date, onBtnChangeDate, onInputChangeDate }) {
  return (
    <section>
      <span>{date}</span>
      <input type="date" onChange={onInputChangeDate} className="input-date hide" />
      <Button text='Change Date' className='btn-change-date' onClick={onBtnChangeDate} />
    </section>
  )
}
