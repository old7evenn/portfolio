import Ticker from '@/components/Ticker/Ticker';
import avatar from '@/assets/avatar.jpg';
import resume from '@/assets/resume/resume_en.pdf';

import './section.css';

const SectionMain = () => {
  return (
    <main id='main'>
      <div>
        <div className='main__inner'>
          <div className='main__col'>
            <h1 className='main__title'>
              Hello! <br />
              I`m <span className='text-border'>Roman</span>.
            </h1>
            <p className='main__subtitle'>I`m front-end web developer</p>
            <a
              href={resume}
              target='_blank'
              className='def__btn main__btn'
              rel='noreferrer'
            >
              Resume
            </a>
          </div>
          <div className='main__col'>
            <div className='main__avatar'>
              <img src={avatar} alt='avatar' />
            </div>
          </div>
        </div>
      </div>

      <Ticker />
    </main>
  );
};

export default SectionMain;
