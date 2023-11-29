import './style.css';
import Navbar from '../navbar';
import HeroImg from '../heroImg';
import AboutMe from '../about';

const LandingPage = () => {
  return (
    <>
      <div className="flex-wrap">
        <Navbar />
        <HeroImg />
        <AboutMe />
      </div>
      
    </>
  );
};

export default LandingPage;
