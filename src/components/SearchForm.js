import Button from './Button';

export default function SearchForm({ onClickSearch }) {
  return (
    <form>
      <label className="label-search">Search</label>
      <input type="text" id="text-search" placeholder="Enter search terms here..." />
      <Button text="Search" className="btn-search" onClick={onClickSearch} />
    </form>
  )
}

