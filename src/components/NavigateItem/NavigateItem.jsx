import "./NavigateItem.css"

const NavigateItem = ({nhead,npar}) => {
  return (
    <div className="nitem">
        <h1> {nhead}</h1>
        <img src="/assets/images/line.png" alt="any" className="nimg"/>
        <p>{npar}</p>
        <button>Learn More <img src="/assets/images/sahm.png" alt="any" /></button>
    </div>
  )
}

export default NavigateItem