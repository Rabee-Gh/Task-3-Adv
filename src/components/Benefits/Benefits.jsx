import BenefitsCard from "../BenefitsCard/BenefitsCard"
import "./Benefits.css"

const Benefits = () => {
  return (
    <div className="Benefits" id="About Us" >
        <BenefitsCard bnfimg="/assets/images/Icon Container.png" bnfti="Holistic Learning Approach" bnfpar="Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education"/>
        <BenefitsCard bnfimg="/assets/images/Icon Container (1).png" bnfti="Experienced Educators" bnfpar="Our passionate and qualified teachers create a supportive and stimulating learning environment."/>
        <BenefitsCard bnfimg="/assets/images/Icon Container (2).png" bnfti="Nurturing Environment" bnfpar="We prioritize safety and provide a warm and caring atmosphere for every child."/>
        <BenefitsCard bnfimg="/assets/images/Icon Container (3).png" bnfti="Play-Based Learning" bnfpar="We believe in the power of play to foster creativity, problem-solving skills, and imagination."/>
        <BenefitsCard bnfimg="/assets/images/Icon Container (4).png" bnfti="Individualized Attention" bnfpar="Our small class sizes enable personalized attention, catering to each child's unique needs."/>
        <BenefitsCard bnfimg="/assets/images/Icon Container (5).png" bnfti="Parent Involvement" bnfpar="We foster a strong parent-school partnership to ensure seamless communication and collaboration."/>
    </div>
  )
}

export default Benefits