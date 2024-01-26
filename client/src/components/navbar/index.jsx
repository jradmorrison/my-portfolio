import { useState } from 'react';
import './style.css';

import { CiMenuBurger } from 'react-icons/ci';
import { MdClose } from 'react-icons/md';

const Navbar = () => {
  const [color, scrollColor] = useState(false);
  const [mobileNav, toggleMobileNav] = useState(null);
  const [sideMenu, toggleSideMenu] = useState(false);

  let width = window.innerWidth;

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView();
  };

  const changeNavColor = () => {
    if (window.scrollY >= 100) {
      scrollColor(true);
    } else {
      scrollColor(false);
    }
  };

  const handleResize = () => {
    width = window.innerWidth;
    if (window.innerWidth <= 980) {
      toggleMobileNav(true);
    } else toggleMobileNav(false);
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
        <a href='/'>
          <h1 className=''>JARED MORRISON</h1>
        </a>
        {width > 980 ? (
          <div className='links'>
            <ul className='d-flex my-auto'>
              <li onClick={() => scrollTo('top')}>HOME</li>
              <li onClick={() => scrollTo('about-me')}>ABOUT</li>
              <li onClick={() => scrollTo('portfolio')}>PORTFOLIO</li>
              <li onClick={() => scrollTo('skills')}>SKILLS</li>
              <li onClick={() => scrollTo('contact')}>CONTACT</li>
            </ul>
          </div>
        ) : (
          <div className='px-3 pointer' onClick={openNavigation}>
            <CiMenuBurger color='white' size={30} />
          </div>
        )}
      </div>
      {sideMenu ? (
        <div className='sideNavi py-3'>
          {/* <div className='close'>
            
          </div> */}
          <div className='links d-flex flex-column position-relative'>
            <MdClose className='close' size={40} onClick={closeNavigation} />
            <ul className='m-0 p-0'>
              <li
                className='ms-4'
                onClick={() => {
                  scrollTo('top');
                  closeNavigation();
                }}>
                HOME
              </li>
              <hr />
              <li
                className='ms-4'
                onClick={() => {
                  scrollTo('about-me');
                  closeNavigation();
                }}>
                ABOUT
              </li>
              <hr />
              <li
                className='ms-4'
                onClick={() => {
                  scrollTo('portfolio');
                  closeNavigation();
                }}>
                PORTFOLIO
              </li>
              <hr />
              <li
                className='ms-4'
                onClick={() => {
                  scrollTo('skills');
                  closeNavigation();
                }}>
                SKILLS
              </li>
              <hr />
              <li
                className='ms-4'
                onClick={() => {
                  scrollTo('contact');
                  closeNavigation();
                }}>
                CONTACT
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar;
