import "./BenefitsCard.css"

const BenefitsCard = ({bnfimg,bnfti,bnfpar}) => {
  return (
    <div className="bnf-card" >
        <img src={bnfimg} alt="any" />
        <h3>{bnfti}</h3>
        <p>{bnfpar}</p>
    </div>
  )
}

export default BenefitsCard