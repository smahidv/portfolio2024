import booking from "../src/assets/booking.png"
import xuma from "../src/assets/xuma.png"
import perfume from "../src/assets/perfume.png"
import onlineExamination from "../src/assets/onlineExamination.png"



export const skills = ["front end", "back end", "full stack", "design to code"];
export const backend = ["Laravel", "PHP", "Java", 'spring Boot', "MySQL", "MongoDB",];
export const frontend = ["HTML5", "CSS3", "React", "Nextjs", "JavaScript", 'TailwindCSS'];
export const projectsList = [
    {
        title: "Scent of a Dream",
        image: perfume,
        description: "For this luxury perfume brand, I designed a user-friendly website, I helped elevate the brand's online presence, making it easy for customers to explore and engage with their products.",
        date: "Sep 29, 2024",
        languages: ["Next.js","TypeScript", "Framer Motion"],
        code: "https://github.com/smahidv/xuma.git",
        live: "https://perfume-project-iota.vercel.app/",
        color:"#D5CFCC"
    },
    {
        title: "Xuma",
        image: xuma,
        description: "I created a responsive website for a fitness center to showcase their services and membership plans. The website improved user experience and helped increase client inquiries.",
        date: "Nov 9, 2024",
        languages: ["Next.js", "TailwindCSS", "Framer Motion"],
        code: "https://github.com/smahidv/xuma.git",
        live: "https://xuma-chi.vercel.app/",
        color:"#EFB6C8"
    },
    {
        title: "Online Examination ",
        image: onlineExamination,
        description: "I built a platform for a Moroccan agency that simplifies school exams. Teachers can create and grade exams, while administrators manage users, and students can take exams and access their grades.",
        date: "Jun 12, 2024",
        languages: ["Laravel", "MySQL", "TailwindCSS"],
        code: "https://github.com/smahidv/school-app.git",
        color:"#C9E6F0"
    },
    {
        title: "Booking Platform",
        image: booking,
        description: "I developed a platform focused on booking rooms. With a robust backend and real-time data handling, the site ensures a smooth and fast booking experience.",
        date: "Oct 20, 2023",
        languages: ["Express.js", "MongoDB", "React"],
        code: "https://github.com/smahidv/mern-booking.git",
        live: "https://mern-task-app-lwts.onrender.com/",
        color:"#FBC6BA"
    }
];


export  const menuItems = [
    { name: "home", to: "#" },
    { name: "about me", to: "#aboutMe" },
    { name: "projects", to: "#projects" },
    { name: "let's talk", to: "#contact" },
  ]
