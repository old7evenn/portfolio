import { projectData } from '@/data/projects';
import linkIcon from '@/assets/link.svg';

import './projects.css';

const Project = () => {
  return (
    <section className='projects' id='projects'>
      <div className='project__header'>
        <h2 className='section__title text-border tac'>projects</h2>
      </div>

      <div className='projects__inner'>
        {projectData.map(({ title, img, stack, description, link }) => (
          <div className='project__about' key={title + img}>
            <div className='project__img'>
              <img src={img} alt='project img' />
            </div>
            <div className='project__description'>
              <div className='project__head'>
                <h2 className='project__about-name'>{title}</h2>

                {link && (
                  <a href={link} target='_blank' rel='noreferrer'>
                    <img src={linkIcon} alt='' />
                  </a>
                )}
              </div>
              {stack.length > 1 && (
                <h3 className='list__title'>Technologies</h3>
              )}
              <ul className='project__techs'>
                {stack.length > 1 &&
                  stack.map((st, i) => <li key={st + i ** i}>{st} / </li>)}
              </ul>
              {description ?? (
                <p className='project__description'>{description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
