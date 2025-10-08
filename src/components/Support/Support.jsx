import BenefitsCard from "../BenefitsCard/BenefitsCard"
import "./Support.css"
const Support = () => {
  return (
    <div className="Benefits" >
        <BenefitsCard bnfimg="/assets/images/award3.png" bnfti="Counseling" bnfpar="Professional counselors offer guidance and support to students, addressing their emotional and social well-being."/>
        <BenefitsCard bnfimg="/assets/images/Icon Container.png" bnfti="Learning Support" bnfpar="Our educators provide additional assistance to students who may require extra support in their academic journey."/>
        <BenefitsCard bnfimg="/assets/images/Icon Container (3).png" bnfti="Parent-Teacher Collaboration" bnfpar="We foster a strong partnership with parents to ensure seamless communication and mutual support in a child's development."/>
    </div>
  )
}

export default Support
