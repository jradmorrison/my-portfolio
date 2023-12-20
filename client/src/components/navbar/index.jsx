import { useState } from 'react';
import './style.css';

import { CiMenuBurger } from 'react-icons/ci';
import { MdClose } from 'react-icons/md';

const Navbar = () => {
  const [color, scrollColor] = useState(false);
  const [mobileNav, toggleMobileNav] = useState(false);
  const [sideMenu, toggleSideMenu] = useState(false);

  let width = window.innerWidth;

  const changeNavColor = () => {
    if (window.scrollY >= 100) {
      scrollColor(true);
    } else {
      scrollColor(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth <= 912) {
      toggleMobileNav(true);
    } else toggleMobileNav(false);
    width = window.innerWidth;
  };

  const openNavigation = () => {
    toggleSideMenu(true);
  };

  const closeNavigation = () => {
    toggleSideMenu(false);
  };

  window.addEventListener('scroll', changeNavColor);
  window.addEventListener('resize', handleResize);

  return (
    <>
      <div className={color ? 'navi navi-solid' : 'navi'}>
        <a href="/">
          <h1 className="">JARED MORRISON</h1>
        </a>
        {width > 912 ? (
          <div className="links">
            <a href="#top">HOME</a>
            <a href="#about-me">ABOUT</a>
            <a href="#portfolio">PORTFOLIO</a>
            <a href="#skills">SKILLS</a>
            <a href="#contact">CONTACT</a>
          </div>
        ) : (
          <div className="px-3 pointer" onClick={openNavigation}>
            <CiMenuBurger color="white" size={30} />
          </div>
        )}
      </div>
      {sideMenu ? (
        <div className="sideNavi py-3">
          <div className="links d-flex flex-column position-relative">
            <div className="close">
              <MdClose size={40} onClick={closeNavigation} />
            </div>
            <div className="">
              <a href="#top" onClick={closeNavigation}>
                HOME
              </a>
            </div>
            <hr />
            <div>
              <a href="#about-me" onClick={closeNavigation}>
                ABOUT
              </a>
            </div>
            <hr />
            <div>
              <a href="#portfolio" onClick={closeNavigation}>
                PORTFOLIO
              </a>
            </div>
            <hr />
            <div>
              <a href="#skills" onClick={closeNavigation}>
                SKILLS
              </a>
            </div>
            <hr />
            <div>
              <a href="#contact" onClick={closeNavigation}>
                CONTACT
              </a>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar;
