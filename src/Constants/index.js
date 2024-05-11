import css from "../assests/css.png";
import reactjs from "../assests/react.png";
import html from "../assests/html.png";
import nodejs from "../assests/node.png";
import mongodb from "../assests/mongodb.png";
import github from "../assests/github.png";
import figma from "../assests/figma.png";
import android from "../assests/Android.png";
import prol from "../assests/e-Tickes.png"; 
import prol1 from "../assests/resort.png"; 
import prol2 from "../assests/Ebooh.png"; 
import prol3 from "../assests/python.png"; 
import prol4 from "../assests/andoid.png"; 
import prol5 from "../assests/sql.png"; 
import prol6 from "../assests/react-eco.png"
const services = [
  {
    title: "Web Developer",
    icon: css,
  },
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "UI/UX Designer",
    icon: figma,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Github",
    icon: github,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Android App",
    icon: android,
  }
];

const projects = [
  {
    name: "ASP.Net Entity framwork API Project",
    description:
      "I developed an advanced e-commerce website for booking e-tickets with ASP.NET Entity Fram work API, MYSQL.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: prol,
    source_code_link: "https://github.com/vanitaperu/eTickets", // Add your link here
  },

  {
    name: "ASP.Net Entity framwork MVC Project",
    description:
      "Developed an advanced e-commerce website for resort booking using ASP.NET,.NET,API,MYSQL",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: prol1,
    source_code_link: "https://github.com/vanitaperu/WhiteLagoonResort", // Add your link here
  },

  {
    name: "Python Django Project",
    description:
      "I developed pyhton django CRUD application created student management system.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: prol3,
    source_code_link: "https://github.com/vanitaperu/CRUD", // Add your link here
  },

  {
    name: "Advance Java",
    description:
      "Developed an website using Ecllips, java,mysql database created library management system.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: prol2,
    source_code_link: "https://github.com/vanitaperu/Advance_JavaEBook", // Add your link here
  },

  {
    name: "Android App",
    description:
      "Developed an android app appliances app and android studio and java.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: prol4,
    source_code_link: "https://github.com/vanitaperu/AppliancesApp", // Add your link here
  },

  {
    name: "MySQL ",
    description: "Developed an student management system .",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: prol5,
    source_code_link: "https://github.com/vanitaperu/SQL-Database", // Add your link here
  },

  {
    name: "React project ",
    description:
      "Developed an E-Commerce Application using Reactjs, moongodb,firebase, react-redux .",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: prol6,
    source_code_link: "https://github.com/vanitaperu/React-Ecom-vpshop", // Add your link here
  },
];

export { services, technologies, projects };
