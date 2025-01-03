interface AboutData {
  text: string[];
  list: List;
}

type List = {
  title: string;
  items: string[];
};

type Experience = {
  where: string;
  date: string;
  description: string;
  techlogies: string[];
};

export const aboutData: AboutData = {
  text: [
    "Greetings 👋🏻, my name is Roman and I'm glad to see you in my portfolio!",
    `I'm an 18-year old dedicated software developer with 2+ years of experience in 
     developing web applications using modern JavaScript technologies. I am a fast learner
     and a team player, able to adapt to new technologies and methodologies.`,
    `In 2023, I entered the university to study Computer Science and Information Technology.
    Now I am continuing my education at this university, deepening my knowledge and skills in
    programming, system administration, cybersecurity, and data analysis. My studies include 
    both theoretical courses and practical laboratory work, which help me develop critical thinking
    and solve real-world technical problems. I am actively involved in project work, hackathons, 
    and student conferences, which allows me to broaden my professional horizons and create useful 
    connections in the IT community.`,
  ],
  list: {
    title: 'Skils:',
    items: [
      `Good experience in developing complex and responsive websites/web applications.  
      Web application development with <b> React, Next.js (+ Typescript, Axios, Redux(RTK Query), TanStack, React-Hook-Form, Zod, Prettier, ESLint), Vite</b>`,
      'Backend: <b>NestJs, Node.js, Express.js, MongoDB, Prisma, Docker</b>',
      `Advanced <b>HTML</b> (HTML5 API, good understanding of semantic tags),  
      <b>Tailwind CSS</b> (flexbox, grid, animation css), <b>JavaScript</b> (ES6+);`,
      'Experience in using graphic editors: <b>Figma</b>',
    ],
  },
};

export const experienceData: Experience[] = [
  {
    where: 'Python Automation Masters (Frontend Developer)',
    date: '02.2024 - 12.2024',
    description: `
    Led frontend development of recruitment platform that enables HR professionals to manage candidates and conduct AI-powered interviews.
    Designed and developed a comprehensive dashboard system using React and Tanstack.
    Implemented routing and optimised page loading using TanStack Router by setting up lazy page loading and private routes.
    Implemented optimistic updates for CRUD operations.
    Built efficient data caching system reducing API calls by 40%.`,
    techlogies: [
      'React',
      'TanStack',
      'React-Hook-Form',
      'MUI',
    ],
  },
  {
    where: 'SD Company (Frontend Developer)',
    date: '01.2023 - 02.2024',
    description: `
    Developed and maintained a responsive company website, improving loading speed by 20%. 
    Improved the site’s loading speed by 20% through code refactoring, lazy loading, and efficient asset management, enhancing user experience and SEO rankings.
    Built a custom admin panel for managing smart washing machines, enabling real-time monitoring and control.
    `,
    techlogies: [
      'React',
      'RTK Query',
      'Styled Components',
    ],
  },
];
