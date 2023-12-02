import SkillPartial from './skillPartial';
import './style.css'

import { FaHtml5, FaNodeJs  } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";

const skills = () => {
  const skillData = [
    {
      id: 0,
      badge: <FaHtml5 size={80} style={{color: "#E96228"}} />,
      title: 'HTML | CSS',
      content:
        'I was first introduced to HTML and CSS in 2013 when I took web design in high school. After a long hiatus, I decided to turn what was a hobby into my career',
    },
    {
      id: 1,
      badge: <TbBrandJavascript size={80} style={{color: "#FFD940"}} />,
      title: 'JavaScript',
      content:
        "Learning JavaScript has been an amazing experience. I've enjoyed every minute and every challenge. From creating interactive and responsive user interfaces, to honing my skills on the back end with Node.js",
    },
    {
      id: 2,
      badge: <FaNodeJs size={80} style={{color: "#8CC84B"}} />, 
      title: 'Technologies',
      content:
        "Of course my knowledge and skill as a full stack developer wouldn't be complete without the numerous frameworks, technologies, and databases I've learned along the way. Which include, but are not limited to MySQL, MongoDB, Express.js, React, GraphQL, Mongoose, Sequelize, and many others",
    },
  ];

  return (
    <div id="skills">
      <h2 className="py-5 text-center text-white title">SKILL OVERVIEW</h2>
      <div className="container d-flex flex-wrap text-white text-center py-5">
        {skillData.map((skill) => (
          <SkillPartial key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default skills;
