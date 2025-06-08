export interface Testimonial {
  id: number;
  content: string;
  author: string;
  position: string;
  rating: number;
  avatarUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Airin and I worked together at Kitopi for more than a year, and I was really impressed by her marketing knowledge, creativity, and ownership!",
    author: "⁠Fabienne Naggear",
    position: "Senior Brand Manager | Kitopi",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    content: "Working with Airin over the last few months has been great. Her passion and effort to elevate work at hand have been inspiring!",
    author: "Sarah Johnson",
    position: "Marketing Director, Elevate",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    content: "Airin's technical skills combined with her design sensibility made her the perfect partner for our web application. She understood our vision and brought it to life beautifully.",
    author: "Michael Torres",
    position: "CTO, FinTech Solutions",
    rating: 4.5,
    avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
  }
];
