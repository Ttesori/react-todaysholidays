import { useRef } from 'react';
import Button from './Button';

export default function SearchForm({ onClickSearch }) {
  const txtSearch = useRef('');

  const handleSearch = (e) => {
    onClickSearch(e, txtSearch);
  }
  return (
    <form className="tih-search">
      <label className="label-search">Search</label>
      <input ref={txtSearch} type="text" id="text-search" className="form-control" placeholder="Enter search terms here..." />
      <Button
        className="btn-search"
        onClick={handleSearch}><i className="fas fa-search"></i></Button>
    </form>
  )
}

