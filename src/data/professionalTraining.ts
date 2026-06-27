export type TrainingItem = {
  title: string;
  courseName: string;
  institute: string;
  duration: string;
  hours: string;
  keyFocusAreas: string[];
  overview: string;
};

export const professionalTraining: TrainingItem[] = [
  {
    title:
      "Diploma in Enterprise Systems Analysis and Design - C# .NET (ESAD-CS)",

    courseName:
      "Cross Platform Applications using ASP.NET, Angular & React",

    institute:
      "IsDB-BISEW IT Scholarship Programme",

    duration:
      "October 2024 – August 2025",

    hours:
      "8.5 Months • 788 Hours",

    keyFocusAreas: [
      "ASP.NET Core",
      "Web API",
      "MVC",
      "EF Core",
      "SQL Server",
      "Angular",
      "React",
      ".NET MAUI",
    ],

    overview:
      "Hands-on training covering C#, .NET 6, ASP.NET Core MVC & Web API, Entity Framework Core, SQL Server 2019/2022, Angular, React, Blazor, and .NET MAUI, with real-world project development."
  }
];