import "./Student.css"
import Intro from "../../components/Intro/Intro"
import Sections from "../../components/Sections/Sections"
import Activities from "../../components/Activities/Activities"
import Learn from "../../components/Learn/Learn"
import Support from "../../components/Support/Support"

const Student = () => {
  const stu_learn=[
  {
    "title": "Annual Sports Day",
    "description": "A day filled with friendly competition, team spirit, and sportsmanship."
    ,"image": "/assets/images/learn2.png",

  },
  {
    "title": "Cultural Festivals",
    "description": "Celebrations of diverse cultural festivals, promoting cultural exchange and appreciation."
    ,"image": "/assets/images/learn3.png",

  },
  {
    "title": "Art Exhibitions",
    "description": "Showcasing our students' artistic talents through exhibitions and displays."
    ,"image": "/assets/images/learn4.png",

  },
  {
    "title": "Science Fair",
    "description": "A platform for budding scientists to present their innovative projects and experiments."
    ,"image": "/assets/images/learn5.png",

  },
  {
    "title": "International Day",
    "description": "A vibrant celebration of our diverse community, embracing cultures from around the world."
    ,"image": "/assets/images/learn6.png",

  },
  {
    "title": "Graduation Ceremony",
    "description": "A significant milestone as our Kindergarten students prepare to embark on their academic journey."
    ,"image": "/assets/images/learn7.png",

  }
]
  return (
    <>
            <Intro inti="Enriching Student Life" inth="Embracing Learning with Discovery and Joy" intp="Welcome to our Student Life page, where the magic of childhood comes alive through the enriching experiences and adventures that our students embark on each day. At our kindergarten school, we believe that learning goes beyond textbooks, and we strive to create a holistic and engaging environment that nurtures every aspect of a child's development."/>

            <div className="container">
                {/* start Activities */}
                <Sections  start="Our Features" head="Extracurricular Activities" talk="At Little Learners Academy, we believe in nurturing well-rounded individuals. Our extracurricular activities offer a diverse range of experiences that complement our academic curriculum and encourage students to explore their passions."/>
                <Activities />
                {/* start Activities */}

                {/* start Celebrations */}
                <Sections  start="Our Features" head="Events & Celebrations" talk="At Little Learners Academy, we celebrate every milestone and create cherished memories for our students. Throughout the year, we host a variety of events and celebrations that bring the entire school community together. Some of our memorable events include"/>
                <Learn array={stu_learn}/>
                {/* start Celebrations */}

                {/* start Support */}
                <Sections  start="Our Achievements" head="Student Support" talk="At Little Learners Academy, we are committed to providing a supportive and nurturing environment that meets the unique needs of each student. Our student support services include"/>
                <Support />
                {/* start Support */}

            </div>
    </>
  )
}

export default Student