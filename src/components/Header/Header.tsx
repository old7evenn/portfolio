import ReactScroll from 'react-scroll';

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

const Link = ReactScroll.Link as any

export const Header = () => {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link spy className="header__logo" hashSpy={false} duration={500} smooth to="main">
          <img alt="logo" src={logo} />
        </Link>

        <nav className="header__nav">
          <ul className="header__nav--list">
            {nav.map(({ to, title }) => (
              <li key={to + title}>
                <Link
                  spy
                  activeClass="active"
                  hashSpy={false}
                  duration={500}
                  offset={0}
                  smooth
                  to={to}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
