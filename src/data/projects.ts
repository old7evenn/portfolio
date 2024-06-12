import social from '@/assets/projects/social.png';
import employee from '@/assets/projects/employee.png';
import loading from '@/assets/loading.gif';

type TProject = {
  img: string;
  stack: string[];
  title: string;
  description?: string;
  link?: string;
  adaptive?: 'PC' | 'Mobile';
};

export const projectData: TProject[] = [
  {
    img: social,
    title: 'Social network',
    stack: ['React', 'Redux Toolkit', 'React-router-dom', 'Node.js(Express)'],
    link: 'https://github.com/old7evenn/react-redux-toolkit',
  },
  {
    img: employee,
    title: 'Employee project',
    stack: [
      'React',
      'Redux Toolkit',
      'React-router-dom',
      'Node.js(Express)',
      'DND Kit',
    ],
    link: 'https://github.com/old7evenn/employee-project-client',
  },
  {
    img: loading,
    title: 'SOON...',
    stack: [''],
  },
];
