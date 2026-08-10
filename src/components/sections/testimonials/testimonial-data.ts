export interface Testimonial {
  id: number;
  name: string;
  job: string;
  avatar: string;
  rating: number;
  comment: string;
}

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Alex Morgan",
    job: "Product Designer",
    avatar: "/images/avatar.png",
    rating: 5,
    comment:
      "Working with this team was an amazing experience. Everything was smooth, professional, and delivered exactly as expected.",
  },
  {
    id: 2,
    name: "Sarah Wilson",
    job: "Frontend Developer",
    avatar: "/images/avatar.png",
    rating: 4.9,
    comment:
      "The attention to detail was incredible. The final result looked even better than what I had imagined at the beginning.",
  },
  {
    id: 3,
    name: "Michael Brown",
    job: "Creative Director",
    avatar: "/images/avatar.png",
    rating: 5,
    comment:
      "A very professional experience from start to finish. Communication was great and every detail was handled perfectly.",
  },
  {
    id: 4,
    name: "Emma Davis",
    job: "Marketing Manager",
    avatar: "/images/avatar.png",
    rating: 4.8,
    comment:
      "I really loved the result. The design feels modern, clean, and exactly matches the vision we had for the project.",
  },
  {
    id: 5,
    name: "Daniel Smith",
    job: "Business Owner",
    avatar: "/images/avatar.png",
    rating: 5,
    comment:
      "Excellent work and great communication. I would definitely recommend working with them for future projects.",
  },
];