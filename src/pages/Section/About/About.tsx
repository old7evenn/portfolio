import close from '@/assets/close.svg';
import { Show } from '@/components/Show/Show';
import Ticker from '@/components/Ticker/Ticker';
import { aboutData, experienceData } from '@/data/about';
import { onToogleClass } from '@/feature/onToggleClass';

import './about.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        <div className="about__top">
          <div className="about__left-col">
            <h2 className="section__title text-border">about me</h2>
            <div className="about__description">
              {aboutData.text.map((text, i) => (
                <p
                  dangerouslySetInnerHTML={{ __html: text }}
                  key={i + 1 ** i}
                />
              ))}

              <Show>
                <Show.When isTrue={!!aboutData.list}>
                  <h3 className="certificate__title">{aboutData.list.title}</h3>
                  <ul className="about__skills">
                    {aboutData.list.items.map((item, ind) => (
                      <li
                        dangerouslySetInnerHTML={{ __html: item }}
                        key={`${aboutData.list}` + ind}
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
              {experienceData.map(
                ({ where, date, description, techlogies }) => (
                  <li key={where + date} className="work__experience-item">
                    <div className="work__experience-header">
                      <p className="work__experience-num"></p>
                      <p className="work__experience-title">{where}</p>
                      <button
                        className="work_experience-drown"
                        onClick={onToogleClass}
                      >
                        <img src={close} alt="close" />
                      </button>
                    </div>
                    <div className="work__experience-description">
                      <p className="work__experience--interval">{date}</p>
                      <p className="work__experience-about">{description}</p>
                      <h4>The techniques I used:</h4>
                      <ul className="techs">
                        {techlogies.map(tech => (
                          <li key={tech}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                )
              )}
            </ol>
          </div>
        </div>
      </div>
      <Ticker />
    </section>
  );
};

export default About;
