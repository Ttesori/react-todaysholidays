export default function Blurb({ title, children }) {
  return (
    <div className="tih-blurb">
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  )
}
