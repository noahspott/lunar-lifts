import { URL } from "./business";

export type SeoMeta = {
  title: string;
  description: string;
  url?: string;
  image?: string;
};

export const defaultSeo: SeoMeta = {
  title: "Lunar Lifts",
  description: "Lunar Lifts bounce house rentals",
  url: URL,
  image: "/images/open-graph.png",
};

export const seo: Record<string, SeoMeta> = {
  home: {
    title: "Home | Lunar Lifts",
    description: "Home description.",
    url: URL,
  },
  about: {
    title: "About | Lunar Lifts",
    description: "About description.",
    url: `${URL}/about`,
  },
  faqs: {
    title: "FAQs | Lunar Lifts",
    description: "Faqs description.",
    url: `${URL}/faqs`,
  },
  services: {
    title: "Services | Lunar Lifts",
    description: "Services description.",
    url: `${URL}/services`,
  },
  contact: {
    title: "Contact | Lunar Lifts",
    description: "Contact description.",
    url: `${URL}/contact`,
  },
};
