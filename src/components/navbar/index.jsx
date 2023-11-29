import './style.css';

const Navbar = () => {
  return (
    <div className="nav">
      <a href="/">
        <h1 className=''>Jared Morrison</h1>
      </a>
      <div className="links">
        <a href="#top">Home</a>
        <a href="#about-me">About Me</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
