export type ProjectCategory = "Business" | "E-commerce" | "Game" | "Creative";

import botaniclaneImage from "../assets/project_images/botaniclane.png";
import shopInChinaImage from "../assets/project_images/shopinchina.png";
import wagonmateImage from "../assets/project_images/wagonmate.png";
import thanhNhacChauImage from "../assets/project_images/thanhnhacchau.png";
import wonderLabImage from "../assets/project_images/wonderlab.png";
import vianodecorImage from "../assets/project_images/vianodecor.png";
import otterraftImage from "../assets/project_images/otterraft.png";
import gardenQueenImage from "../assets/project_images/gardenqueen.png";
import guruPalaceImage from "../assets/project_images/gurupalace.png";

export interface Project {
  projectName: string;
  category: ProjectCategory;
  websiteURL: string;
  technologies: string[];
  description: string;
  role: string;
  year?: number;
  imageUrl?: string;
  layout?: "wide" | "tall" | "base";
  deliveryType?: "done" | "similar";
}

export const projectLibrary: Project[] = [
  {
    projectName: "BotanicLane – Florist Shop",
    category: "E-commerce",
    websiteURL: "https://botaniclane.shop/",
    technologies: ["WordPress", "Elementor"],
    description: "Fullstack website and logo design.",
    role: "Fullstack Developer & Designer",
    imageUrl: botaniclaneImage.src,
    layout: "wide",
    deliveryType: "done",
  },
  {
    projectName: "Shop In China – Supply Goods",
    category: "E-commerce",
    websiteURL: "https://www.shopinchina.eu/",
    technologies: ["WordPress", "Divi"],
    description: "Custom layout based on Figma design.",
    role: "Frontend Developer",
    imageUrl: shopInChinaImage.src,
    layout: "tall",
    deliveryType: "done",
  },
  {
    projectName: "Wagonate – Rent Car Singapore",
    category: "Business",
    websiteURL: "https://wagonmate.com/",
    technologies: ["WordPress", "Elementor"],
    description: "Custom layout and image sourcing.",
    role: "Frontend Developer",
    imageUrl: wagonmateImage.src,
    deliveryType: "done",
  },
  {
    projectName: "Thanh Nhạc Châu Zhihu",
    category: "Business",
    websiteURL: "https://thanhnhacchau.com/",
    technologies: [".NET", "ReactJS"],
    description: "Sales website.",
    role: "Fullstack Developer",
    imageUrl: thanhNhacChauImage.src,
    layout: "tall",
    deliveryType: "done",
  },
  {
    projectName: "Wonder Together – Wonder Lab",
    category: "Creative",
    websiteURL: "https://www.wondertogether.org/",
    technologies: ["NextJS", "TailwindCSS"],
    description: "Refactor project with new design.",
    role: "Frontend Developer",
    imageUrl: wonderLabImage.src,
    layout: "wide",
    deliveryType: "done",
  },
  {
    projectName: "Vianodecor",
    category: "Creative",
    websiteURL: "https://www.vianodecor.com/",
    technologies: ["Webflow"],
    description: "Design layout and elements.",
    role: "Designer",
    imageUrl: vianodecorImage.src,
    deliveryType: "done",
  },
  {
    projectName: "Otterraft – Indie Game Project",
    category: "Game",
    websiteURL: "https://otterraft.com/",
    technologies: ["WordPress"],
    description: "Game introduction website.",
    role: "Frontend Developer",
    imageUrl: otterraftImage.src,
    deliveryType: "similar",
  },
  {
    projectName: "Garden Queen KC",
    category: "Business",
    websiteURL: "https://gardenqueenkc.com/",
    technologies: ["WordPress"],
    description: "Design layout.",
    role: "Designer",
    imageUrl: gardenQueenImage.src,
    deliveryType: "similar",
  },
  {
    projectName: "Guru Palace Restaurant",
    category: "Business",
    websiteURL: "https://gurupalacerestaurant.com/",
    technologies: ["ReactJS"],
    description: "Website redesign.",
    role: "Frontend Developer",
    imageUrl: guruPalaceImage.src,
    deliveryType: "similar",
  },
];

export type ProjectFilter = {
  category?: ProjectCategory;
  tech?: string;
  year?: number;
  search?: string;
};

export const filterProjects = (projects: Project[], filters: ProjectFilter = {}) =>
  projects.filter((project) => {
    if (filters.category && project.category !== filters.category) return false;
    if (filters.year && project.year !== filters.year) return false;
    if (filters.tech) {
      const tech = filters.tech.toLowerCase();
      if (!project.technologies.some((item) => item.toLowerCase().includes(tech))) return false;
    }
    if (filters.search) {
      const term = filters.search.toLowerCase();
      const haystack = [
        project.projectName,
        project.description,
        project.role,
        project.category,
        project.technologies.join(" "),
      ]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(term)) return false;
    }
    return true;
  });
