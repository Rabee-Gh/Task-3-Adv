import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="footer" >
      <div className="footer-top">
        <div className="footer-left">
          <div className="logo-info">
            <div className="flogo"> <img src='assets/images/shape-14.png'/> Little Learners</div>
            <p className="tagline">We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <MdEmail className="icon" />
              <a href="mailto:hello@littlelearners.com" style={{color:'#262626'}}>hello@littlelearners.com</a>
            </div>
            <div className="contact-item">
              <MdPhone className="icon" />
              <span>+91 91813 23 2309</span>
            </div>
            <div className="contact-item">
              <MdLocationOn className="icon" />
              <span>Somewhere in the World</span>
            </div>
          </div>
        </div>
        <div className="footer-middle">
          <div className="footer-links">
            <div className="links-column">
              <h3>Home</h3>
              <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Our Testimonials</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
            <div className="links-column">
              <h3>About Us</h3>
              <ul>
                <li><a href="#">Our Mission</a></li>
                <li><a href="#">Our Vision</a></li>
                <li><a href="#">Awards & Recognitions</a></li>
                <li><a href="#">History</a></li>
                <li><a href="#">Teachers</a></li>
              </ul>
            </div>
            <div className="links-column">
              <h3>Academics</h3>
              <ul>
                <li><a href="#">Special Features</a></li>
                <li><a href="#">Gallery</a></li>
              </ul>
            </div>
            <div className="links-column">
              <h3>Contact Us</h3>
              <ul>
                <li><a href="#">Information</a></li>
                <li><a href="#">Map & Direction</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-right">
        
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="bottom-links">
          <a href="#">Terms of Service</a>
          <span className="separator">|</span>
          <a href="#">Privacy Policy</a>
          <span className="separator">|</span>
          <a href="#">Cookie Policy</a>
        </div>
        <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer" className='face'><FaFacebookF /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className='twit'><FaTwitter /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className='lin'><FaLinkedinIn /></a>
            </div>
      </div>
      <hr />
      <p className="copyright">Copyright © [2023] Little Learners Academy. All rights reserved.</p>
    </footer>
  );
};

export default Footer;