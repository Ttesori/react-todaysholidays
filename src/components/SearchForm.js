import Button from './Button';

export default function SearchForm({ onClickSearch }) {
  return (
    <form className="tih-search">
      <label className="label-search">Search</label>
      <input type="text" id="text-search" className="form-control" placeholder="Enter search terms here..." />
      <Button
        className="btn-search"
        onClick={onClickSearch}><i className="fas fa-search"></i></Button>
    </form>
  )
}

