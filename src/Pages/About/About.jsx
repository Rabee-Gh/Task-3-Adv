import Intro from "../../components/Intro/Intro"
import Mission from "../../components/Mission/Mission"
import Sections from '../../components/Sections/Sections'
import Awards from '../../components/Awards/Awards'

import "./About.css"
import Timeline from "../../components/Timeline/Timeline"
import Members from "../../components/Members/Members"

const About = () => {
  return (
    <div >
      <Intro inti="Overview" inth="Welcome to Little Learners Academy" intp="A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential."/>
      <div className="container">
        {/* start  mission */}
      <Sections  start="Mission & Visions" head="Our Mission & Visions" talk="We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."/>
      <Mission />
        {/* start  mission */}

      {/* start  Awards */}
      <Sections  start="Our Achievements" head="Our Awards and Recognitions" talk="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education."/>
      <Awards />
        {/* start  Awards */}

      {/* start    History */}
        <Sections start="Our Progressive Journey" head="Our History" talk="Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative . "/>
        <Timeline />
      {/* end    History */}
      {/* start    Team members */}
      <Sections start="Our Teachers With Experties" head="Our Team Members" talk="At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere."/>
        <Members />
      {/* end    Team members */}

      </div>
    </div>
  )
}

export default About