import { RiGithubFill, RiLinkedinFill } from "react-icons/ri";

const teamMembers = [
  {
    name: "Sabbor Shah",
    role: "Founder",
    image: "/images/sabbor.jpeg",
    description:
      "A skilled Software Engineer with expertise in full-stack development. As a MERN Stack Developer, he builds scalable, high-performance web solutions. He combines clean code with strategic thinking to deliver impactful, maintainable products. Driven by innovation, he leads with precision, creativity, and purpose.",
    socials: [
      {
        icon: RiLinkedinFill,
        url: "#",
      },
      {
        icon: RiGithubFill,
        url: "#",
      },
    ],
  },
  {
    name: "Ahmad Shahid",
    role: "Co Founder",
    image: "/images/ahmad.png",
    description:
      "Senior Software Engineer, highly skilled in MERN stack and C# development. With deep expertise in building scalable, high-performance applications and managing full-cycle deployments, he blends modern web technologies with enterprise-grade solutions. His strategic mindset and technical leadership drive consistent innovation.",
    socials: [
      {
        icon: RiLinkedinFill,
        url: "#",
      },
      {
        icon: RiGithubFill,
        url: "#",
      },
    ],
  },
];

export default teamMembers;
