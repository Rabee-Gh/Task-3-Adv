import BenefitsCard from '../BenefitsCard/BenefitsCard'
import './Activities.css'

const Activities = () => {
  return (
    <div className="Benefits" >
        <BenefitsCard bnfimg="/assets/images/award3.png" bnfti="Sports and Athletics" bnfpar="Students can participate in various sports, from soccer and basketball to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline."/>
        <BenefitsCard bnfimg="/assets/images/IconContainer(1).png" bnfti="Art and Creativity" bnfpar="Our art classes and creative workshops provide a platform for students to express their creativity through painting, drawing, and other artistic forms."/>
        <BenefitsCard bnfimg="/assets/images/IconContainer(2).png" bnfti="Music and Performing Arts" bnfpar="Students can discover their musical talents through singing, playing musical instruments, and participating in drama and theater performances."/>
        <BenefitsCard bnfimg="/assets/images/IconContainer(3).png" bnfti="Language Clubs" bnfpar="Language clubs offer an opportunity for students to immerse themselves in different languages and cultures, fostering global awareness."/>
        <BenefitsCard bnfimg="/assets/images/IconContainer(4).png" bnfti="Science Club" bnfpar="The science club allows young scientists to explore the wonders of science through fun experiments and hands-on learning"/>
        <BenefitsCard bnfimg="/assets/images/IconContainer(5).png" bnfti="Cooking and Culinary Arts" bnfpar="Cooking classes introduce students to the joys of preparing and tasting delicious and healthy meals."/>
    </div>
  )
}

export default Activities