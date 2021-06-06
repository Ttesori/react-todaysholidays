import Button from './Button';

export default function SearchHeader({ onBackBtn }) {
  return (
    <div className="container">
      <div className="date-info">
        <Button className="btn-back" onClick={onBackBtn}>
          <i className="fas fa-long-arrow-alt-left"></i>
              Back to Today's Holidays
              </Button>
      </div>
    </div>
  )
}
