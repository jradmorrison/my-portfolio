import './style.css';

const Navbar = () => {
  return (
    <div className="navi">
      <a href="/">
        <h1 className=''>JARED MORRISON</h1>
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
