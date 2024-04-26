import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    kennaLogo,
    amazona,
    javarestaurant,
    uask,
    amazonaimage,
    githubImage,
    signlanguage,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full-stack Web Developer",
      icon: web,
    },
    {
      title: "Web-development team member",
      icon: mobile,
    },
    {
      title: "Full-stack MERN E-commerce website",
      icon: backend,
    },
    {
      title: "Sign language detection program using ML & Python",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full-stack Application Developer",
      company_name: "Kenna",
      icon: kennaLogo,
      iconBg: "#383E56",
      date: "January 2024 - April 2024",
      points: [
        "Developing and maintaining web applications using React.js and Node.js to replace old legacy applications currently being used by the company",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create web-based solutions for clients",
        "Making changes to website content upon the clients' requests, ensuring their satisfaction within 24 hours",
        "Optimizing and debugging existing code to reduce poor practices and potential future issues, improving the build speed of the application by 8%",
      ],
    },
    {
      title: "Full-stack e-commerce website",
      company_name: "Personal Project",
      icon: amazona,
      iconBg: "#E6DEDD",
      date: "June 2023 - October 2023",
      points: [
        "Designed responsive front-end UIs using React.js, ensuring seamless user experiences across all devices",
        "Engineered and optimized MongoDB databases, improving data storage and retrieval performance",
        "Developed and maintained REST APIs using Node.js and Express.js, enabling efficient data retrieval and manipulation",
        "Leveraged additional libraries such as react bootstrap to improve aesthetic design of the front end, as well as Mongoose schemas to help maintain data integrity and prevent the insertion of invalid or inconsistent data into the database",
      ],
    },
    {
      title: "Java Restaurant App",
      company_name: "Personal Project",
      icon: javarestaurant,
      iconBg: "#383E56",
      date: "November 2022 - December 2022",
      points: [
        "Designed an app that simulates the UI of a real-world restaurant program, including a menu page, an employee information page, a kitchen management page, and a storage room count page",
        "Used objected-oriented programming concepts to organize code i na manner that is clean and easy to maintain and scale",
        "Reduced program length by 10% through improving conciseness, and simplifying logic",
        "Organized and planned the project using UML diagrams and flowcharts",
      ],
    },
    {
      title: "General Tutor",
      company_name: "UASK Education",
      icon: uask,
      iconBg: "#E6DEDD",
      date: "June 2023 - Present",
      points: [
        "Devised and taught lessons on topics such as K-12 high school curriculum, Waterloo Math Contests, and AMC Math Contests",
        "Formulated reports on students' progress for both the employer and the students' parents and communicated future lesson plans customized for each student",
        "Adjusted long-term lesson plans based on the clients' desired timeline and goals (time spent and/or extent of mastery)",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Sign Language Dectector",
      description:
        "Machine learning program that captures the camera and interprets signs in real time",
      tags: [
        {
          name: "tensorflow",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "LSTM",
          color: "pink-text-gradient",
        },
      ],
      image: signlanguage,
      source_code_link: "https://github.com/robinrong1/Sign-Language-Detector",
    },
    {
      name: "E-commerce website",
      description:
        "Web application that simulates a real e-commerce website",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
      ],
      image: amazonaimage,
      source_code_link: "https://github.com/robinrong1/amazona",
    },
    
    {
      name: "Other projects",
      description:
        "Numerous other side projects listed on my github",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "swing",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: githubImage,
      source_code_link: "https://github.com/robinrong1",
    },
  ];
  
  export { services, technologies, experiences, projects };