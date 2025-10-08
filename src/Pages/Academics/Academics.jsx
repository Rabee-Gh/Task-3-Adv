import "./Academics.css"
import Intro from "../../components/Intro/Intro"
import Sections from '../../components/Sections/Sections'
import Features from '../../components/Features/Features'
import Learn from "../../components/Learn/Learn"
import Gallery from "../../components/Gallery/Gallery"

const Academics = () => {

    const learningTopics = [
    {
      title: 'Language Arts',
      description: 'Reading, writing, storytelling, and communication skills.',
      image: "/assets/images/learn1.png",
    },
    {
      title: 'Mathematics',
      description: 'Number sense, basic operations, problem-solving, and logic.',
      image: "/assets/images/learn22.png",
    },
    {
      title: 'Science',
      description: 'Exploring the natural world through hands-on experiments and investigations.',
      image: "/assets/images/learn33.png",
    },
    {
      title: 'Social Studies',
      description: 'Cultivating an understanding of diverse cultures and communities.',
      image: "/assets/images/learn44.png",
    },
    {
      title: 'Arts and Crafts',
      description: 'Encouraging creativity through various art forms and crafts.',
      image: "/assets/images/learn55.png",
    },
    {
      title: 'Physical Education',
      description: 'Promoting physical fitness, coordination, and teamwork.',
      image: "/assets/images/learn66.png",
    },
  ];



  return (
    <div >
    <Intro inti="Academics" inth="Nurturing Young Minds for Success" intp="Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration"/>
    <div className="container">
       {/*      start        Features     */}
       <Sections  start="Our Features" head="Our Special Features" talk="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"/>
            <Features />
            {/*      end        Features     */}

         {/*      start        Learn     */}
       <Sections  start="Our Features" head="What Students Learn" talk="At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"/>
            <Learn  array={learningTopics}/>
            {/*      end        Learn     */}

          {/*      start        Gallary     */}
          <Sections  start="Our Gallery" head="Our Rooms Gallery" talk="Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school." />
          <Gallery />
            {/*      end        Gallary     */}
    </div>
    </div>
  )
}

export default Academics