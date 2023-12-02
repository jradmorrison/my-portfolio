const SkillPartial = ({ skill }) => {
  return (
    <div className="col-lg-4 px-3">
      <h3 className="mb-4">{skill.title}</h3>
      <p className="mb-4">{skill.content}</p>
    </div>
  );
};

export default SkillPartial;
