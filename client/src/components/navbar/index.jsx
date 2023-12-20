import { useState } from 'react';
import './style.css';

const Navbar = () => {
  const [color, scrollColor] = useState(false);
  const changeNavColor = () => {
    if (window.scrollY >= 100) {
      scrollColor(true);
    } else {
      scrollColor(false);
    }
  };

  window.addEventListener('scroll', changeNavColor);

  return (
    <div className={color ? 'navi navi-solid' : 'navi'}>
      <a href="/">
        <h1 className="">JARED MORRISON</h1>
      </a>
      <div className="links">
        <a href="#top">HOME</a>
        <a href="#about-me">ABOUT</a>
        <a href="#portfolio">PORTFOLIO</a>
        <a href="#skills">SKILLS</a>
        <a href="#contact">CONTACT</a>
      </div>
    </div>
  );
};

export default Navbar;
