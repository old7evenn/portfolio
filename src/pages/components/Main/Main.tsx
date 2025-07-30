import avatar from '@/assets/avatar.jpg';
import resume from '@/assets/resume/resume.pdf';
import { Ticker } from '@/components/Ticker/Ticker';

import './section.css';

export const SectionMain = () => (
  <main id="main">
    <div>
      <div className="main__inner">
        <div className="main__col">
          <h1 className="main__title">
            Hello! <br />
            I`m <span className="text-border">Roman</span>.
          </h1>
          <p className="main__subtitle">I`m front-end developer</p>
          <a href={resume} className="def__btn main__btn" rel="noreferrer" target="_blank">
            Resume
          </a>
        </div>
        <div className="main__col">
          <div className="main__avatar">
            <img alt="avatar" src={avatar} />
          </div>
        </div>
      </div>
    </div>

    <Ticker />
  </main>
);
