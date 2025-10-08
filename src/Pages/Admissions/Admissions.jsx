import "./Admissions.css"
import Intro from "../../components/Intro/Intro"
import Sections from "../../components/Sections/Sections"
import Admission from "../../components/Admission/Admission"
import PricingTables from "../../components/PricingTables/PricingTables"
const Admissions = () => {
    return (
    <>
            <Intro inti="Admission" inth="Join Our Family of Young Learners" intp="At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school"/>

            <div className="container">
                {/* start Admission */}
                <Sections  start="Process" head="Admission Process" talk="Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school"/>
                    <Admission />
                {/* start Admission */}
                {/* start tabeles */}
                <Sections  start="Our Features" head="Fee Structure" talk="Our fee structure is transparent, and we strive to keep our fees competitive within the education sector. The fees vary based on the program, age group, and any additional services chosen."/>
                    <PricingTables />
                {/* start tabeles */}

            </div>
    </>
    )
}

export default Admissions