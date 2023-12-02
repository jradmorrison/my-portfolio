import './style.css';
import me from '../../assets/images/jared.jpg';

const AboutMe = () => {
  return (
    <div id="about-me">
      <div className="content container">
        <h2 className='mb-4'>Hey there!👋</h2>
        <div className="d-flex flex-wrap justify-content-around">
          <div className='col-sm-4'>
            <img src={me} alt="a picture of me" id="me" />
          </div>
          <div className='words col-sm-7'>
            <p className='mb-5'>
              Welcome to my React portfolio! I developed this web project on my
              way of learning and mastering React.js.
            </p>
            <p>
              I'm a full-stack web development student on a mission to create
              awesome digital experiences. I learn fast, stay dedicated, and
              geek out on all things coding. Whether it's crafting sleek
              front-end interfaces with HTML, CSS, and JavaScript, or diving
              into the nitty-gritty of back-end magic with Node.js, I'm all in.
              I love tackling challenges head-on and turning them into cool
              solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
