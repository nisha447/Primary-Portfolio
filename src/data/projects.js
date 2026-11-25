import LMS from "../assets/project/LMS.png"
import TaskFlow from "../assets/project/TaskFlow.png"
import SortingVisualizer from "../assets/project/SortingVisualizer.png"
import bmi from "../assets/project/bmi.png"
import pg from "../assets/project/PG.png"
import qr from "../assets/project/qr.png"
import website from "../assets/project/website.png"

const projects = [
  
  {
    id: 1,
    title: "AI-Powered Learning Management System",
    description:
      "Developed a full-stack LMS with authentication, role-based access, and responsive student and educator dashboards.",

    image: LMS,

    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "AI chatbot-Gemini"
    ],

    github: "https://github.com/nisha447/lms-full-stack",
    live: "https://yet-to-be-hosted.vercel.app/",

    featured: true,
  },

  {
    id: 2,
    title: "Taskflow – Task Management Web Application ",
    description:
      "Developed a responsive task management application with authentication and user-specific task management. ",

    image: TaskFlow,

    tech: [
      "React",
      "Tailwind CSS  ",
      "Context API",
      "Local Storage",
      "Vite",
      
    ],

    github: "https://github.com/nisha447/Task-Manager",
    live: "https://task-manager-iota-olive-23.vercel.app/",
  },

  {
    id: 3,
    title: "Sorting Visualizer ",
    description:
      "Developed an interactive web application to visualize popular sorting algorithms step-by-step.",

    image: SortingVisualizer ,

    tech: [
      "HTML",
      "CSS",
      "JavaScript"
    ],

    github: "https://github.com/nisha447/SORTING_VISUALISER",
    live: "https://sorting-visualiser-mocha.vercel.app/",
  },
  {
    id: 4,
    title: "AI-Powered Website Builder",
    description:
      "AI-powered website builder that generates website layouts and content from user prompts using Gemini AI.",
    image: website,

    tech: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Gemini AI",
      "Tailwind CSS",
    ],

    github: "https://github.com/nisha447/AI-Powered-Website-Builder",
    live: "https://yet-to-be-hosted.vercel.app/",

    featured: true,
  },

  {
    id: 5,
    title: "QR Code Generator",
    description:
      "Generate customizable QR codes instantly from text or URLs using JavaScript.",

    image: qr,

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "QR Code API",
    ],

    github: "https://github.com/nisha447/QR-Code-Generator",
    live: "https://genrateq.netlify.app/",
  },

  {
    id: 6,
    title: "Password Generator",
    description:
      "React application for generating secure random passwords with customizable options.",

    image: pg,

    tech: [
      "React",
      "JavaScript",
      "Tailwind CSS",
    ],

    github: "https://github.com/nisha447/Password-Generator",
    live: "https://password-generator-pi-two-37.vercel.app/",
  },
  {
    id: 7,
    title: "BMI Calculator",
    description:
      "Interactive BMI calculator with instant health analysis.",

    image: bmi,

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
    ],

    github: "https://github.com/nisha447/BMI-Calculator",
    live: "https://aboutbmi.netlify.app/",
  },
];

export default projects;