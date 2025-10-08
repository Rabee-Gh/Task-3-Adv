import './ContactForm.css'; 
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <div className="form-container">
      <div className="form-icons ">
        <a href="#" className="social-icon facebook"><FaFacebookF /></a>
        <a href="#" className="social-icon twitter"><FaTwitter /></a>
        <a href="#" className="social-icon linkedin"><FaLinkedinIn /></a>
      </div>
      <form className="contact-form-content">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="parentName">Parent Name</label>
            <input type="text" id="parentName" placeholder="Enter Parent Name" />
          </div>
          <div className="form-group">
            <label htmlFor="emailAddress">Email Address</label>
            <input type="email" id="emailAddress" placeholder="Enter Email Address" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="tel" id="phoneNumber" placeholder="Enter Phone Number" />
          </div>
          <div className="form-group">
            <label htmlFor="studentName">Student Name</label>
            <input type="text" id="studentName" placeholder="Enter Student Name" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="studentAge">Student Age</label>
            <input type="text" id="studentAge" placeholder="Enter Student Age" />
          </div>
          <div className="form-group">
            <label htmlFor="programOfInterest">Program of Interest</label>
            <select id="programOfInterest">
              <option value="" disabled selected>Select Program</option>
              {/* أضف خيارات البرنامج هنا */}
              <option value="program1">Program 1</option>
              <option value="program2">Program 2</option>
              <option value="program3">Program 3</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group full-width">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Enter your Message"></textarea>
          </div>
        </div>
        <div className="form-row">
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;