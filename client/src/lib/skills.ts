export interface Skill {
  name: string;
  percentage: number;
}

export const designSkills: Skill[] = [
  {
    name: "User Experience Design",
    percentage: 95,
  },
  {
    name: "UI/Visual Design",
    percentage: 90,
  },
  {
    name: "Prototyping",
    percentage: 85,
  },
  {
    name: "User Research",
    percentage: 80,
  },
];

export const developmentSkills: Skill[] = [
  {
    name: "HTML/CSS",
    percentage: 95,
  },
  {
    name: "JavaScript",
    percentage: 85,
  },
  {
    name: "React",
    percentage: 80,
  },
  {
    name: "Responsive Design",
    percentage: 90,
  },
];

export const tools = [
  "Figma",
  "Adobe XD",
  "Sketch",
  "Photoshop",
  "Illustrator",
  "React",
  "Vue",
  "Tailwind CSS",
  "SASS",
  "Git",
  "Webpack",
  "Node.js",
];
