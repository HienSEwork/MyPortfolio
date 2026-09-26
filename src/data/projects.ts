export type ProjectCategory = "Web App" | "Business" | "E-commerce" | "Creative" | "Game" | "Academic";

import botaniclaneImage from "../assets/project_images/botaniclane.png";
import shopInChinaImage from "../assets/project_images/shopinchina.png";
import wagonmateImage from "../assets/project_images/wagonmate.png";
import thanhNhacChauImage from "../assets/project_images/thanhnhacchau.png";
import wonderLabImage from "../assets/project_images/wonderlab.png";
import vianodecorImage from "../assets/project_images/vianodecor.png";
import otterraftImage from "../assets/project_images/otterraft.png";
import gardenQueenImage from "../assets/project_images/gardenqueen.png";
import guruPalaceImage from "../assets/project_images/gurupalace.png";
import joeHoangImage from "../assets/project_images/joehoangcareerconsulting.png";
import vinhomesRoyalIslandImage from "../assets/project_images/vinhomesroyalisland.png";
import brillianceImagingImage from "../assets/project_images/brillianceimaging.png";

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

const screenshots = import.meta.glob<{ default: { src: string } }>("../assets/project_images/*.webp", {
  eager: true,
});

const shot = (name: string) => {
  const mod = screenshots[`../assets/project_images/${name}.webp`];
  if (!mod) throw new Error(`Missing project screenshot: ${name}.webp`);
  return mod.default.src;
};

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
  deliveryType?: "done" | "similar" | "academic";
  status?: "Live" | "In progress" | "Concept" | "Coursework";
  gallery?: string[];
  highlights?: string[];
  featured?: boolean;
  service?: string;
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
    projectName: "Gioi Truyen – Web Novel & Audiobook Platform",
    service: "Custom Web Apps & SaaS",
    category: "Web App",
    websiteURL: "https://gioitruyen.com/",
    technologies: ["React", "TypeScript", "Spring Boot 3.5", "Java 21", "MySQL 8", "Nginx"],
    description:
      "Multi-team web novel marketplace. Readers read or listen with text-to-speech, unlock paid chapters with coins, buy full-story combos and donate to translation teams. Creators get a studio to upload stories from files, schedule chapters, set prices and request withdrawals; admins moderate content, approve top-ups and run ad campaigns.",
    role: "Fullstack Developer – design to deployment",
    year: 2026,
    imageUrl: shot("gioitruyen-home"),
    logoUrl: gioiTruyenLogo.src,
    gallery: [
      shot("gioitruyen-home"),
      shot("gioitruyen-story"),
      shot("gioitruyen-reader"),
      shot("gioitruyen-audio"),
      shot("gioitruyen-rankings"),
    ],
    highlights: [
      "63 routes, 16 backend modules, 65 database tables",
      "Coin wallet, paid chapters, combo purchases and team donations",
      "Text-to-speech reader and audio library",
      "Runs on a Linux VPS behind Nginx with scripted backups",
    ],
    status: "Live",
    featured: true,
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
    projectName: "AquaCare CRM – Customer Care System",
    service: "ERP, CRM & Business Systems",
    category: "Web App",
    technologies: ["Spring Boot 3", "Java 21", "PostgreSQL", "React 19", "TypeScript", "Docker"],
    description:
      "Customer-care CRM for a water purifier dealer. It tracks every customer's machines, schedules filter replacements automatically, dispatches technicians on a kanban board, issues invoices and calculates sales and technician commissions, so the team knows exactly who to call each day.",
    role: "Fullstack Developer – private client system",
    year: 2026,
    imageUrl: shot("aquacare-reports"),
    logoUrl: aquaCareCrmLogo.src,
    gallery: [shot("aquacare-reports"), shot("aquacare-catalog")],
    highlights: [
      "700+ customers migrated from Excel in a single import",
      "Automatic filter-replacement schedule with overdue alerts",
      "Technician dispatch board, invoices and PDF payroll sheets",
      "Click-to-call via OmiCall, JWT auth with 4 roles",
    ],
    status: "Live",
    layout: "wide",
    featured: true,
    deliveryType: "done",
  },
  {
    projectName: "Mini LMS – AI Pronunciation Grading",
    service: "AI & Data Solutions",
    category: "Web App",
    technologies: ["React", "Vite", "Spring Boot", "Spring Security", "MySQL", "Whisper", "Gemini"],
    description:
      "Speaking-practice platform for English and Chinese classes. Students watch a model video and submit their own; the AI pipeline extracts audio, transcribes it, scores pronunciation against the target vocabulary and generates a corrective MP3. Teachers review or override the score and notify parents via Zalo in one click.",
    role: "Fullstack Developer",
    year: 2026,
    imageUrl: shot("minilms-home"),
    gallery: [shot("minilms-home")],
    highlights: [
      "FFmpeg audio extraction → Whisper speech-to-text",
      "Gemini scoring (0–10) plus text-to-speech correction MP3",
      "Student, teacher and admin portals with JWT roles",
      "Automatic Zalo notifications to students and parents",
    ],
    status: "In progress",
    featured: true,
    deliveryType: "done",
  },
  {
    projectName: "Atlantis Viễn Đông – Gamified Novel Community",
    category: "Web App",
    websiteURL: "https://atlantisviendong.com/",
    technologies: ["React 19", "Vite", "Tailwind CSS", "Spring Boot 3.3", "MySQL", "Redis"],
    description:
      "Web novel community with a gamified 'shell' currency: shop, daily missions, check-ins, rankings, author studio and five-role access control. The front end is built pixel-accurate from Figma with fluid scaling.",
    role: "Fullstack Developer",
    year: 2026,
    imageUrl: shot("atlantis-home"),
    gallery: [shot("atlantis-home")],
    highlights: [
      "Figma → code with design tokens and fluid scaling",
      "Virtual currency, missions, check-ins and shop",
      "RBAC: admin, moderator, author, user, guest",
    ],
    status: "In progress",
    deliveryType: "done",
  },
  {
    projectName: "StageSound – Event Equipment Rental",
    category: "E-commerce",
    technologies: ["React 19", "Vite", "Spring Boot"],
    description:
      "Rental site for event sound and lighting: equipment catalog by category, combo packages per event type (weddings, outdoor concerts, acoustic shows), cart, order lookup and an admin area to manage order status.",
    role: "Fullstack Developer",
    imageUrl: shot("stagesound-home"),
    gallery: [shot("stagesound-home")],
    highlights: ["Equipment catalog and event combo packages", "Cart, order tracking and admin order workflow"],
    status: "Concept",
    deliveryType: "done",
  },
  {
    projectName: "WordPress Paid-Chapter System",
    category: "Business",
    technologies: ["WordPress", "PHP", "Madara child theme", "MySQL", "JavaScript"],
    description:
      "Custom paid-chapter module for a live manga reading site built on the Madara theme: coin balance checks, single and multi-chapter unlocking, top-up guide, plus ongoing bug fixes tracked in a maintained changelog.",
    role: "WordPress / PHP Developer – maintenance contract",
    imageUrl: shot("keobongtrang-home"),
    highlights: [
      "Coin wallet and chapter unlock logic in a child theme",
      "Bulk chapter purchase",
      "Hotfixes on a live site with a changelog",
    ],
    status: "Live",
    deliveryType: "done",
  },
  {
    projectName: "Eventime Fest – Concert Landing Page",
    category: "Creative",
    technologies: ["Next.js 16", "React 19", "Tailwind CSS 4", "Framer Motion", "GSAP"],
    description:
      "Festival ticketing landing page with a live countdown, line-up schedule by stage, artist grid and ticket tiers, animated with Framer Motion, GSAP and Lenis smooth scrolling.",
    role: "Frontend Developer & Motion",
    imageUrl: shot("eventime-hero"),
    gallery: [shot("eventime-hero"), shot("eventime-mix"), shot("eventime-artists")],
    highlights: ["Kinetic typography hero with countdown", "Scroll-driven sections and smooth scrolling"],
    status: "Concept",
    deliveryType: "done",
  },
  {
    projectName: "Indochine Thai Nguyen Hotel",
    service: "Landing Pages & Business Websites",
    category: "Creative",
    technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
    description:
      "Luxury hotel website concept in Indochine style: bilingual VN/EN, rooms and suites showcase, experiences and offers, plus a booking bar with dates, guests and promo codes. Pure HTML/CSS/JS, no build step.",
    role: "Designer & Frontend Developer",
    imageUrl: shot("indochine-hero"),
    gallery: [shot("indochine-hero"), shot("indochine-section")],
    highlights: ["Booking bar with promo code validation", "VN/EN switch and quick-contact dock"],
    status: "Concept",
    layout: "wide",
    featured: true,
    deliveryType: "done",
  },
  {
    projectName: "AHA Cafe – Luxury Editorial Concept",
    category: "Creative",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    description:
      "Premium editorial redesign concept for a Vietnamese coffee chain, built around its existing brand colours: menu filters, modal and lightbox, scroll reveals and a VI/EN switch.",
    role: "Designer & Frontend Developer",
    imageUrl: shot("aha-hero"),
    gallery: [shot("aha-hero"), shot("aha-section")],
    status: "Concept",
    deliveryType: "done",
  },
  {
    projectName: "Gioi Truyen – Celestial Fantasy UI",
    category: "Creative",
    technologies: ["React 18", "Vite 6", "Tailwind CSS v4"],
    description:
      "Homepage redesign for Gioi Truyen with an animated fantasy sky: moon, layered mountains, floating islands, clouds and falling petals, a glass header, genre pills and rankings, built with Tailwind v4 only (no UI library).",
    role: "UI Designer & Frontend Developer",
    imageUrl: shot("celestial-hero"),
    gallery: [shot("celestial-hero"), shot("celestial-section")],
    status: "Concept",
    deliveryType: "done",
  },

  // Academic & self-learning projects
  {
    projectName: "Internship Management System (C# WinForms)",
    service: "Desktop Apps & Student Projects",
    category: "Academic",
    technologies: ["C#", ".NET 8", "WinForms", "ADO.NET", "SQL Server"],
    description:
      "Desktop application that manages university internships end to end: students, lecturers, partner companies and their internship positions. Admins assign students to open positions inside a single SQL transaction; lecturers grade results (company 60% + lecturer 40%) and view statistics with GDI+ charts and CSV export.",
    role: "Developer – coursework",
    year: 2026,
    imageUrl: shot("qlsv-thongke"),
    gallery: [
      shot("qlsv-thongke"),
      shot("qlsv-phancong"),
      shot("qlsv-doanhnghiep"),
      shot("qlsv-danhgia"),
      shot("qlsv-sinhvien"),
      shot("qlsv-login"),
    ],
    highlights: [
      "3-layer architecture: GUI → BLL → DAL → Models",
      "8 screens with role-based access (admin / lecturer)",
      "Stored procedures, views, filtered unique index, computed grade column",
      "SHA-256 passwords and 26 automated test cases",
    ],
    status: "Coursework",
    featured: true,
    deliveryType: "academic",
  },
  {
    projectName: "DentalPro – Clinic Management",
    category: "Academic",
    technologies: ["React 19", "TypeScript", "Tailwind CSS 4", "Spring Boot", "Java 17", "MySQL"],
    description:
      "Management system for a dental clinic: appointments, patients, treatment records, dentists and shifts, services and chairs, supply inventory with low-stock alerts, invoices and a payroll module (salary rules, payslips and reports).",
    role: "Fullstack Developer – team project",
    imageUrl: shot("dentalpro-dashboard"),
    gallery: [
      shot("dentalpro-dashboard"),
      shot("dentalpro-appointments"),
      shot("dentalpro-records"),
      shot("dentalpro-payroll"),
    ],
    highlights: ["Appointments, treatment records and inventory", "Payroll with configurable salary rules"],
    status: "Coursework",
    deliveryType: "academic",
  },
  {
    projectName: "LibraryMS – Library Management",
    category: "Academic",
    technologies: ["React", "TypeScript", "Spring Boot 3.2", "Java 17", "MySQL"],
    description:
      "Library management web app: books and readers, borrowing and returning with overdue tracking, dashboard statistics and loan history, with a clean Vietnamese interface.",
    role: "Fullstack Developer – OOP team project",
    imageUrl: shot("libraryms-dashboard"),
    gallery: [shot("libraryms-dashboard"), shot("libraryms-books"), shot("libraryms-loans")],
    status: "Coursework",
    deliveryType: "academic",
  },
  {
    projectName: "Rabies Surveillance Dashboard",
    category: "Academic",
    technologies: ["R", "Shiny", "Python", "Data visualization"],
    description:
      "Epidemiology dashboard for rabies control in Vietnam: monthly trends, top provinces by deaths, month-by-province heatmap, risk alerts and a map. Data can come from the built-in dataset, a CSV/Excel upload or Google Sheets.",
    role: "Data Analyst – research project",
    imageUrl: shot("rabies-trend"),
    gallery: [shot("rabies-trend"), shot("rabies-heatmap"), shot("rabies-risk")],
    status: "Coursework",
    deliveryType: "academic",
  },
  {
    projectName: "Netflix User Segmentation (K-Means)",
    category: "Academic",
    technologies: ["Python", "pandas", "scikit-learn", "Streamlit"],
    description:
      "Streamlit app that cleans the Netflix titles dataset, engineers features (type, genre, country, duration, rating) and clusters viewing preferences with K-Means, validated with the elbow method, silhouette scores and PCA.",
    role: "Data / ML – coursework",
    imageUrl: shot("netflix-pca"),
    gallery: [shot("netflix-pca"), shot("netflix-clusters"), shot("netflix-genres")],
    status: "Coursework",
    deliveryType: "academic",
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
