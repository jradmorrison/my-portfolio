import './style.css';
import Navbar from '../navbar';
import HeroImg from '../heroImg';
import AboutMe from '../about';
import Portfolio from '../portfolio/index';
import Skills from '../skills/index';
import Contact from '../contactForm';
import Footer from '../footer';

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
        <Footer />
      {/* </div> */}
    </>
  );
};

export default LandingPage;
