export interface Experience {
  company: string;
  date: string;
  role: string;
  description: string;
  color: "c1" | "c2";
}

export const experiences: Experience[] = [
  {
    company: "Cognizant, Mumbai",
    date: "Sep 2016- July 2020",
    role: "Experince Designer",
    description:
      "Building modern and responsive web applications using Next.js, React and TypeScript with a strong focus on performance and user experience.",
    color: "c1",
  },
  {
    company: "Sugee Pvt limited",
    date: "Sep 2020- July 2023",
    role: "UI/UX Designer",
    description:
      "Developed reusable UI components and responsive interfaces while working closely with designers to bring modern designs to life.",
    color: "c2",
  },
  {
    company: "Cinetstox, Mumbai",
    date: "Sep 2023",
    role: "Lead UX Designer",
    description:
      "",
    color: "c1",
  },
];