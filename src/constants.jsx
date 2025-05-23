import findGatsby from "./images/findGatsby.png";
import battleAtSea from "./images/battle-at-sea-react.png";
import tbbb from "./images/tbbb.png";
import stj from "./images/splitTheJar.png";

export const documentTitle = {
  home: "Home - Stephanie Viveros",
  about: "About Me - Stephanie Viveros",
  contact: "Contact Me - Stephanie Viveros",
  projects: "Projects - Stephanie Viveros",
  resume: "Resume - Stephanie Viveros",
  error: "404 - Page Not Found",
};

export const githubAPIUrl = "https://api.github.com/users/midKnight92";
export const githubUrl = "https://github.com/MidKnight92";
const linkedinUrl = "https://www.linkedin.com/in/stephanie-viveros/";
const phoneNumber = "te:+13128833708";
export const email = "stephanie.viveros.dev@gmail.com";
export const location = "Chicago, IL 60601";
export const resumeUrl =
  "https://docs.google.com/document/d/14taZmzSKYwsTdVMHeAdPs3aSg9U5ZA94pt1s56VxX8g/edit?usp=sharing";

export const contactInfo = [
  { Email: `mailto:${email}` },
  { LinkedIn: linkedinUrl },
  { Github: githubUrl },
  { Phone: phoneNumber },
];

export const projects = [
  {
    projectName: "Tech Bit-by-Bit",
    description: `Tech Bit-by-Bit is a beginner-friendly tech media site that breaks down complex tech concepts into simple, relatable explanations—one bit at a time. It’s perfect for beginners, curious minds, and anyone who’s ever felt lost in the jargon. The site is modified and personalized from the tailwind-nextjs-starter blog and built with Next.js, Tailwind CSS, Contentlayer, and Umami. I’ve also added Clerk, Cusdis, Google AdSense, and more. Expected to deploy on Vercel mid-June.`,
    image: tbbb,
    url: "",
  },
  {
    projectName: "Split the Jar",
    description: `Split the Jar takes the guesswork out of “who gets what.” It’s fair, it’s fast, and it doesn’t spill. A thoughtfully crafted tool that keeps things smooth when it’s time to divvy things up—no broken jars, just balanced outcomes. Built with Next.js, Material UI, and a dash of other good stuff. Expected sometime after the Tech Bit-by-Bit launch.`,
    image: stj,
    url: "",
  },
  {
    projectName: "Find Gatsby",
    description: `Find Gatsby is an interactive and playful web application I developed using React and Styled Components. The app challenges users to help me locate my adventurous dog, Gatsby, by flipping cards to uncover his whereabouts and daily activities. It features dynamic animations, responsive design, and intuitive gameplay, providing an engaging user experience. This project showcases my front-end development skills, including state management, responsive styling, and interactive UI design.`,
    image: findGatsby,
    url: "https://find-gatsby.netlify.app",
  },
  {
    projectName: "Battle-At-Sea",
    description:
      "Battle-At-Sea is my take on the classic multiplayer game Battlefront, rebuilt with React, TypeScript, Zustand, and Styled Components. Currently on hold while I focus on other projects, this project is an upgraded version of my original JavaScript and Node-based game—showcasing my growth in building interactive, dynamic web applications.",
    image: battleAtSea,
    url: "",
  },
];

