export default function Blurb({ title, children }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  )
}
