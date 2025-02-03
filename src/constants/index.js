// import project1 from "../assets/projects/project-1.webp";
// import project2 from "../assets/projects/project-2.webp";
// import project3 from "../assets/projects/project-3.webp";
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";

// export const DESCRIPTION = `A dedicated software developer with a proven track record of building impactful, user-centric solutions. With First Class Honours in Computer Science and four years of hands-on experience, I have honed my skills in diverse programming languages and frameworks such as Python, JavaScript, Django, and React. My passion lies in developing innovative applications that enhance efficiency, provide valuable insights, and deliver exceptional user experiences.`;

export const DESCRIPTION = `A recent Computer Science graduate with First Class Honours, focused on designing and delivering robust, scalable, and user-centric systems. With four years of practical experience, I have worked on diverse projects, applying my expertise in modern technologies like Python, JavaScript, Django, React and cloud systems. My commitment to continuous learning and delivering high-quality solutions is driven by my dedication to meeting customer needs. I thrive in collaborative environments and enjoy leveraging technology to solve problems and create a positive impact.`;

export const DETAILS = {
  address: "London, UK",
  phoneNo: "07415899712",
  email: "olumide.moore2817@gmail.com",
  github: "https://github.com/olumide-moore",
  linkedin: "https://www.linkedin.com/in/olu-oluwole-moore/"
};

export const EXPERIENCES = [
  {
    year: "Sept 2020 – Present",
    role: "Software Developer",
    company: "Ruane Construction and Design Consultancy",
    description: `Led digital transformation initiatives, developing systems to automate operations and improve efficiency. Created tools for intricate building design and energy calculations, saving significant time and resources.`,
    technologies: ["Python", "PyQt5", "Pandas", "React", "Nodejs", "SQL", "MongoDB"],
  },
  {
    year: "March 2022 - July 2022",
    role: "Software Developer",
    company: "RGS Care",
    description: `Developed a care report system integrating sensor data for real-time environmental monitoring, enhancing decision-making for care clients.`,
    technologies: ["JavaScript", "jQuery", "Ubidots API"],
  },
  {
    year: "July 2019 - Aug 2019",
    role: "Research and Development Analyst (Intern)",
    company: "Cundall",
    description: `Automated team tasks with C# WPF applications, streamlining workflows. Gained insights into project collaboration and programming best practices.`,
    technologies: ["C#", "WPF"],
  },
];

export const PROJECTS = [
  {
    title: "Air Quality Web Interface",
    image: project1,
    description:
      "A real-time air quality monitoring web interface with interactive data visualization and health advisory features.",
    technologies: [
      "Django",
      "Pandas",
      "JavaScript",
      "PostgreSQL",
      "ChartJS",
      "Tailwind CSS",
      "AWS EC2",
    ],
    url: "https://github.com/olumide-moore/AirQualityAnalysis"
  },
  {
    title: "Room Decor E-commerce Website",
    image: project2,
    description:
      "A responsive e-commerce platform with integrated inventory management and Agile-driven development.",
    technologies: ["Vaadin", "Spring Boot", "MySQL", "Java", "Bootstrap"],
    url: "https://github.com/olumide-moore/dreamnest"
  },
  {
    title: "React App Hosting with AWS S3 and CloudFront",
    image: project3,

    description:
      "Designed and deployed a React web application using AWS S3 for static hosting and CloudFront for content delivery, achieving low-latency performance for global users.",
    technologies: [
      "AWS S3",
      "CloudFront",
      "Route 53",
      "React.js",
      "JavaScript",
      "HTML/CSS",
    ],
    url: "https://github.com/olumide-moore/AWS"
  },
  {
    title: "Custom VPC Design and EC2 Deployment",
    image: project4,

    description:
      "Architected a custom Virtual Private Cloud (VPC) with public and private subnets to host scalable AWS services securely.",
    technologies: [
      "AWS VPC",
      "EC2",
      "Internet Gateway",
      "NAT Gateway",
      "Route tables",
      "Security Groups",
    ],
    url: "https://github.com/olumide-moore/AWS"
  },
];


