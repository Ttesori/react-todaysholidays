import { useEffect, useState } from 'react';
export default function HolidaysList({ holidays, searchTerm }) {
  const updateSearchTerm = (term) => {
    if (term) document.querySelector('.tih-holidays-list').classList.toggle('search-results');
    setShowDate(term);
  };
  useEffect(() => {
    updateSearchTerm(searchTerm);
  }, [searchTerm]);
  const [showDate, setShowDate] = useState('');
  return (
    <ul className="tih-holidays-list">
      {holidays.length > 0 ? holidays.map(holiday => (
        <li key={holiday._id}>
          {
            showDate ?
              <span className="search-date">{holiday.month}/{holiday.day.toString().padStart(2, '0')}</span>
              : ''
          }
          <span>
            {holiday.name}
            <a href={`https://www.google.com/search?q=${encodeURIComponent(holiday.name)}`}
              target="_blank"
              rel="noreferrer"
              title={`Learn more about ${holiday.name}`}
            >
              <i className="fas fa-external-link-alt"></i>
            </a></span>
        </li>
      )) : (<span className="not-found">Holidays Not Found</span>)}
    </ul>
  )
}
