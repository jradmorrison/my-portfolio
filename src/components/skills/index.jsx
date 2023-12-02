import SkillPartial from './skillPartial';

const skills = () => {
  const skillData = [
    {
      id: 0,
      title: 'HTML | CSS',
      content:
        'I was first introduced to HTML and CSS in 2013 when I took web design in high school. After a long hiatus, I decided to turn what was a hobby into my career',
    },
    {
      id: 1,
      title: 'JavaScript',
      content:
        "Learning JavaScript has been an amazing experience. I've enjoyed every minute and every challenge. From creating interactive and responsive user interfaces, to honing my skills on the back end with Node.js",
    },
    {
      id: 2,
      title: 'Technologies',
      content:
        "Of course my knowledge and skill as a full stack developer wouldn't be complete without the numerous frameworks, technologies, and databases I've learned along the way. Which include, but are not limited to MySQL, MongoDB, Express.js, React, GraphQL, Mongoose, Sequelize, and many others",
    },
  ];

  return (
    <div id="skills">
      <h2 className="py-5 text-center text-white">SKILL OVERVIEW</h2>
      <div className="container d-flex flex-wrap text-white text-center">
        {skillData.map((skill) => (
          <SkillPartial key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default skills;
