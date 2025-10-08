import "./Sections.css"

const Sections = ({start,head ,talk}) => {
  return (
    <div className="section-parent">
      <div className="Sections">
      <p className="start">{start}</p>
      <h1>{head}</h1>
      <p className="section-par">{talk}</p>
    </div>
    </div>
  )
}

export default Sections