import css from '@/assets/skills/css.png';
import figma from '@/assets/skills/figma.webp';
import firebase from '@/assets/skills/firebase.png';
import html from '@/assets/skills/html.png';
import js from '@/assets/skills/js.png';
import nestJs from '@/assets/skills/nestJs.svg';
import next from '@/assets/skills/next-js.svg';
import nodeJs from '@/assets/skills/nodejs.png';
import prismaOrm from '@/assets/skills/prisma-orm.png';
import react from '@/assets/skills/react.png';
import redux from '@/assets/skills/redux.png';
import sass from '@/assets/skills/sass.png';
import tailwind from '@/assets/skills/tailwind.svg';
import ts from '@/assets/skills/ts.png';
import { Ticker } from '@/components';

import './skills.css';

interface Skill {
  img: string;
  level: string;
  title: string;
}

const skillsData: Skill[] = [
  {
    title: 'React',
    img: react,
    level: 'advanced',
  },
  {
    title: 'Next.js',
    img: next,
    level: 'advanced',
  },
  {
    title: 'Typescript',
    img: ts,
    level: 'advanced',
  },
  {
    title: 'Redux (RTK Query)',
    img: redux,
    level: 'advanced',
  },
  {
    title: 'Javascript',
    img: js,
    level: 'advanced',
  },
  {
    title: 'NestJs',
    img: nestJs,
    level: 'advanced',
  },
  {
    title: 'Node.js',
    img: nodeJs,
    level: 'advanced',
  },
  {
    title: 'Prisma ORM',
    img: prismaOrm,
    level: 'advanced',
  },
  {
    title: 'Firebase',
    img: firebase,
    level: 'advanced',
  },
  {
    title: 'Html',
    img: html,
    level: 'advanced',
  },
  {
    title: 'Css',
    img: css,
    level: 'advanced',
  },
  {
    title: 'Sass',
    img: sass,
    level: 'advanced',
  },
  {
    title: 'Tailwind',
    img: tailwind,
    level: 'advanced',
  },
  {
    title: 'Figma',
    img: figma,
    level: 'advanced',
  },
];

export const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills__inner">
        <h2 className="section__title text-border tac">skills</h2>

        <ul className="skills__list">
          {skillsData.map(({ title, img, level }) => (
            <li key={title + level} className="skill__item skill__border">
              <div className="skill__img ">
                <img alt={title} src={img} />
              </div>
              <span>{title}</span>
            </li>
          ))}
        </ul>
      </div>

      <Ticker />
    </section>
  );
};