export const nav = [
  { path: "/", label: "< SV />" },
  { path: "/about", label: "About" },
  { path: "/resume", label: "Resume" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

export const iconInfo = [
  { icon: "fa-brands fa-github", url: githubUrl, label: "Github profile" },
  {
    icon: "fa-brands fa-linkedin",
    url: linkedinUrl,
    label: "LinkedIn profile",
  },
  {
    icon: "fa-solid fa-file-lines",
    url: resumeUrl,
    label: "View résumé on Google Docs",
  },
];

export const resume = {
  experience: [
    {
      title: "Associate Consultant",
      company: "Capgemini",
      location: "Chicago, IL",
      duration: "June 2021 - Sep. 2024",
      description: "",
    },
    {
      title: "Owner",
      company: "U.S.Installers LLC",
      location: "Hammond, IN",
      duration: "July 2018 - Sep. 2019",
      description: "",
    },
    {
      title: "Shift Supervisor",
      company: "Starbucks Coffee Corporation",
      location: "Schererville, IN",
      duration: "May 2012 - June 2021",
      description: "",
    },
    {
      title: "Starbucks Team Member",
      company: "Target Corporation",
      location: "Munster, IN",
      duration: "Oct. 2010 - May 2012",
      description: "",
    },
  ],
  education: {
    title: "Bachelor Arts - Business, Entrepreneurship",
    facility: "Purdue University - Calumet",
    location: "Hammond, IN",
    duration: "2010 - 2014",
  },
  certifications: [
    {
      title: "Software Engineering Immersive",
      issuer: "General Assembly",
      year: "2019",
    },
    {
      title: "CS50's Introduction to Computer Science",
      issuer: "edX",
      year: "2020",
    },
    {
      title: "Oracle Certified Associate, Java SE 8 Programmer",
      issuer: "Oracle",
      year: "2021",
    },
    {
      title: "TypeScript Essential Training",
      issuer: "LinkedIn Learning",
      year: "2021",
    },
    {
      title: "Learning Jira Software",
      issuer: "LinkedIn Learning",
      year: "2021",
    },
    {
      title: "Postman Essential Training",
      issuer: "LinkedIn Learning",
      year: "2021",
    },
    {
      title: "React Basics",
      issuer: "Coursera",
      year: "2024",
    },
    {
      title: "Angular - The Complete Guide (2024 Edition)",
      issuer: "Udemy",
      year: "2024 - Exp. 2025",
    },
    {
      title: "Angular (Basic) Certificate",
      issuer: "HackerRank",
      year: "2024",
    },
    {
      title: "Angular (Intermediate) Certificate",
      issuer: "HackerRank",
      year: "2024",
    },
    {
      title: "React Essential Training Certificate",
      issuer: "LinkedIn Learning",
      year: "2024",
    },
    {
      title: "React Hooks",
      issuer: "LinkedIn Learning",
      year: "2024",
    },
    {
      title: "React: State Management",
      issuer: "LinkedIn Learning",
      year: "2024",
    },
    {
      title: "React: Using TypeScript",
      issuer: "LinkedIn Learning",
      year: "2024",
    },
    {
      title: "React.js: Essential",
      issuer: "LinkedIn Learning",
      year: "2024",
    },
    {
      title: "Tailwind CSS Essential Training",
      issuer: "LinkedIn Learning",
      year: "2024",
    },
    {
      title: "React: Design Patterns",
      issuer: "LinkedIn Learning",
      year: "2024",
    },
    {
      title: "SQL Essential Training",
      issuer: "LinkedIn Learning",
      year: "2024",
    },
  ],
};

export const srcPaths = [
  "MZFUJL42RWo?si=1c4MR37_2yo_embn",
  "TtKHPUt4Yxs?si=jr8Gpfj4iQ_VN7Po",
  "qJHvN7Vcmso?si=upxwYl8QY2Xw9Fkm",
  "DJ84-YiamUc?si=W1tUbMjOzIXi63X3",
];

export const thankYouMessage =
  "Thanks for your message! I’m looking forward to connecting and exploring how we can build something great together! Talk to you soon.";

export const errorMessage =
  "Oops! Something went wrong while sending your message. Please try again, or feel free to reach out to me directly. I’m excited to connect and I will get in touch soon!";

export const profanityMessage =
  "Your input contains language that is not allowed. Please revise your entry and try again.";

export const invalidNameMessage = "Name should only contain 2 or more letters.";

export const invalidEmailMessage =
  "Please enter valid email. (example@domain.com)";

export const invalidTextMessage = "Your message cannot be empty.";
