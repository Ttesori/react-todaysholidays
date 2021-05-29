import { useEffect, useState } from 'react';
export default function HolidaysList({ holidays, searchTerm }) {
  const updateSearchTerm = (term) => {
    setShowDate(term);
  };
  useEffect(() => {
    updateSearchTerm(searchTerm);
  }, [searchTerm]);
  const [showDate, setShowDate] = useState('');
  return (
    <ul>
      {holidays.length > 0 ? holidays.map(holiday => (
        <li key={holiday._id}>
          {showDate ? `${holiday.month}/${holiday.day.toString().padStart(2, '0')}: ` : ''}
          {holiday.name}
        </li>
      )) : (<span className="not-found">Holidays Not Found</span>)}
    </ul>
  )
}
