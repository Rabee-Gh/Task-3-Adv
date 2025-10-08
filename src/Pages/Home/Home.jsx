import "./Home.css"
import Hero from '../../components/Hero/Hero'
import Sections from '../../components/Sections/Sections'
import Benefits from '../../components/Benefits/Benefits'
import Slider from '../../components/Slider/Slider'
import Questions from '../../components/Questions/Questions'
import Navigate from '../../components/Navigate/Navigate'
const Home = () => {
  return (
    <div className="container">
        
            <Hero limg="/assets/images/Image Container.png" text1="Welcome to Little Learners Academy" ltitle="Where Young Minds Blossom and " colortitle="Dreams Take Flight." lpar="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!" />
            {/*      start        Benefits     */}
            <Sections  start="Children Deserve Bright Future" head="Our Benefits" talk="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."/>
            <Benefits />
            {/*      end        Benefits     */}
            
            {/*    start    testemonials */}
            <Sections start="Their Happy Words 🤗" head="Our Testimonials" talk="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."/>
            <Slider />
            {/*    end    Testemonials */}

            {/*    start    Questions */}
            <Sections start="Solutions For The Doubts" head="Frequently Asked Questions" talk="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."/>
            <Questions />
            {/*    end    Questions */}

            {/*    start    Navigate */}
                <Sections start="Explore More" head="Navigate through our Pages" talk="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"/>
                <Navigate />
            {/*    end    Navigate */}



</div>
    )
}

export default Home