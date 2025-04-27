export interface PortfolioItem {
  id: number;
  title: string;
  category: "strategy" | "campaign" | "branding";
  categoryLabel: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Matcha Product Campaign",
    category: "campaign",
    categoryLabel: "Marketing Campaign",
    description: "Launched two limited-edition summer drinks that contributed 6% to overall sales mix with a 23% increase in digital engagement.",
    imageUrl: "https://images.unsplash.com/photo-1631308491227-95786951cc23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    projectUrl: "#"
  },
  {
    id: 2,
    title: "Multi-Channel Brand Strategy",
    category: "strategy",
    categoryLabel: "Digital Strategy",
    description: "Managed a $20 million brand portfolio delivering campaigns across online and offline platforms resulting in 30% YoY growth.",
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    projectUrl: "#"
  },
  {
    id: 3,
    title: "Brand Collaboration Project",
    category: "branding",
    categoryLabel: "Strategic Partnership",
    description: "Drove strategic collaborations with key brands including Humantra and Redbull, increasing brand visibility and engagement by 33%.",
    imageUrl: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    projectUrl: "#"
  },
  {
    id: 4,
    title: "Brand Jingle Development",
    category: "branding",
    categoryLabel: "Creative Direction",
    description: "Conceptualized and led creative direction for a brand-defining campaign, including custom jingle and high-impact video content.",
    imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    projectUrl: "#"
  },
  {
    id: 5,
    title: "WhatsApp Marketing Channel",
    category: "strategy",
    categoryLabel: "Channel Innovation",
    description: "Pioneered WhatsApp as a communication medium for tactical campaigns, landing ROAS of 27 and setting a benchmark across brands.",
    imageUrl: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    projectUrl: "#"
  },
  {
    id: 6,
    title: "Regional Digital Presence",
    category: "campaign",
    categoryLabel: "Social Media Growth",
    description: "Established brand's regional digital presence, growing social media to 12k followers with a 40% engagement boost through influencer marketing.",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    projectUrl: "#"
  }
];
