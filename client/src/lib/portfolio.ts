export interface PortfolioItem {
  id: number;
  title: string;
  category: "strategic_marketing" | "customer_engagement" | "brand_storytelling" | "awards" | "writing_samples";
  categoryLabel: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Multi-Channel Brand Portfolio Management",
    category: "strategic_marketing",
    categoryLabel: "Strategic Marketing",
    description: "Managed a $20 million brand portfolio delivering campaigns across online and offline platforms resulting in 30% YoY growth.",
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    projectUrl: "#"
  },
  {
    id: 2,
    title: "WhatsApp Marketing Channel Innovation",
    category: "strategic_marketing",
    categoryLabel: "Strategic Marketing",
    description: "Pioneered WhatsApp as a communication medium for tactical campaigns, landing ROAS of 27 and setting a benchmark across brands.",
    imageUrl: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    projectUrl: "#"
  },
  {
    id: 3,
    title: "Regional Digital Presence Growth",
    category: "customer_engagement",
    categoryLabel: "Customer Engagement",
    description: "Established brand's regional digital presence, growing social media to 12k followers with a 40% engagement boost through influencer marketing.",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    projectUrl: "#"
  },
  {
    id: 4,
    title: "Brand Collaboration Projects",
    category: "customer_engagement",
    categoryLabel: "Customer Engagement",
    description: "Drove strategic collaborations with key brands including Humantra and Redbull, increasing brand visibility and engagement by 33%.",
    imageUrl: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    projectUrl: "#"
  },
  {
    id: 5,
    title: "Brand Jingle & Video Campaign",
    category: "brand_storytelling",
    categoryLabel: "Brand Storytelling",
    description: "Conceptualized and led creative direction for a brand-defining campaign, including custom jingle and high-impact video content.",
    imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    projectUrl: "#"
  },
  {
    id: 6,
    title: "Matcha Product Launch Campaign",
    category: "brand_storytelling",
    categoryLabel: "Brand Storytelling",
    description: "Launched two limited-edition summer drinks that contributed 6% to overall sales mix with a 23% increase in digital engagement.",
    imageUrl: "https://images.unsplash.com/photo-1631308491227-95786951cc23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    projectUrl: "#"
  },
  {
    id: 7,
    title: "Multi-Industry Awards Recognition",
    category: "awards",
    categoryLabel: "Awards & Recognition",
    description: "Led winning campaigns for multiple awards including Fact Magazine, WhatsOn, PETA, and Leaders F&B recognizing brand excellence.",
    imageUrl: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    projectUrl: "#"
  },
  {
    id: 8,
    title: "Press Release Portfolio",
    category: "writing_samples",
    categoryLabel: "Writing Samples",
    description: "Professional press releases for brand activations, collaborations, and events that gained significant organic media coverage.",
    imageUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    projectUrl: "#"
  },
  {
    id: 9,
    title: "Award Submission Writing",
    category: "writing_samples",
    categoryLabel: "Writing Samples",
    description: "Strategic award submissions that successfully positioned brands for industry recognition and thought leadership.",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    projectUrl: "#"
  }
];
