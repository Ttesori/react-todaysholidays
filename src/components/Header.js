import SearchForm from './SearchForm';

export default function Header({ onClickSearch }) {
  return (
    <header>
      <h1>Today's Holidays</h1>
      <SearchForm onClickSearch={onClickSearch} />
    </header>
  )
}


