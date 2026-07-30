import type { PortfolioData } from "@/types/portfolio";

const basePath = process.env.NODE_ENV === "production" ? "/muskan_portfolio" : "";

export const portfolio: PortfolioData = {
  hero: {
    name: "Muskan Daruka",
    title: "Frontend-Focused Software Developer",
    taglines: [
      "Building with React.js & Next.js",
      "Crafting scalable web applications",
      "Integrating APIs & Payment Gateways",
      "Expanding into MERN stack",
    ],
    intro:
      "Frontend-focused Software Developer with 2 years of hands-on experience building scalable and responsive web applications using React.js, Next.js, TypeScript, JavaScript, and Redux. Skilled in API integration, authentication, payment gateway integration, and performance optimization — now expanding into Node.js, Express.js, and MongoDB to deliver end-to-end web solutions.",
    location: "Surat, Gujarat, India",
    resumeUrl: `${basePath}/resume/resume.pdf`,
  },

  about: {
    summary:
      "MCA graduate and Software Developer specializing in modern frontend engineering, with growing expertise across the MERN stack.",
    paragraphs: [
      "I'm a frontend-focused software developer with two years of experience building production web applications for business, IoT, and e-commerce platforms. My core strength lies in translating complex requirements into fast, responsive, and accessible interfaces using React.js, Next.js, TypeScript, and Redux.",
      "Beyond the UI layer, I've integrated REST APIs, implemented secure token-based and SuperTokens authentication, and shipped payment flows with PayU and Razorpay. I've also built real-time features with WebSockets and Progressive Web Apps with offline support — work that improved load times by 35% and boosted SEO rankings from 40% to 60% on past projects.",
      "I'm currently expanding into backend development with Node.js, Express.js, MongoDB, and RESTful API design, aiming to deliver complete end-to-end web solutions rather than just polished frontends.",
    ],
    strengths: [
      {
        title: "Frontend Engineering",
        description:
          "Building scalable, responsive UIs with React.js, Next.js, Redux Toolkit, and Tailwind CSS.",
      },
      {
        title: "API & Auth Integration",
        description:
          "Integrating REST APIs, JWT/SuperTokens authentication, and social logins into production apps.",
      },
      {
        title: "Payments & Realtime",
        description:
          "Shipping PayU/Razorpay payment flows and real-time features using WebSockets (Socket.io).",
      },
      {
        title: "Performance & SEO",
        description:
          "Optimizing PWAs for offline access, faster load times, and stronger SEO performance.",
      },
    ],
    whatIDo: [
      {
        title: "Frontend Development",
        description:
          "Designing and building responsive, component-driven interfaces with React.js and Next.js.",
      },
      {
        title: "API Integration",
        description:
          "Connecting frontends to REST/GraphQL APIs with robust auth and error handling.",
      },
      {
        title: "Full-Stack Expansion",
        description:
          "Building REST APIs and data models with Node.js, Express.js, MongoDB, and Mongoose.",
      },
      {
        title: "Product-Minded Engineering",
        description:
          "Owning features end-to-end — from dashboards to payments to performance tuning.",
      },
    ],
    stats: [
      { label: "Years of Experience", value: 2, suffix: "+" },
      { label: "REST APIs Integrated", value: 30, suffix: "+" },
      { label: "Companies Worked With", value: 4 },
      { label: "Page Load Improvement", value: 35, suffix: "%" },
    ],
  },

  skills: [
    {
      category: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "Redux Toolkit",
        "Tailwind CSS",
        "Material UI",
        "HTML5",
        "CSS3",
      ],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js"],
    },
    {
      category: "Languages",
      skills: ["JavaScript", "TypeScript"],
    },
    {
      category: "Databases",
      skills: ["MongoDB", "PostgreSQL", "Mongoose"],
    },
    {
      category: "API Integration",
      skills: ["REST APIs", "GraphQL", "Apollo Client", "Axios", "Postman", "Swagger"],
    },
    {
      category: "Form & Validation",
      skills: ["React Hook Form", "Zod", "Yup"],
    },
    {
      category: "Authentication & Payments",
      skills: [
        "JWT",
        "Cookies",
        "SuperTokens",
        "Google Login",
        "Apple Login",
        "Razorpay",
        "PayU",
      ],
    },
    {
      category: "Realtime & Web",
      skills: ["WebSockets (Socket.io)", "Progressive Web Apps (PWA)"],
    },
    {
      category: "State Management",
      skills: ["Redux Toolkit", "Context API"],
    },
    {
      category: "Tools & Version Control",
      skills: ["Git", "GitHub", "VS Code", "Vite", "Yarn", "npm"],
    },
  ],

  experience: [
    {
      id: "arrowmuse",
      role: "Frontend Developer",
      company: "Arrowmuse Technology",
      duration: "May 2025 — May 2026",
      location: "Surat, Gujarat",
      type: "Full-time",
      responsibilities: [
        "Developed and maintained frontend systems for business and IoT platforms using React.js, Next.js, Redux, and Axios.",
        "Implemented secure token-based authentication and integrated REST APIs, and PayU/Razorpay (frontend).",
        "Developed a PWA that enabled offline access and reduced page load time by 35%, integrated Google Calendar, social logins, and developed SEO-optimized pages.",
        "Developed real-time systems using WebSockets (Socket.io client) for live data communication and monitoring, and implemented SuperTokens authentication.",
        "Contributed to backend development by building and integrating REST APIs using Node.js, Express.js, MongoDB, and Mongoose.",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "Redux",
        "Axios",
        "Socket.io",
        "SuperTokens",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "PayU",
        "Razorpay",
      ],
    },
    {
      id: "diamond-atelier",
      role: "Mern Stack Developer",
      company: "Diamond Atelier",
      duration: "April 2024 — May 2025",
      location: "Surat, Gujarat",
      type: "Full-time",
      responsibilities: [
        "Built and maintained a web platform using Next.js, TypeScript, Redux Toolkit, Tailwind CSS, and React Hook Form.",
        "Developed modules for filtering, inventory, and purchase workflows; integrated REST APIs for authentication and data handling.",
        "Contributed to the UI of public-facing jewellery and marketing websites.",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Redux Toolkit",
        "Tailwind CSS",
        "React Hook Form",
      ],
    },
    {
      id: "honeycomb",
      role: "Software Developer Intern",
      company: "Honeycomb Technologies Ltd",
      duration: "Oct 2023 — April 2024",
      location: "US (remote)",
      type: "Internship",
      responsibilities: [
        "Worked on Next.js-based projects, enhancing features and collaborating with development teams.",
        "Gained experience with React.js, Node.js, MongoDB, Firebase, and API integration using Postman.",
      ],
      technologies: ["Next.js", "React.js", "Node.js", "MongoDB", "Firebase", "Postman"],
    },
    {
      id: "tsaaro",
      role: "Web Developer Intern",
      company: "Tsaaro Solutions Pvt. Ltd.",
      duration: "Jan 2023 — April 2023",
      location: "Bangalore (remote)",
      type: "Internship",
      responsibilities: [
        "Completed React.js training and contributed to revamping the company website using WordPress (Elementor).",
        "Improved SEO performance, increasing rankings from 40% to 60%.",
      ],
      technologies: ["React.js", "WordPress", "Elementor", "SEO"],
    },
  ],

  projects: [
    {
      id: "abcd-iot",
      title: "ABCD — PLC-Based IoT Platform",
      description:
        "A web interface to control textile dyeing machines using real-time WebSocket communication, built for industrial monitoring and control.",
      features: [
        "Real-time communication with PLC-controlled machines via Socket.io",
        "Secure authentication and session management with SuperTokens",
      ],
      technologies: ["React.js", "Socket.io", "SuperTokens", "WebSockets"],
    },
    {
      id: "spartans-habits",
      title: "Spartans Habits — Habit Tracking PWA",
      description:
        "A Vite-based Progressive Web App for habit tracking with full offline support and integrated payments and calendar sync.",
      features: [
        "Offline-first PWA experience built with Vite",
        "Razorpay payments, Google Calendar sync, and Google & Apple login",
      ],
      technologies: ["Vite", "PWA", "Razorpay", "Google Calendar", "Google Login", "Apple Login"],
    },
    {
      id: "arrowboost",
      title: "ArrowBoost — Business Platform",
      description:
        "A multi-module business platform with responsive dashboards for CRM, HRM, and Finance operations.",
      features: [
        "5+ responsive dashboard modules for CRM, HRM, and Finance",
        "Secure API integration with PayU payment gateway (frontend)",
      ],
      technologies: ["React.js", "Redux", "PayU"],
    },
    {
      id: "diamond-atelier-site",
      title: "Diamond Atelier Website",
      description:
        "A Next.js + TypeScript e-commerce website with advanced filtering and search across a catalog of 1000+ products.",
      features: [
        "Advanced filtering and search for 1000+ products",
        "Form handling with React Hook Form + Zod, styled with Tailwind CSS",
      ],
      technologies: ["Next.js", "TypeScript", "React Hook Form", "Zod", "Tailwind CSS"],
    },
  ],

  education: [
    {
      id: "mca-su",
      degree: "MCA (Master of Computer Applications)",
      institution: "Sarvajanik University",
      duration: "Oct 2021 — May 2023",
      score: "CGPA: 7.79",
    },
  ],

  certifications: [],
  achievements: [],

  contact: {
    email: "darukamuskan@gmail.com",
    phone: "+91 7435977201",
    location: "Surat, Gujarat, India",
    availability: "Open to new opportunities",
  },

  social: [
    {
      label: "GitHub",
      href: "https://github.com/muskanDaruka",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/muskan-daruka-4a2734225/",
      icon: "linkedin",
    },
    {
      label: "Email",
      href: "mailto:darukamuskan@gmail.com",
      icon: "mail",
    },
    {
      label: "Phone",
      href: "tel:+917435977201",
      icon: "phone",
    },
  ],

  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "#contact" },
  ],
};
