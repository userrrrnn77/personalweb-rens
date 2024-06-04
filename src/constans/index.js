import ytb from "../assets/ytb.png";
import edusity from "../assets/edusity.png";
import project4 from "../assets/project-4.jpg";
import bot from "../assets/bot.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Rens Bot | Ai",
    image: bot,
    description:
      "Chatbot is software or computer program that simulates human conversation or chat through text or voice interactions. Users in business-to-consumer (B2C) and business-to-business (B2B) environments are increasingly using chatbot virtual assistants to handle simple tasks.",
    technologies: ["HTML", "CSS", "React", "API"],
    links: "https://rens-bot.vercel.app"
  },
  {
    title: "Campus Forum App",
    image: edusity,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Next JS", "Firebase"],
    links: "https://edusity-rens-online.vercel.app"
  },
  {
    title: "Data Analyst",
    image: project4,
    description:
      "Data Analyst is a profession that carries out work from a branch of science, namely data analysis or data analytics. Data Analytics itself is the science of exploring and developing big data to help make better decisions.",
    technologies: ["MS Exel", "Python", "MySQL", "Apache Kafka", "Google Sheets"],
    links: "/"
  },
  {
    title: "Youtube Clone",
    image: ytb,
    description:
      "YouTube is the most popular platform for watching videos online today. This platform even allows users to upload and share their own videos.",
    technologies: ["HTML", "CSS", "React", "API", "Firebase"],
    links: "https://youtube-clone-rens.vercel.app"
  },
];

export const CONTACT = {
  address: "DK. Kulon 77 Wakanda, Madagaskar, Asgard",
  phoneNo: "+6281234567890",
  email: "rendyharvest@gmail.com",
};