interface AboutData {
  list: List;
  text: string[];
}

interface List {
  items: string[];
  title: string;
}

interface Experience {
  date: string;
  description: string;
  technologies: string[];
  where: string;
}

export const aboutData: AboutData = {
  text: [
    "Greetings 👋🏻, my name is Roman and I'm glad to see you in my portfolio!",
    `My expertise lies in the React and TypeScript ecosystem, where I focus on creating 
    high-performance web applications and desktop. What truly drives me are the complex 
    integration challenges: architecting solutions that connect intuitive user interfaces
    with the intricate logic of low-level systems and hardware. I'm not just building UIs; 
    I'm engineering complete, end-to-end user experiences.`,
    `I am currently advancing my skills through a Computer Science degree, constantly
     seeking to combine academic fundamentals with real-world problem-solving.`,
  ],
  list: {
    title: 'Skils:',
    items: [
      'Architecting and developing complex, high-performance applications using a modern frontend stack: <b>React, Next.js, TypeScript, Redux (RTK), and TanStack Query</b>.',
      'Building robust Electron desktop applications, including writing low-level hardware drivers (<b>CCNET</b>), creating fault-tolerant architectures with <b>Node.js child_process</b>, and integrating native DLLs.',
      'Mastery of modern UI development, creating sophisticated interfaces with semantic <b>HTML5</b>, advanced <b>CSS (Tailwind CSS)</b>, and building complex, validated forms with <b>React Hook Form</b> and <b>Zod</b>.',
      'Experience in the full development lifecycle, from building and containerizing backend services (<b>NestJS, Docker, PostgreSQL</b>) to designing UI/UX in <b>Figma</b>.',
    ],
  },
};

export const experienceData: Experience[] = [
  {
    where: 'Python Automation Masters (Software Engineer)',
    date: '02.2024 - present',
    description: `
      Architected a fault-tolerant parking automation ecosystem (Electron & PWA). Engineered its core components, from a custom binary protocol driver (CCNET) and multi-process hardware layer (Node.js child_process) to a real-time UI with WebSockets.
    `,
    technologies: [
      'React',
      'TypeScript',
      'RTK',
      'TanStack(Query, Router)',
      'Electron',
      'WebSockets',
    ],
  },
  {
    where: 'SD Company (Frontend Developer)',
    date: '06.2023 - 02.2024',
    description: `
      Developed two key products: a high-performance, fully customizable e-commerce checkout platform (Next.js, Shopify API) and a real-time admin panel for monitoring and managing a network of IoT devices (React, RTK Query).
    `,
    technologies: ['Next.js', 'TanStack Query', 'React Hook Form', 'TypeScript'],
  },
];
