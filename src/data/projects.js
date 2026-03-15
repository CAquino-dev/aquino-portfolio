import DUV from "../assets/DUV.png";
import WorldPeas from "../assets/WorldPeas.png";
import TripleJs from "../assets/TripleJs.png";
import Finance from "../assets/Finance/Finance.png";

export const projects = [
  {
    date: "2026",
    projectName: "Finance Tracker",
    projectImg: Finance,
    description:
      "A web-based personal finance tracking application that helps users manage their income and expenses with detailed analytics and insights. This project is currently a work in progress and actively being developed.",
    tech: ["MongoDB", "Express", "React", "TypeScript", "Node.js", "TailwindCSS"],
    hasGallery: true,
    galleryKey: "finance",
  },
  {
    date: "2025",
    projectName: "DUV Engineers",
    projectImg: DUV,
    description:
      "DUV Engineers is an ERP Web-based project made for an engineering company here in the Philippines.",
    tech: ["ReactJs", "TailwindCSS", "Express", "NodeJs", "MySQL"],
    hasGallery: true,
    galleryKey: "duv",
  },
  {
    date: "2023",
    projectName: "Triple J's",
    projectImg: TripleJs,
    description: `TripleJs is an e-commerce website for pet food and supplies, 
      featuring a user-friendly shopping experience. 
      It includes an admin dashboard for easy product management, inventory updates, 
      and order tracking—making it a complete solution for modern pet retail.`,
    tech: ["ReactJs", "CSS", "MySQL", "NodeJs", "Express"],
    hasGallery: false,
  },
  {
    date: "2022",
    projectName: "WorldPeas",
    projectImg: WorldPeas,
    description: `WorldPeas is a practice e-commerce project built to simulate a real online marketplace, 
      it focuses on clean design, smooth shopping experiences, and efficient product management.`,
    tech: ["HTML", "CSS", "JavaScript"],
    hasGallery: false,
  },
];