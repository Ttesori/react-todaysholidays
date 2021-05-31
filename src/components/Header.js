import SearchForm from './SearchForm';

export default function Header({ onClickSearch }) {
  return (
    <header className="tih-header">
      <div className="container">
        <h1 className="tih-logo">
          <img className="logo-icon" src="/img/icon.svg" alt="" />
          <img className="logo" src="/img/logo.svg" alt="" />
          <span>Today's Holidays
        </span>
        </h1>
        <SearchForm onClickSearch={onClickSearch} />
      </div>

    </header>
  )
}


