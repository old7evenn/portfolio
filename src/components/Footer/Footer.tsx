import './footer.css';

import github from '@/assets/media/github_logo.svg';
import tg from '@/assets/media/tg_logo.svg';

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <address className='address'>
          <a
            className='socialMedia'
            href='https://github.com/old7evenn'
            target='_blank'
          >
            <img src={github} alt='github' />
          </a>
          <a className='socialMedia' href='https://t.me/xjzth' target='_blank'>
            <img src={tg} alt='tg' />
          </a>
        </address>
        <small>&copy; All rights reserved - Designed by Roman</small>
      </div>
    </footer>
  );
};

export default Footer;
