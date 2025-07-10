import { URL } from "./business";

export type SeoMeta = {
  title: string;
  description: string;
  url?: string;
  image?: string;
};

export const seo: Record<string, SeoMeta> = {
  home: {
    title: "Bounce House & Party Rentals in the Four Corners | Lunar Lifts",
    description:
      "Lunar Lifts is the Four Corners' go-to for modern bounce house and party rentals. Clean equipment, reliable service, and zero stress—book today.",
    url: URL,
  },
  about: {
    title: "Who We Are | Lunar Lifts Bounce House Rentals",
    description:
      "Learn about Lunar Lifts—a bounce house rental company in the Four Corners region redefining party rentals with clean inflatables and punctual service.",
    url: `${URL}/about`,
  },
  faqs: {
    title: "FAQs | Bounce House Rentals in the Four Corners | Lunar Lifts",
    description:
      "Got questions? We've got answers. Find out everything you need to know about booking bounce house rentals with Lunar Lifts in the Four Corners.",
    url: `${URL}/faqs`,
  },
  services: {
    title: "Our Rentals | Bounce Houses, Waterslides & More | Lunar Lifts",
    description:
      "Explore our party rentals—from bounce houses and waterslides to tables, chairs, and add-ons. Clean, modern equipment for events in the Four Corners.",
    url: `${URL}/services`,
  },
  contact: {
    title: "Book Your Party Rental Today | Contact Lunar Lifts",
    description:
      "Ready to book? Get in touch with Lunar Lifts to reserve your bounce house rental. Serving families and events across the Four Corners region.",
    url: `${URL}/contact`,
  },
};
