// projects.ts
export type ProjectType =
  | "personal project"
  | "professional contribution"
  | "other";

export type Project = {
  title: string;
  description: string;
  tech: string[];
  type: ProjectType;
  github?: string; // Optional GitHub link
  demo?: string;   // Optional demo link
};

export const projects: Project[] = [
  // ================= PERSONAL PROJECTS =================
 
  {
    "title": "TechJobs Web and Mobile Application",
    "description": "A full-stack job portal built with ASP.NET Core Web API and Angular. Features role-based dashboards for Admin, Employer, and JobSeeker, JWT authentication, job posting, applications, profile management, and CV upload with search, filter, and pagination.",
    "tech": [
      "ASP.NET Core Web API",
      "Angular",
      "TypeScript",
      "EF Core",
      "SQL Server",
      "JWT",
      "AutoMapper",
      "FluentValidation"
    ],
    "type": "personal project",
    "github": "https://github.com/habibnstu/TechJobs-Web-and-Mobile-Application-"
  },
  {
    "title": "IT Skill Development & Campus Ambassador Management System",
    "description": "ASP.NET Core MVC web application for managing IT training center operations, including course enrollment, campus ambassador referrals, commission tracking, withdrawals, and admin dashboard with analytics.",
    "tech": [
      "ASP.NET Core MVC",
      "SQL Server",
      "Identity Framework",
      "Bootstrap",
      "JavaScript"
    ],
    "type": "personal project",
    "github": "https://github.com/habibnstu/SkillDev-Course-Referral-System"
  },
  {
    "title": "AmarCart ASP.NET Core eCommerce Website",
    "description": "A fully functional eCommerce web application built with ASP.NET Core MVC featuring product catalog, shopping cart, order management, role-based admin access, EF Core Code-First, and session-based cart.",
    "tech": [
      "ASP.NET Core MVC",
      "EF Core",
      "SQL Server",
      "Identity Framework",
      "Bootstrap 5",
      "Font Awesome"
    ],
    "type": "personal project",
    "github": "https://github.com/habibnstu/AmarCart-Ecommerce"
  },
  {
    "title": "FishBazaar Node.js eCommerce",
    "description": "Full-featured eCommerce application built with Node.js, Express, and MongoDB featuring product catalog with image upload, dynamic cart system, user registration/login, admin dashboard, and category/subcategory management.",
    "tech": [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "raz (Razor for Node)",
      "jQuery",
      "AJAX"
    ],
    "type": "personal project",
    "github": "https://github.com/habibnstu/fishbazaar-ecommerce-node-mongo"
  },

  // ================= PROFESSIONAL CONTRIBUTIONS =================
  {
    title: "Point of Sale (POS) System",
    description:
      "Contributed to enterprise POS system development using ASP.NET Core Web API and MVC with SQL Server backend.",
    tech: ["ASP.NET Core Web API", "ASP.NET MVC", "SQL Server"],
    type: "professional contribution",
    github: "https://github.com/habibnstu/POS-System.git",
  },
  {
    title: "HR Management System",
    description:
      "Worked on HR system including employee management, leave tracking, and API integration using ASP.NET Core and Next.js.",
    tech: ["ASP.NET Core Web API", "Next.js", "SQL Server"],
    type: "professional contribution",
    github: "https://github.com/habibnstu/HR-Management-System.git",
  },
  {
    title: "E-Commerce Enterprise Platform",
    description:
      "Developed backend APIs for enterprise eCommerce system with order processing and product management.",
    tech: ["ASP.NET Core Web API", "Next.js", "SQL Server"],
    type: "professional contribution",
    github: "https://github.com/habibnstu/ECommerce-Enterprise-API.git",
  },
  {
    title: "KPI Dashboard System",
    description:
      "Built KPI reporting system for performance tracking using ASP.NET Web Forms and SQL Server.",
    tech: ["ASP.NET Web Forms", "SQL Server"],
    type: "professional contribution",
    github: "https://github.com/habibnstu/KPI-Dashboard.git",
  },
  {
    title: "Exam Management Platform",
    description:
      "Contributed to internal exam management system including workflows and reporting modules.",
    tech: ["ASP.NET Core", "SQL Server"],
    type: "professional contribution",
    github: "https://github.com/habibnstu/Exam-Management-Platform.git",
  },

  // ================= OTHER PROJECTS =================
  
  {
    "title": "Fisheries Farm Management System (FFMS)",
    "description": "Comprehensive SQL Server database solution for fisheries farm management including fish stock, feeding schedules, sales transactions, employee records with advanced SQL features like indexing, triggers, views, stored procedures, and complex queries with aggregations, CTEs, and ranking functions.",
    "tech": [
      "SQL Server",
      "T-SQL",
      "DDL",
      "DML",
      "Stored Procedures",
      "Triggers",
      "Views",
      "Indexes"
    ],
    "type": "other",
    "github": "https://github.com/habibnstu/Fisheries-Farm-Management-System-SQL"
  },
  {
    "title": "JobSeeker Skill Master-Detail App (Angular)",
    "description": "Full-stack master-detail application for managing JobSeekers and their Skills using ASP.NET Core Web API and Angular with reactive forms, image upload, real-time form updates, and clean responsive UI.",
    "tech": [
      "Angular",
      "TypeScript",
      "ASP.NET Core Web API",
      "EF Core",
      "SQL Server",
      "RxJS",
      "Bootstrap"
    ],
    "type": "other",
    "github": "https://github.com/habibnstu/jobseeker-skill-master-details-angular"
  },
  {
    "title": "Product Master-Details ASP.NET MVC",
    "description": "ASP.NET MVC project showcasing master-detail relationships for Products and Colors with full CRUD operations, image upload and preview, AJAX-powered dynamic color addition, and responsive UI using Bootstrap 5.",
    "tech": [
      "ASP.NET MVC",
      "C#",
      "jQuery",
      "AJAX",
      "Bootstrap 5",
      "Font Awesome",
      "SQL Server"
    ],
    "type": "other",
    "github": "https://github.com/habibnstu/ProductMasterDetails-ASPNetMVC"
  },
  {
    "title": "C# Generic Repository Pattern with Factory & DI",
    "description": "C# console application demonstrating Generic Repository Pattern combined with Factory Pattern and Dependency Injection principles, performing CRUD operations on entities like Brand, Category, and Product using in-memory data store.",
    "tech": ["C#", ".NET Console Application", "OOP", "Design Patterns", "DI"],
    "type": "other",
    "github": "https://github.com/habibnstu/CSharp-Generic-Repository-Pattern"
  },
  {
    "title": "CustomerHub ASP.NET Core CRUD with Master-Detail",
    "description": "Complete ASP.NET Core MVC project demonstrating CRUD operations using Entity Framework Core Code-First approach with Customer and Delivery Address management, image upload with storage, master-detail form handling, and AJAX-based editing.",
    "tech": [
      "ASP.NET Core MVC",
      "EF Core",
      "SQL Server",
      "Bootstrap 5",
      "AJAX",
      "C#"
    ],
    "type": "other",
    "github": "https://github.com/habibnstu/CustomerHub-EFCore-ASP.NET-MasterDetail"
  },
  {
    "title": "Company Management System (ADO.NET, XML & Reporting)",
    "description": "Desktop-based Company Management System built using ADO.NET, XML, and Crystal Reports with essential CRUD operations, XML-based data import/export, and printable reports for managing company, employee, and department data.",
    "tech": [
      "C#",
      ".NET Framework",
      "Windows Forms",
      "ADO.NET",
      "SQL Server",
      "XML",
      "Crystal Reports"
    ],
    "type": "other",
    "github": "https://github.com/habibnstu/CompanyManagement-ADO-XML-Report"
  },
  {
    "title": "PatientCare Management App",
    "description": "Robust ASP.NET Core MVC web application for managing patient records and medical tests with dynamic test association, data aggregation summaries (total, max, min, average fees), image upload, and responsive UI with Bootstrap 5.",
    "tech": [
      "ASP.NET Core MVC",
      "C#",
      "SQL Server",
      "Bootstrap 5",
      "jQuery",
      "AJAX",
      "Font Awesome"
    ],
    "type": "other",
    "github": "https://github.com/habibnstu/PatientCare-Management-App"
  },
  {
    "title": "JobSeeker Skill Master-Detail App (React)",
    "description": "Full-stack application for managing JobSeekers and their Skills using ASP.NET Core Web API and React with master-detail structure, real-time form handling, file upload, and clean responsive UI.",
    "tech": [
      "React",
      "ASP.NET Core Web API",
      "EF Core",
      "SQL Server",
      "Axios",
      "React-Bootstrap"
    ],
    "type": "other",
    "github": "https://github.com/habibnstu/jobseeker-skill-master-details-react"
  },
  {
    "title": "Frontend Portfolio Website",
    "description": "Responsive HTML5/CSS3 website demonstrating frontend fundamentals with clean design and modern layout techniques.",
    "tech": ["HTML5", "CSS3"],
    "type": "other",
    "github": "https://github.com/habibnstu/html-css-webdev-project"
  }

];