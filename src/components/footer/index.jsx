import './style.css';
import { IoLocationOutline } from 'react-icons/io5';
import { TfiEmail } from 'react-icons/tfi';
import {
  AiOutlinePhone,
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineFacebook,
} from 'react-icons/ai';

import resume from '../../assets/Jared-Morrison-Resume.pdf';

const Footer = () => {
  return (
    <div id="footer" className="text-white">
      <div className="container pt-3">
        <div className="d-flex justify-content-center">
          <div className="box1">
            <div className="d-flex">
              <IoLocationOutline size={24} />
              <p className="ms-3">Orlando, Fl</p>
            </div>
            <div className="d-flex">
              <TfiEmail size={20} />
              <p>
                <a href="mailto:jmorrison.m44@gmail.com" className="ms-3">
                  jmorrison.m44@gmail.com
                </a>
              </p>
            </div>
            <div className="d-flex">
              <AiOutlinePhone size={24} />
              <p className="ms-3">(407) 417 4736</p>
            </div>
          </div>
          <div className="box2">
            <div className="d-flex">
              <a
                href="https://github.com/jradmorrison"
                className="mx-3"
                target="_blank">
                <AiFillGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/jradmorrison/"
                className="mx-3"
                target="_blank">
                <AiOutlineLinkedin size={30} />
              </a>
              <a
                href="https://www.facebook.com/jared.morrison.37"
                className="mx-3"
                target="_blank">
                <AiOutlineFacebook size={30} />
              </a>
            </div>
            <div className="mt-3 text-center">
              <a
                href={resume}
                attributes-listdownload="Jared Morrison's resume"
                target="_blank">
                Download my resume
              </a>
            </div>
            <div className="mt-3 text-center">
              <p>Made with ❤️</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
