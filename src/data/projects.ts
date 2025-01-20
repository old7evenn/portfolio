import loading from '@/assets/loading.gif';
import apiExplorer from '@/assets/projects/api_explorer.png';
import employee from '@/assets/projects/employee.png';
import sdProdaction from '@/assets/projects/sd_prodaction.png';
import social from '@/assets/projects/social.png';
import pokeFight from '@/assets/projects/poke_fight.png';

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
    img: pokeFight,
    title: 'Poke - Fight',
    stack: ['React', 'TanStack', 'Motion', 'Tailwin CSS', 'NestJs', 'TypeORM', 'PostgreSQL'],
    link: 'https://poke-fight-one.vercel.app',
  },
  {
    img: sdProdaction,
    title: 'SD Prodaction',
    stack: ['Html', 'Css', 'Js'],
    link: 'https://sdproduction.netlify.app/en/home',
  },
  {
    img: social,
    title: 'Social network',
    stack: ['React', 'RTK Query', 'Node.js(Express)'],
    link: 'https://social-network-client-github-io.vercel.app',
  },
  {
    img: employee,
    title: 'Employee project',
    stack: [
      'React',
      'RTK Query',
      'Node.js(Express)',
      'DND Kit',
    ],
    link: 'https://github.com/old7evenn/employee-project-client',
  },
  {
    img: apiExplorer,
    title: 'Api Explorer',
    stack: [
      'Next.js',
      'React',
      'RTK Query',
      'React-hook-form',
      'Shadcn Ui',
      'Axios',
      'Rest API',
      'GraphQL',
      'Firebase',
    ],
    link: 'https://api-explorer-kappa.vercel.app/?method=POST',
  },
  {
    img: loading,
    title: 'SOON...',
    stack: [''],
  },
];
