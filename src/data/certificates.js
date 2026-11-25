import Bootstrap from "../assets/Certificates/Frontend with Bootstrap (IBM)Coursera.pdf";
import Python from "../assets/Certificates/Python Coursera.pdf";
import UI from "../assets/Certificates/UI UX Design Coursera.pdf";
import PHP from "../assets/Certificates/WA in PHP Coursera.pdf";

const certificates = [
  {
    id: 1,
    title: "Frontend with Bootstrap",
    issuer: "Coursera-IBM",
    date: "2025",
    credential: Bootstrap,
  },
  {
    id: 2,
    title: "Python",
    issuer: "Coursera",
    date: "2025",
    credential: Python,
  },
  {
    id: 3,
    title: "UI UX Design",
    issuer: "Coursera",
    date: "2026",
    credential: UI,
  },
  {
    id: 4,
    title: "Web Applications in PHP",
    issuer: "Coursera",
    date: "2026",
    credential: PHP,
  }
];

export default certificates;