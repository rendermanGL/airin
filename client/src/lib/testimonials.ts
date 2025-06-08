
export interface Testimonial {
  id: number;
  content: string;
  author: string;
  position: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Airin and I worked together at Kitopi for more than a year, and I was really impressed by her marketing knowledge, creativity, and ownership!",
    author: "Fabienne Naggear",
    position: "Senior Brand Manager | Kitopi"
  },
  {
    id: 2,
    content: "Working with Airin over the last few months has been great. Her passion and effort to elevate work at hand have been inspiring!",
    author: "Tania Bilani",
    position: "Global Marketing Director | Kitopi"
  },
  {
    id: 3,
    content: "Airin consistently took full ownership of her marketing projects, always ensuring meticulous execution with a creative touch.",
    author: "Imad El Fay",
    position: "VP, Growth | Kitopi"
  },
  {
    id: 4,
    content: "Airin's creativity in social media, influencer marketing, and PR has elevated Wild & The Moon UAE to the next level!",
    author: "Lucile Jan Robin",
    position: "Marketing & Communications Director | Wild & The Moon"
  }
];
