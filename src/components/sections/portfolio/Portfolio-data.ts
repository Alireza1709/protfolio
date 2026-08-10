export interface ProfileItem {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
}

export const profileData: ProfileItem[] = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "Modern e-commerce platform with seamless shopping experience",
    image: "/images/pcard.png",
    href: "/projects/e-commerce",
  },
  {
    id: 2,
    title: "Dashboard Design",
    description: "Analytics dashboard with real-time data visualization",
    image: "/images/pcard.png",
    href: "/projects/dashboard",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Creative portfolio showcasing design and development work",
    image: "/images/pcard.png",
    href: "/projects/portfolio",
  },
  {
    id: 4,
    title: "Food Delivery",
    description: "Food ordering platform with real-time tracking",
    image: "/images/pcard.png",
    href: "/projects/food-delivery",
  },
  {
    id: 5,
    title: "Landing Page",
    description: "High-converting landing page for product launch",
    image: "/images/pcard.png",
    href: "/projects/landing-page",
  },
];