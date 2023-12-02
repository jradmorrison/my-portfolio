import './style.css';
import Navbar from '../navbar';
import HeroImg from '../heroImg';
import AboutMe from '../about';
import Portfolio from '../portfolio/index';
import Skills from '../skills/index';
import Contact from '../contactForm';

const LandingPage = () => {
  return (
    <>
      {/* <div className="flex-wrap"> */}
        <Navbar />
        <HeroImg />
        <AboutMe />
        <Portfolio />
        <Skills />
        <Contact />
      {/* </div> */}
    </>
  );
};

export default LandingPage;
