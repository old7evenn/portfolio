import { Link as ScrollLink } from 'react-scroll';

import logo from '@/assets/logo.svg';

import './header.css';

interface Nav {
  title: string;
  to: string;
}

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

export const Header = () => {
  return (
    <header className="header">
      <div className="container header__inner">
        <ScrollLink spy className="header__logo" hashSpy={false} duration={500} smooth to="main">
          <img alt="logo" src={logo} />
        </ScrollLink>

        <nav className="header__nav">
          <ul className="header__nav--list">
            {nav.map(({ to, title }) => (
              <li key={to + title}>
                <ScrollLink
                  spy
                  activeClass="active"
                  hashSpy={false}
                  duration={500}
                  offset={0}
                  smooth
                  to={to}
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
