
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
    `Greetings 👋🏻, my name is Roman and I'm glad to see you in my portfolio!`,
    `I've been in IT for more than 2 years, more than 1.5 years doing frontend development of commercial projects. 
    Last year I have been actively developing web applications (React).`,
    `In all that time, I've managed to work independently as a freelancer and 
    I've worked for a small company.`,
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
      Web application development with <b> React.js (+ Typescript, Hooks, Axios, Redux(RTK Query)), Next.js, Vite</b>`,
      `Backend: <b>Node.js, Express.js, MongoDB, Prisma, REST API, JWT, OAuth2.0, Docker</b>`,
      `Advanced <b>HTML</b> (HTML5 API, good understanding of semantic tags),  
      <b>Tailwind CSS</b> (flexbox, grid, animation css), <b>JavaScript</b> (ES6+);
      `,
      'Experience in using graphic editors: <b>Figma</b>',
    ],
  },
};

export const experienceData: Experience[] = [
  {
    where: 'SD Company (Frontend Developer)',
    date: '09.2023 - 02.2024',
    description: `
    My responsibilities included creating the company's main website, 
    developing its functionality, maintaining its operation, and optimizing it.
    `,
    techlogies: [
      'React',
      'Redux',
      'React-router',
      'Styled Components',
      'Github',
    ],
  },

  {
    where: 'Freelance (Fullstack)',
    date: '02.2024 - 05.2024',
    description: `
    Worked as a freelancer, creating dynamic and high-performance web applications. Main responsibilities included developing interactive user interfaces using a component-based approach to ensure high reusability and code maintainability. Managed application state to ensure efficient and predictable user interface behavior. Created Docker files and configured Docker Compose to work with multi-service architectures.  
    Ensured effective communication with clients to achieve required results on time and according to project specifications.
    `,
    techlogies: [
      'React',
      'Redux',
      'React-router',
      'Tailwind CSS',
      'Github',
      'Docker',
    ],
  },
];
