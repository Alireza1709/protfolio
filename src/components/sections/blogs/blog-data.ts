export interface Blog {
  id: number;
  title: string;
  image: string;
  author: string;
  date: string;
  description: string;
  href: string;
}

export const blogData: Blog[] = [
  {
    id: 1,
    title: "How to Build Better User Interfaces",
    image: "/images/blog1.jpg",
    author: "Alireza",
    date: "Aug 08, 2026",
    description:
      "Discover practical techniques for creating clean, modern and user-friendly interfaces that improve the overall user experience.",
    href: "/blogs/better-user-interfaces",
  },
  {
    id: 2,
    title: "Modern Frontend Development",
    image: "/images/blog1.jpg",
    author: "Alireza",
    date: "Aug 05, 2026",
    description:
      "A look at modern frontend development and the tools, patterns and technologies that help developers build better websites.",
    href: "/blogs/modern-frontend-development",
  },
  {
    id: 3,
    title: "Creating Responsive Websites",
    image: "/images/blog1.jpg",
    author: "Alireza",
    date: "Aug 01, 2026",
    description:
      "Learn how to create responsive layouts that look great across desktop, tablet and mobile devices.",
    href: "/blogs/responsive-websites",
  },
//   {
//     id: 4,
//     title: "Next.js Tips Every Developer Should Know",
//     image: "/images/blog1.jpg",
//     author: "Alireza",
//     date: "Jul 28, 2026",
//     description:
//       "Useful Next.js tips and patterns that can make your applications faster, cleaner and easier to maintain.",
//     href: "/blogs/nextjs-tips",
//   },
//   {
//     id: 5,
//     title: "The Importance of Good Web Design",
//     image: "/images/blog1.jpg",
//     author: "Alireza",
//     date: "Jul 24, 2026",
//     description:
//       "Good design is more than just appearance. Learn how thoughtful design decisions can improve usability and engagement.",
//     href: "/blogs/good-web-design",
//   },
//   {
//     id: 6,
//     title: "Building a Strong Portfolio",
//     image: "/images/blog1.jpg",
//     author: "Alireza",
//     date: "Jul 20, 2026",
//     description:
//       "A practical guide to creating a portfolio that effectively showcases your skills, experience and best projects.",
//     href: "/blogs/building-portfolio",
//   },
];