import github from '@/assets/media/github_logo.svg';
import tg from '@/assets/media/tg_logo.svg';

import './footer.css';

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <address className="address">
          <a
            href="https://github.com/old7evenn"
            className="socialMedia"
            rel="noreferrer"
            target="_blank"
          >
            <img alt="github" src={github} />
          </a>
          <a href="https://t.me/xjzth" className="socialMedia" rel="noreferrer" target="_blank">
            <img alt="tg" src={tg} />
          </a>
        </address>
        <small>&copy; All rights reserved - Designed by Roman</small>
      </div>
    </footer>
  );
};
