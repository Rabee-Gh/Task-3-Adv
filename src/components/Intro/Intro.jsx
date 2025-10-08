import "./Intro.css"

const Intro = ({inti,inth,intp}) => {
  return (
    <div className="intro">
        <img src="/assets/images/intro.png" alt="any" />
        <div className="intro-ss">
        <div className="intro-left">
            <p>{inti}</p>
            <h1>{inth}</h1>
        </div>
        <div className="intro-right">
            <p>{intp}</p>
        </div>
        </div>
    </div>
  )
}

export default Intro