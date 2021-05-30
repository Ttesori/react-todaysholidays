import SearchForm from './SearchForm';

export default function Header({ onClickSearch }) {
  return (
    <header className="tih-header">
      <h1 className="tih-logo">
        <img src="/img/icon.svg" alt="" width='50' height='50' />
        Today's Holidays</h1>
      <SearchForm onClickSearch={onClickSearch} />
    </header>
  )
}


