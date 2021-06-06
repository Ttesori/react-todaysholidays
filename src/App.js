import { useState, useEffect } from 'react';
import Header from './components/Header';
import DateInfo from './components/DateInfo';
import HolidaysList from './components/HolidaysList';
import Aside from './components/Aside'
import Footer from './components/Footer';
import PageHeader from './components/PageHeader';
import SearchHeader from './components/SearchHeader';
const URL_BASE = 'https://todaysholidaysapi.com/holidays'

function App() {
  const getHolidays = async (month, day) => {
    const data = await fetch(`${URL_BASE}/${month}/${day}`);
    const results = await data.json();
    return results;
  };
  const searchHolidays = async (searchTerm) => {
    const data = await fetch(`${URL_BASE}/search?s=${searchTerm}`);
    const results = await data.json();
    return results;
  };
  const onClickSearch = async (e, txtSearch) => {
    e.preventDefault();
    const searchTerm = txtSearch.current.value;
    if (searchTerm) {
      txtSearch.current.value = '';
      setSearchTerm(searchTerm);
      const results = await searchHolidays(searchTerm);
      setHolidays(results);
    }
  }

  const onInputChangeDate = async (e, inputDateEl) => {
    const dateInfo = getDateInfo(e.target.value);
    inputDateEl.current.value = dateInfo.yyyy;
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
      day,
      yyyy: `${year}-${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`
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
      { searchTerm ?
        <SearchHeader onBackBtn={onBackBtn} /> :
        <DateInfo date={holidaysDate.formattedDate} onInputChangeDate={onInputChangeDate} yyyy={holidaysDate.yyyy} />}
      <div className="container main-container">
        <main className="tih-main">
          <PageHeader searchTerm={searchTerm} />
          <HolidaysList holidays={holidays} searchTerm={searchTerm} />
        </main>
      </div>
      <Aside />
      <Footer />
    </>
  );
}

export default App;
