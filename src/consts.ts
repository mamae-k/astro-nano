import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "AcquireLift | Google Ad Grant Specialist",
  EMAIL: "AcquireLift@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Google Ad Grant Specialist & Account Audits",
  DESCRIPTION: "Certified Google Partner helping non-profits maximize $10,000/month in free Google Search ads. Audits, compliance fixes, and campaign optimization.",
};

export const BLOG: Metadata = {
  TITLE: "Ad Grant Articles & Guides",
  DESCRIPTION: "Practical guides and policy advice for non-profits managing Google Ad Grants.",
};

export const WORK: Metadata = {
  TITLE: "Case Studies & Proof",
  DESCRIPTION: "Verified results, client reviews, and account audit case studies.",
};

export const PROJECTS: Metadata = {
  TITLE: "Services",
  DESCRIPTION: "Google Ad Grant Account Audits, Setup, and Campaign Optimization.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "email",
    HREF: "mailto:AcquireLift@gmail.com",
  }
];