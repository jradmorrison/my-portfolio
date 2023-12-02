import './style.css';
import Navbar from '../navbar';
import HeroImg from '../heroImg';
import AboutMe from '../about';
import Portfolio from '../portfolio/index';
import Skills from '../skills/index';

const LandingPage = () => {
  return (
    <>
      {/* <div className="flex-wrap"> */}
        <Navbar />
        <HeroImg />
        <AboutMe />
        <Portfolio />
        <Skills />
      {/* </div> */}
    </>
  );
};

export default LandingPage;
