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
    `I am a Frontend Engineer focused on building high-performance web interfaces
      and complex desktop ecosystems. My expertise bridges the gap between sleek UI
      and heavy engineering: from optimizing Core Web Vitals to writing low-level 
      hardware drivers for Electron.`,
    `I don't just write code; I architect solutions. Whether it's decoupling legacy
      monoliths using Adapter patterns, engineering custom heuristic algorithms for 
      barcode scanning, or isolating blocking I/O operations in Node.js child processes — 
      I solve expensive business problems with strict type safety and scalable architecture.`,
  ],
  list: {
    title: 'Core Competencies:',
    items: [
      'Architecting scalable, high-performance applications using the modern stack: <b>React, Next.js, TypeScript, Redux (RTK Query), Zustand and TanStack Query</b>.',
      'Engineering sophisticated UI systems with <b>Tailwind CSS</b> and architecting complex, type-safe validation flows using <b>React Hook Form</b> and <b>Zod</b>.',
      'Building fault-tolerant Electron desktop applications: writing low-level hardware drivers (<b>CCNET</b>), isolating I/O with <b>Node.js child_process</b>, and integrating native DLLs.',
      'Managing the full development lifecycle: from containerizing backend services (<b>NestJS, Docker, PostgreSQL</b>) to designing user experiences in <b>Figma</b>.',
    ],
  },
};

export const experienceData: Experience[] = [
  {
    where: 'Python Automation Masters (Software Engineer)',
    date: '02.2024 - present',
    description: `
      Led engineering for two critical products. For the <b>"Tviy Kvytok"</b> platform, I decoupled a legacy monolith using the <b>Adapter Pattern</b>, engineered a browser-based <b>ZXing scanner</b> (+40% scan rate), and architected a <b>Quality Ecosystem (CI/CD, Datadog)</b> that cut regression bugs by ~40%. 
      Simultaneously, for the <b>Parking Ecosystem</b> (<b>1M+ UAH/mo</b>), I built a fault-tolerant Electron kiosk with <b>Zero Downtime</b>. Designed custom <b>Redux Middleware</b> for IPC and isolated blocking hardware I/O in <b>Node.js child processes</b>, ensuring 60 FPS performance under heavy load.
    `,
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Electron',
      'Redux Toolkit',
      'Node.js (Child Process)',
      'TanStack Query',
      'Zod',
      'CI/CD'
    ],
  },
  {
    where: 'SD Company (Frontend Developer)',
    date: '06.2023 - 02.2024',
    description: `
      Architected a scalable <b>White-Label Checkout</b> solution (Next.js) with a unique <b>Runtime Configuration layer</b>, enabling merchants to customize UI and logic without code deployments. Achieved sub-second load times via intelligent <b>SSR caching strategies</b> and implemented complex, type-safe validation flows using <b>React Hook Form</b> and <b>Zod</b>.
    `,
    technologies: ['Next.js', 'TypeScript', 'TanStack Query', 'React Hook Form', 'Zod'],
  },
];
