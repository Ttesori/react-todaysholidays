import { useState, useEffect } from 'react';
import Header from './components/Header';
import DateInfo from './components/DateInfo';
import HolidaysList from './components/HolidaysList';
import Aside from './components/Aside'
import Footer from './components/Footer';
import Button from './components/Button';

function App() {

  const getHolidays = async (month, day) => {
    const data = await fetch(`https://todaysholiday.herokuapp.com/holidays/${month}/${day}`);
    const results = await data.json();
    return results;
  };
  const searchHolidays = async (searchTerm) => {
    const data = await fetch(`https://todaysholiday.herokuapp.com/holidays/search?s=${searchTerm}`);
    const results = await data.json();
    return results;
  };
  const onClickSearch = async (e) => {
    e.preventDefault();
    const searchTerm = document.getElementById('text-search').value;
    if (searchTerm) {
      document.getElementById('text-search').value = '';
      setSearchTerm(searchTerm);
      const results = await searchHolidays(searchTerm);
      setHolidays(results);
    }
  }
  const onChangeDate = (e) => {
    e.preventDefault();
    // Show picker
    document.querySelector('.input-date').classList.toggle('hide');
    // Hide button
    document.querySelector('.btn-change-date').classList.toggle('hide');
  }
  const onInputChangeDate = async (e) => {
    // Update shown holidays
    document.querySelector('.input-date').classList.toggle('hide');
    // Hide button
    document.querySelector('.btn-change-date').classList.toggle('hide');
    const dateInfo = getDateInfo(e.target.value);
    setHolidaysDate(dateInfo);
    const data = await getHolidays(dateInfo.month, dateInfo.day);
    setHolidays(data);
  }
  const onBackBtn = async () => {
    setSearchTerm('');
    const dateDeets = getDateInfo();
    const data = await getHolidays(dateDeets.month, dateDeets.day);
    setHolidays(data);
  }
  const getDateInfo = (strDate = new Date()) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const now = new Date(strDate);
    const month = now.getUTCMonth();
    const day = now.getUTCDate();
    const year = now.getFullYear();
    return {
      formattedDate: `${months[month]} ${day}, ${year}`,
      month: month + 1,
      day
    }
  }
  const [holidays, setHolidays] = useState([]);
  const [holidaysDate, setHolidaysDate] = useState(getDateInfo(new Date()));
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    const fetchHolidays = async (month, day) => {
      const data = await getHolidays(month, day);
      setHolidays(data);
    }
    const dateDeets = getDateInfo();
    fetchHolidays(dateDeets.month, dateDeets.day);
  }, []);

  return (
    <>
      <Header onClickSearch={onClickSearch} />
      {searchTerm ? (<Button text="Back to Today's Holidays" className="btn-back" onClick={onBackBtn} />) : (
        <DateInfo date={holidaysDate.formattedDate} onBtnChangeDate={onChangeDate} onInputChangeDate={onInputChangeDate} />)}
      <h1>{searchTerm ? `Results for ${searchTerm}` : 'Celebrate! Today IS a holiday!'}</h1>
      <HolidaysList holidays={holidays} searchTerm={searchTerm} />
      <Aside />
      <Footer />
    </>
  );
}

export default App;
