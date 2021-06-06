
export default function Button({ className, onClick, children }) {

  const handleOnClick = (e) => {
    onClick(e);
  }
  return (
    <button className={`btn ${className}`} onClick={handleOnClick}>
      {children}
    </button>
  )
}
