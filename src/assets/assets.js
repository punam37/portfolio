import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.avif';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  
  {
    title: 'Data Analysis',
    icon: FaDatabase,
    description: 'Collecting, processing, and interpreting data to help make data-driven decisions.',
    tags: ['Python', 'SQL', 'Excel', 'Pandas','NumPy','Matplotlib','Power BI']
  },
  // {
  //   title: 'Mobile Development',
  //   icon: FaMobileAlt,
  //   description: 'Building cross-platform mobile applications with modern tools.',
  //   tags: ['React Native', 'Flutter', 'Ionic', 'Swift']
  // },
  // {
  //   title: 'Cloud & DevOps',
  //   icon: FaCloud,
  //   description: 'Deploying and managing applications in cloud environments.',
  //   tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
  // },
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['HTML', 'CSS', 'JavaScript', ,'jQuery', 'React']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['PHP', 'Laravel', 'CodeIgniter', 'MySQL','REST APIs']
  },
  // {
  //   title: 'Tools & Technologies',
  //   icon: FaTools,
  //   description: 'Essential tools and technologies I use in my development workflow.',
  //   tags: ['Git & GitHub', 'Webpack', 'Figma', 'Jest']
  // }
];



export const projects = [
  {
    title: "Blinkit Dashboard (Power BI)",
    description: "Developed an interactive Power BI dashboard for Blinkit, providing real-time insights into sales, inventory, and delivery performance.",
    image: projectImg1,
    tech: ["Power BI", "-", "-", "-"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "E-commerce Dashboard (Power BI)",
    description: "An e-commerce dashboard that shows sales, orders, customers, and revenue in real time.",
    image: projectImg2,
    tech: ["Power BI", "-", "-", "-"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "E-commerce Sales Dashboard (Excel)",
    description: "An e-commerce dashboard that shows sales, orders, customers, and revenue in real time.",
    image: projectImg3,
    tech: ["Excel", "-", "-", "-"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "HR Analytics Dashboard (Tableau)",
    description: "HR Analytics dashboard in Tableau to track employee performance, attendance, turnover, and other key HR metrics visually",
    image: projectImg4,
    tech: ["Tableau", "-", "-", "-"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  {
    title: "Chat App",
    description: "A real-time chat application with group messaging, emojis, and file sharing.",
    image: projectImg5,
    tech: ["Socket.IO", "React", "Node.js", "MongoDB"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "#",
    code: "#",
  },
  {
    title: "AI Image Generator",
    description: "Generate images using AI prompts powered by OpenAI's DALL·E model and Cloudinary.",
    image: projectImg6,
    tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "#",
  }
];


export const workData = [
  {
    role: "Senior Backend Developer",
    company: "Magical Balloons",
    duration: "2026 - Present",
    description:
      "Manages server-side logic, databases, and APIs, ensuring efficient data handling, reliability, and scalability of applications.",
    color: "purple"
  },
  {
    role: "Web Developer",
    company: "Genie soft System",
    duration: "2023 - 2023",
    description:
      "Manages server-side logic, databases, and APIs, ensuring efficient data handling, reliability, and scalability of applications.",
    color: "pink"
  },
  {
    role: "Software Engineer",
    company: "Geecon Systems",
    duration: "2021 - 2023",
    description:
      "A software engineer creates and improves software solutions by writing code, solving problems, and optimizing system performance.",
    color: "blue"
  }
];
