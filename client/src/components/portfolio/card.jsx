import './style.css';

const Card = ({ project }) => {
  return (
    <div className='card'>
      <img
        src={project.image}
        className='card-img-top'
        alt='A screenshot of the deployed project'
      />
      <div className='card-body position-relative'>
        <h5 className='card-title'>{project.title}</h5>
        <p className='card-text'>{project.description}</p>
        <div className='d-flex justify-content-around'>
          <a href={project.repo} target='_blank'>
            Repo
          </a>
          <a href={project.live} target='_blank'>
            Deployed
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
