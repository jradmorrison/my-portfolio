import './style.css';
import Card from './card';

import { projectData } from './data';

const Portfolio = () => {
  return (
    <div id="portfolio" className="pt-5 border-0">
      <div className="d-flex flex-wrap justify-content-between container py-4">
        {projectData.map((project) => (
          <div className='col-md-6 col-lg-4 px-4 py-3'>
            <Card key={project.id} project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
