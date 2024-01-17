import SkillPartial from './skillPartial';
import './style.css';

import { FaHtml5, FaNodeJs } from 'react-icons/fa';
import { TbBrandJavascript } from 'react-icons/tb';

const skills = () => {
  const skillData = [
    {
      id: 0,
      badge: <FaHtml5 size={80} style={{ color: '#E96228' }} />,
      title: 'HTML | CSS',
      content:
        'In 2013, my journey into the world of web design began during high school, where I was introduced to HTML and CSS. This experience became the cornerstone of my understanding of UI/UX and front-end development. After a significant hiatus, I made the conscious decision to transform my once-cherished hobby into a fulfilling career.',
    },
    {
      id: 1,
      badge: <TbBrandJavascript size={80} style={{ color: '#FFD940' }} />,
      title: 'JavaScript | TypeScript',
      content:
        'My exploration of JavaScript has been an enriching journey. Starting from the basics, I gradually delved into the intricacies of the language, honing my skills in both front-end and back-end development. The process involved overcoming challenges, mastering new concepts, and ultimately gaining a solid understanding of how to craft dynamic and efficient web applications. I now find joy and confidence in my ability to navigate the complexities of JavaScript and TypeScript seamlessly.',
    },
    {
      id: 2,
      badge: <FaNodeJs size={80} style={{ color: '#8CC84B' }} />,
      title: 'Technologies',
      content:
        "Of course my knowledge and skill as a full stack developer wouldn't be complete without the numerous frameworks, technologies, and databases I've learned along the way. Which include, but are not limited to React, NextJS, MySQL, MongoDB, Node, Express, GraphQL, and many others",
    },
  ];

  return (
    <div id='skills'>
      <div
        className='w-100 border-0'
        style={{ height: '3rem', backgroundColor: 'whitesmoke' }}></div>
      <h2 className='py-5 text-center text-white title'>SKILL OVERVIEW</h2>
      <div className='container d-flex flex-wrap text-white py-5'>
        {skillData.map((skill) => (
          <SkillPartial key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default skills;
