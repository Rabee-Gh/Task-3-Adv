import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ section }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='navbar'>
      <div className="logo">
        <img src="/assets/images/LogoContainer.png" alt="any" />
      </div>

      <button className='over-btn' onClick={toggleMenu}>
        <img src="/assets/images/Button.png" alt="" />
      </button>

      <ul className={`sec ${isMenuOpen ? 'open' : ''}`}>
        {section?.map((sec, index) => (
          <li key={index} className='subsec'>
            <Link to={`${sec.hre}`}>{sec.nam}</Link>
          </li>
        ))}
      </ul>

    </nav>
  );
};

export default Navbar;
