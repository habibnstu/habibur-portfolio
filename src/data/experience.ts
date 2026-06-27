// /data/experience.ts

export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  location?: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    company: "Fashion Tax Ltd",
    role: "Jr. Officer, IT Department",
    duration: "2025 - Present",
    location: "Dhaka, Bangladesh",
    description:
      "Maintaining POS system and building ASP.NET Core Web API systems."
  }
];