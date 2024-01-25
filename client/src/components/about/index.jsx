import './style.css';
import me from '../../assets/images/jared.jpg';

const AboutMe = () => {
  return (
    <div id='about-me'>
      <div className='content container'>
        <h2 className='mb-4'>Hey there!👋</h2>
        <div className='d-flex flex-wrap justify-content-around'>
          <div className='col-md-4'>
            <img src={me} alt='a picture of me' id='me' className='rounded-4' />
          </div>
          <div className='col-md-8'>
            <div>
              <p className='mb-5'>
                I am a dedicated and fast-learning full-stack web developer with
                a passion for creating innovative and user-friendly digital
                experiences. My commitment to excellence in my field is
                reflected in my proactive approach to learning and staying
                abreast of the latest industry trends. As a highly motivated
                professional, I thrive in dynamic environments where I can apply
                my technical skills and creative mindset to solve complex
                problems.
              </p>
              <p className='mb-5'>
                I have successfully developed and maintained web applications
                using a variety of technologies, including JavaScript, Node.js,
                and React. My experience spans both front-end and back-end
                development, allowing me to deliver end-to-end solutions that
                align with industry best practices.
              </p>
              <p>
                Check out some of my projects below and feel free to give me a
                follow on Github and LinkedIn. You can find links to each below
                the contact section!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
