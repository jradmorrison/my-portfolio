import './style.css';
import me from '../../assets/images/jared.jpg';

const AboutMe = () => {
  return (
    <div id="about-me">
      <div className="content">
        <h2>Hey there!👋</h2>
        <div className="flex">
          <div>
            <img src={me} alt="a picture of me" id="me" />
          </div>
          <div className='words'>
            <p>
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
