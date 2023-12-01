import './style.css';
import Navbar from '../navbar';
import HeroImg from '../heroImg';
import AboutMe from '../about';
import Portfolio from '../portfolio/index';

const LandingPage = () => {
  return (
    <>
      <div className="flex-wrap">
        <Navbar />
        <HeroImg />
        <AboutMe />
        <Portfolio />
      </div>
      
    </>
  );
};

export default LandingPage;
