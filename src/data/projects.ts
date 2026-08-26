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
import gioiTruyenImage from "../assets/project_images/gioitruyen.png";
import joeHoangImage from "../assets/project_images/joehoangcareerconsulting.png";
import vinhomesRoyalIslandImage from "../assets/project_images/vinhomesroyalisland.png";
import brillianceImagingImage from "../assets/project_images/brillianceimaging.png";
import aquaCareCrmImage from "../assets/project_images/aquacarecrm.png";

import botaniclaneLogo from "../assets/logos/botaniclane.png";
import shopInChinaLogo from "../assets/logos/shopinchina.png";
import wagonmateLogo from "../assets/logos/wagonmate.png";
import thanhNhacChauLogo from "../assets/logos/thanhnhacchau.png";
import wonderLabLogo from "../assets/logos/wonderlab.png";
import vianodecorLogo from "../assets/logos/vianodecor.png";
import gioiTruyenLogo from "../assets/logos/gioitruyen.png";
import joeHoangLogo from "../assets/logos/joehoang.png";
import vinhomesRoyalIslandLogo from "../assets/logos/vinhomesroyalisland.png";
import brillianceImagingLogo from "../assets/logos/brillianceimaging.png";
import aquaCareCrmLogo from "../assets/logos/aquacarecrm.png";

export interface Project {
  projectName: string;
  category: ProjectCategory;
  websiteURL?: string;
  technologies: string[];
  description: string;
  role: string;
  year?: number;
  imageUrl?: string;
  logoUrl?: string;
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
    logoUrl: botaniclaneLogo.src,
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
    logoUrl: shopInChinaLogo.src,
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
    logoUrl: wagonmateLogo.src,
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
    logoUrl: thanhNhacChauLogo.src,
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
    logoUrl: wonderLabLogo.src,
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
    logoUrl: vianodecorLogo.src,
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
  {
    projectName: "Gioi Truyen – Web Novel Platform",
    category: "Creative",
    websiteURL: "https://gioitruyen.com/",
    technologies: ["Website"],
    description: "Web novel reading platform with rankings, categories, and audio chapters.",
    role: "Developer",
    imageUrl: gioiTruyenImage.src,
    logoUrl: gioiTruyenLogo.src,
    deliveryType: "done",
  },
  {
    projectName: "Joe Hoang Career Consulting",
    category: "Business",
    websiteURL: "https://joehoangcareerconsulting.ca/",
    technologies: ["WordPress", "Custom Blocks"],
    description: "Career advisory site for international students and newcomers in Canada.",
    role: "Full Design & Development",
    year: 2026,
    imageUrl: joeHoangImage.src,
    logoUrl: joeHoangLogo.src,
    deliveryType: "done",
  },
  {
    projectName: "Vinhomes Royal Island",
    category: "Business",
    websiteURL: "http://vinhomesvuyen.vn/",
    technologies: ["WordPress", "Custom Theme"],
    description: "Real estate project microsite for the Vinhomes Royal Island development.",
    role: "Frontend Developer",
    year: 2026,
    imageUrl: vinhomesRoyalIslandImage.src,
    logoUrl: vinhomesRoyalIslandLogo.src,
    layout: "wide",
    deliveryType: "done",
  },
  {
    projectName: "Brilliance Imaging",
    category: "Business",
    websiteURL: "https://brillianceimaging.com/",
    technologies: ["WordPress", "Elementor"],
    description: "Full design and development for a boutique ultrasound imaging studio.",
    role: "Full Design & Development",
    year: 2026,
    imageUrl: brillianceImagingImage.src,
    logoUrl: brillianceImagingLogo.src,
    layout: "tall",
    deliveryType: "done",
  },
  {
    projectName: "AquaCare CRM",
    category: "Business",
    technologies: ["Internal Tool"],
    description: "Internal CRM for scheduling, technician dispatch, and invoicing.",
    role: "Fullstack Developer",
    imageUrl: aquaCareCrmImage.src,
    logoUrl: aquaCareCrmLogo.src,
    layout: "wide",
    deliveryType: "done",
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
        project.websiteURL ?? "",
        project.technologies.join(" "),
      ]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(term)) return false;
    }
    return true;
  });
