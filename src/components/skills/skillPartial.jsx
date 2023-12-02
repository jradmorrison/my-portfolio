const SkillPartial = ({ skill }) => {
  return (
    <div className="col-lg-4 px-3">
      <div className="mb-3">
        {skill.badge}
      </div>
      <h3 className="mb-4">{skill.title}</h3>
      <p className="mb-4">{skill.content}</p>
    </div>
  );
};

export default SkillPartial;
