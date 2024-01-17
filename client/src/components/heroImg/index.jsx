import './style.css';
import { FaChevronDown } from 'react-icons/fa';

const heroImg = () => {
  window.addEventListener('load', () => {
    const heroTitle = document.getElementById('heroTitle');
    heroTitle.innerHTML = '// WEB DEVELOPER';
    heroTitle.classList.add('slideIn');
  });

  return (
    <div className='hero' id='top'>
      <div
        id='heroTitle'
        className='title container d-flex justify-content-end'></div>
      <div className='d-flex justify-content-center arrow'>
        <a href='#about-me'>
          <FaChevronDown
            size={40}
            style={{ color: '#fff' }}
            className='bounce'
          />
        </a>
      </div>
    </div>
  );
};

export default heroImg;
