const SkillPartial = ({ skill }) => {
  return (
    <div className="col-lg-4">
      <div className="mb-3 text-center">{skill.badge}</div>
      <h3 className="mb-4 text-center">{skill.title}</h3>
      <p className="mb-4 px-4">{skill.content}</p>
    </div>
  );
};

export default SkillPartial;
