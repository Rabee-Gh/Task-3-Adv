import ContactForm from "../../components/ContactForm/ContactForm"
import Intro from "../../components/Intro/Intro"
import Sections from "../../components/Sections/Sections"
import "./Contact.css"

const Contact = () => {
  return (
    <div className="container main-contact">
            <Intro inti="Contact Us" inth="Feel Free To Connect With Us" intp="We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods"/>
            <Sections  start="Contact Form" head="Student Information" talk="If you have specific questions or wish to request more information about Little Learners Academy, please complete the contact form below. Kindly provide the following details to help us better understand your needs"/>
            <ContactForm />
    </div>
  )
}

export default Contact
