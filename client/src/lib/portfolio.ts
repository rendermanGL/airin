// Using direct paths to test image loading
const strategicMarketingImg = "/attached_assets/strategic-marketing.jpg";
const customerEngagementImg = "/attached_assets/customer-engagement.png";
const brandStorytellingImg = "/attached_assets/brand-storytelling.png";
const awardsRecognitionImg = "/attached_assets/awards-recognition.jpg";
const pressReleaseImg = "/attached_assets/press-release.jpg";

export interface PortfolioItem {
  id: number;
  title: string;
  category: "strategic_marketing" | "customer_engagement" | "brand_storytelling" | "awards" | "writing_samples" | "content_writing";
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
    imageUrl: strategicMarketingImg,
    projectUrl: "/portfolio/strategic-marketing"
  },
  {
    id: 2,
    title: "WhatsApp Marketing Channel Innovation",
    category: "strategic_marketing",
    categoryLabel: "Strategic Marketing",
    description: "Pioneered WhatsApp as a communication medium for tactical campaigns, landing ROAS of 27 and setting a benchmark across brands.",
    imageUrl: strategicMarketingImg,
    projectUrl: "/portfolio/strategic-marketing"
  },
  {
    id: 3,
    title: "Regional Digital Presence Growth",
    category: "customer_engagement",
    categoryLabel: "Customer Engagement",
    description: "Established brand's regional digital presence, growing social media to 12k followers with a 40% engagement boost through influencer marketing.",
    imageUrl: customerEngagementImg,
    projectUrl: "/portfolio/customer-engagement"
  },
  {
    id: 4,
    title: "Brand Collaboration Projects",
    category: "customer_engagement",
    categoryLabel: "Customer Engagement",
    description: "Drove strategic collaborations with key brands including Humantra and Redbull, increasing brand visibility and engagement by 33%.",
    imageUrl: customerEngagementImg,
    projectUrl: "/portfolio/customer-engagement"
  },
  {
    id: 5,
    title: "Brand Jingle & Video Campaign",
    category: "brand_storytelling",
    categoryLabel: "Brand Storytelling",
    description: "Conceptualized and led creative direction for a brand-defining campaign, including custom jingle and high-impact video content.",
    imageUrl: brandStorytellingImg,
    projectUrl: "/portfolio/brand-storytelling"
  },
  {
    id: 6,
    title: "Matcha Product Launch Campaign",
    category: "brand_storytelling",
    categoryLabel: "Brand Storytelling",
    description: "Launched two limited-edition summer drinks that contributed 6% to overall sales mix with a 23% increase in digital engagement.",
    imageUrl: brandStorytellingImg,
    projectUrl: "/portfolio/brand-storytelling"
  },
  {
    id: 7,
    title: "Multi-Industry Awards Recognition",
    category: "awards",
    categoryLabel: "Awards & Recognition",
    description: "Led winning campaigns for multiple awards including Fact Magazine, WhatsOn, PETA, and Leaders F&B recognizing brand excellence.",
    imageUrl: awardsRecognitionImg,
    projectUrl: "/portfolio/awards-recognition"
  },
  {
    id: 8,
    title: "Press Release Portfolio",
    category: "writing_samples",
    categoryLabel: "Writing Samples",
    description: "Professional press releases for brand activations, collaborations, and events that gained significant organic media coverage.",
    imageUrl: pressReleaseImg,
    projectUrl: "/portfolio/content-writing"
  },
  {
    id: 9,
    title: "Award Submission Writing",
    category: "writing_samples",
    categoryLabel: "Writing Samples",
    description: "Strategic award submissions that successfully positioned brands for industry recognition and thought leadership.",
    imageUrl: pressReleaseImg,
    projectUrl: "/portfolio/content-writing"
  },
  {
    id: 10,
    title: "Content Writing Samples",
    category: "content_writing",
    categoryLabel: "Content Writing Samples",
    description: "Professional content writing portfolio including press releases, event materials, and brand communications that generated significant media coverage.",
    imageUrl: pressReleaseImg,
    projectUrl: "/portfolio/content-writing"
  }
];
