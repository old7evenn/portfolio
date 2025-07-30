import linkIcon from '@/assets/link.svg';
import { projectData } from '@/utils/constants';

import './projects.css';

export const Project = () => (
  <section className="projects" id="projects">
    <div className="project__header">
      <h2 className="section__title text-border tac">projects</h2>
    </div>

    <div className="projects__inner">
      {projectData.map(({ title, img, stack, description, link }) => (
        <div key={title + img} className="project__about">
          <div className="project__img">
            <img alt="project img" src={img} />
          </div>
          <div className="project__description">
            <div className="project__head">
              <h2 className="project__about-name">{title}</h2>

              {link && (
                <a href={link} rel="noreferrer" target="_blank">
                  <img alt="" src={linkIcon} />
                </a>
              )}
            </div>
            {stack.length > 1 && <h3 className="list__title">Technologies</h3>}
            <ul className="project__techs">
              {stack.length > 1 && stack.map((st, i) => <li key={st + i ** i}>{st} / </li>)}
            </ul>
            {description ?? <p className="project__description">{description}</p>}
          </div>
        </div>
      ))}
    </div>
  </section>
);
