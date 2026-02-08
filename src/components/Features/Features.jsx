import BenefitsCard from "../BenefitsCard/BenefitsCard"
import "./Features.css"

const Features = () => {
  return (
    <div className="Benefits" id="About Us" style={{marginBottom:"150px"}}>
        <BenefitsCard bnfimg="/assets/images/IconContainer.png" bnfti="Thematic Learning" bnfpar="Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant."/>
        <BenefitsCard bnfimg="/assets/images/IconContainer(1).png" bnfti="STEAM Education" bnfpar="We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills."/>
        <BenefitsCard bnfimg="/assets/images/IconContainer(2).png" bnfti="Language Immersion" bnfpar="Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness."/>
        <BenefitsCard bnfimg="/assets/images/IconContainer(3).png" bnfti="Art and Creativity "bnfpar= " Art is celebrated at Little Learners Academy . Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms."/>
        <BenefitsCard bnfimg="/assets/images/IconContainer(4).png" bnfti="Outdoor Education" bnfpar="Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment."/>
        <BenefitsCard bnfimg="/assets/images/IconContainer(5).png" bnfti="Play-Based Learning" bnfpar="Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking."/>
    </div>  )
}

export default Features