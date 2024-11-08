import Scroll from 'react-scroll';
const ScrollLink = Scroll.Link;

import logo from '@/assets/logo.svg';
import './header.css';

type Nav = {
  to: string;
  title: string;
};

const nav: Nav[] = [
  {
    to: 'main',
    title: 'Home',
  },
  {
    to: 'about',
    title: 'About',
  },
  {
    to: 'skills',
    title: 'skills',
  },
  {
    to: 'projects',
    title: 'projects',
  },
];

const Header = () => {
  return (
    <header className="header">
      <div className="container header__inner">
        <ScrollLink
          spy={true}
          hashSpy={false}
          smooth={true}
          duration={500}
          to="main"
          className="header__logo"
        >
          <img src={logo} alt="logo" />
        </ScrollLink>

        <nav className="header__nav">
          <ul className="header__nav--list">
            {nav.map(({ to, title }) => (
              <li key={to + title}>
                <ScrollLink
                  to={to}
                  spy={true}
                  hashSpy={false}
                  smooth={true}
                  duration={500}
                  activeClass="active"
                  offset={0}
                >
                  {title}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
