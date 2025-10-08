import Subhero from '../Subhero/Subhero'
import './Hero.css'

const Hero = ({limg,text1,ltitle,lpar,colortitle}) => {
  return (
    <div className='Hero' id='Home'>
        <div className="img">
            <img src={limg} alt="any thing" />
        </div>

        <div className="Hero-content">
            <div className="tex1">{text1}</div>
            <h1 className="ltitle">{ltitle} <span style={{color:"#FF8D4D"}}>{colortitle}</span></h1>
            <p className="lpar">{lpar}</p>
            <Subhero />
        </div>
    </div>
  )
}

export default Hero