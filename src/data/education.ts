export type EducationItem = {
  degree: string;
  institute?: string;
  department?: string;
  board?: string;
  group?: string;
  session?: string;
  passingYear: string;
  result: string;
  type: "university" | "college";
};

export const education: EducationItem[] = [
  {
    degree: "B.Sc. in Fisheries",
    institute: "Noakhali Science and Technology University",
    department: "Fisheries and Marine Science",
    session: "2016 – 2017",
    passingYear: "2020",
    result: "3.44 / 4.0",
    type: "university",
  },
  {
    degree: "Higher Secondary Certificate (H.S.C)",
    board: "Cumilla",
    group: "Science",
    passingYear: "2016",
    result: "G.P.A 4.75 / 5.0",
    type: "college",
  },
  {
    degree: "Secondary School Certificate (S.S.C)",
    board: "Cumilla",
    group: "Science",
    passingYear: "2014",
    result: "G.P.A 5.00 / 5.0",
    type: "college",
  },
];