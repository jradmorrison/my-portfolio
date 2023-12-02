import './style.css';
import Card from './card';

import { projectData } from './data';

const Portfolio = () => {
  return (
    <div id="portfolio" className="screen">
      <div className="d-flex flex-wrap justify-content-center container py-3">
        {projectData.map((project) => (
            <Card key={project.id} project={project}/>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
