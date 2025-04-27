export interface PortfolioItem {
  id: number;
  title: string;
  category: "design" | "development" | "branding";
  categoryLabel: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "E-commerce Redesign",
    category: "design",
    categoryLabel: "UX/UI Design",
    description: "A complete redesign of an e-commerce platform focusing on improving user experience and conversion rates.",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    projectUrl: "#"
  },
  {
    id: 2,
    title: "Dashboard Application",
    category: "development",
    categoryLabel: "Frontend Development",
    description: "A React-based dashboard for data visualization with responsive design and real-time updates.",
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    projectUrl: "#"
  },
  {
    id: 3,
    title: "Brand Identity Project",
    category: "branding",
    categoryLabel: "Branding",
    description: "A complete brand identity system for a startup tech company, including logo, color palette, and guidelines.",
    imageUrl: "https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    projectUrl: "#"
  },
  {
    id: 4,
    title: "Mobile App Design",
    category: "design",
    categoryLabel: "Mobile UI/UX",
    description: "A fitness tracking app with an intuitive interface focusing on user engagement and habit formation.",
    imageUrl: "https://images.unsplash.com/photo-1610986603166-f78428624e76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    projectUrl: "#"
  },
  {
    id: 5,
    title: "Progressive Web App",
    category: "development",
    categoryLabel: "Full-Stack Development",
    description: "A PWA with offline capabilities built with React and Firebase, featuring authentication and real-time data.",
    imageUrl: "https://images.unsplash.com/photo-1561883088-039e53143d73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    projectUrl: "#"
  },
  {
    id: 6,
    title: "Website Redesign",
    category: "branding",
    categoryLabel: "Web Design",
    description: "A complete overhaul of a corporate website with a focus on modernizing the visual language and improving UX.",
    imageUrl: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    projectUrl: "#"
  }
];
