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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    kolekta,
    project1,
    project2
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Technical Writer",
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
      title: "Full-Stack Developer (Remote, India)",
      company_name: "Uniqus OSS",
      icon: kolekta,
      iconBg: "#383E56",
      date: "November 2022 - April 2023",
      points: [
        "Develop and maintain integrations with third-party softwares and services as needed.",
        "Implement security features to protect user data and prevent unauthorized access to the software.",
        "Write code that adheres to established standards and best practices, and ensure that code is thoroughly tested before it is deployed.",
        "Collaborate with other engineers to ensure that software is modular, scalable and maintainable.",
        "Work with product managers and designers to understand the software's functionality and user experience.",
        "Participate in weekly stand-ups to communicate with all the team members on progress and blockers if any."
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Kolekta Platforms",
      icon: kolekta,
      iconBg: "#E6DEDD",
      date: "September 2022 - March 2023",
      points: [
        "Collaborated with designers and other developers to ensure consistency in the visual design and user experience of the website and application.",
        "Develop and maintain the company's public-facing website.",
        "Creating a web based tax preparation application that helps users file their taxes online",
        "Implement responsive design to ensure the website and application are user-friendly on a range of devices, including mobile phones and tablets.",
        "Develop an intuitive user interface that simplifies complex tax calculations.",
        "Work with backend developers to develop APIs that facilitate communication between the frontend and backend systems."
      ],
    },
    {
      title: "Full-Stack Developer Intern (Remote, Nigeria)",
      company_name: "Ingressive For Good X ZuriBoard",
      icon: kolekta,
      iconBg: "#383E56",
      date: "February 2022 - July 2023",
      points: [
        "Improved frontend performance at a higher rate by using sanity.io a user interactively headless CMS for improving digital experiences.",
        "Utilized NodeJs and its packages to integrate MPESA a virtual banking system that provides transaction services through a SIM card.",
        "Held weekly standups to check team progress and solve challenges.",
        "Leveraged knowledge in Full-stack development, Git and Github, headless CMS, CI/CD"
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: kolekta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: project1,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: project2,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };