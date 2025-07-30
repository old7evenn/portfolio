import close from '@/assets/close.svg';
import { Show, Ticker } from '@/components';
import { aboutData, experienceData } from '@/utils/constants';
import { onToogleClass } from '@/utils/helpers';

import './about.css';

export const About = () => (
  <section className="about" id="about">
    <div className="about__inner">
      <div className="about__top">
        <div className="about__left-col">
          <h2 className="section__title text-border">about me</h2>
          <div className="about__description">
            {aboutData.text.map((text, i) => (
              <p key={i + 1 ** i} dangerouslySetInnerHTML={{ __html: text }} />
            ))}

            <Show>
              <Show.When isTrue={!!aboutData.list}>
                <h3 className="certificate__title">{aboutData.list.title}</h3>
                <ul className="about__skills">
                  {aboutData.list.items.map((item, ind) => (
                    <li
                      key={`${aboutData.list}${ind}`}
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  ))}
                </ul>
              </Show.When>
            </Show>
          </div>
        </div>
      </div>
      <div className="about__work">
        <h2 className="section__title text-border">work experience</h2>
        <div className="work__experience">
          <ol className="work__experience-list">
            {experienceData.map(({ where, date, description, technologies }) => (
              <li key={where + date} className="work__experience-item">
                <div className="work__experience-header">
                  <p className="work__experience-num"></p>
                  <p className="work__experience-title">{where}</p>
                  <button className="work_experience-drown" onClick={onToogleClass}>
                    <img alt="close" src={close} />
                  </button>
                </div>
                <div className="work__experience-description">
                  <p className="work__experience--interval">{date}</p>
                  <p className="work__experience-about">{description}</p>
                  <h4>The techniques I used:</h4>
                  <ul className="techs">
                    {technologies.map(tech => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
    <Ticker />
  </section>
);
