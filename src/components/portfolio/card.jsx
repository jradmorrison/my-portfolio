import './style.css';

const Card = ({ project }) => {
  return (
    <div className="card mx-5 my-3" style={{width: '20rem'}}>
      <img src={project.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description}</p>
        <div className="d-flex justify-content-around">
          <a href={project.repo} className="btn btn-success" target="_blank">
            Repo
          </a>
          <a href={project.live} className="btn btn-success" target="_blank">
            Deployed
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
