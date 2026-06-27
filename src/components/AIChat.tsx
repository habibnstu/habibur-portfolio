"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

type Message = {
  role: "user" | "bot";
  text: string;
};

const suggestions = [
  "Skills & Technologies",
  "Featured Projects",
  "Work Experience",
  "Contact Information",
  "TechJobs Platform",
  "POS System Architecture",
  ".NET Core Expertise",
  "Database Experience"
];

// Professional response database
const responses = {
  skills: `**Technical Skills & Competencies:**

**Backend Development:**
• C#, .NET Core, ASP.NET Core MVC, ASP.NET Core Web API
• Entity Framework Core, LINQ, RESTful API Design
• JWT Authentication, Role-based Access Control (RBAC)
• Clean Architecture & Repository Pattern

**Frontend Development:**
• React.js, Angular, Next.js
• TypeScript, JavaScript (ES6+)
• HTML5, CSS3, Tailwind CSS, Bootstrap 5

**Database & Tools:**
• SQL Server, T-SQL, Stored Procedures, Triggers
• Entity Framework Core
• Git, GitHub, JWT, Postman

**Other Expertise:**
• Microservices Architecture
• Third-party API Integration
• Performance Optimization & Debugging`,

  projects: `**Featured Projects Portfolio:**

**Personal Projects:**
1. **TechJobs Platform** - Full-stack job portal with JWT auth, role-based access, and Clean Architecture using ASP.NET Core + React/Angular
2. **SkillDev Referral System** - Training center management with commission tracking and student enrollment
3. **AmarCart eCommerce** - Complete e-commerce solution with cart, orders, admin panel, and authentication
4. **FishBazaar** - Node.js e-commerce platform with MongoDB for fish product marketplace

**Professional Contributions:**
1. **POS System** - Enterprise point-of-sale solution with inventory management
2. **HR Management System** - Employee tracking, leave management, and API integration
3. **E-Commerce Enterprise Platform** - Backend APIs for large-scale e-commerce
4. **KPI Dashboard** - Performance tracking and reporting system

**Other Projects:**
• Database design, CRUD applications, Design Patterns implementation`,

  experience: `**Professional Experience:**

**IT Officer** | Fashion Tax Ltd, Dhaka | *Current Role*

**Key Responsibilities:**
• Developing and maintaining enterprise-level POS, HR, and ERP systems
• Building scalable web applications using ASP.NET Core + React + Next.js
• Creating RESTful APIs and integrating third-party services
• Database design and optimization using SQL Server
• Collaborating with cross-functional teams on full-stack development

**Technical Environment:**
• Backend: ASP.NET Core, C#, Web API, Entity Framework
• Frontend: React, Next.js, TypeScript
• Database: SQL Server
• Tools: Git ,Postman, Visual Studio, Azure DevOps

**Notable Achievements:**
• Successfully delivered 3 enterprise modules ahead of schedule
• Improved API response time by 40% through query optimization
• Implemented secure authentication systems for multiple applications`,

  contact: `**Contact Information & Professional Links:**

📧 **Email:** mdhabibnstu@gmail.com
📱 **WhatsApp:** +88 01768238762
📍 **Location:** Mirpur-10, Dhaka, Bangladesh

💼 **Open for:**
• Full-stack development opportunities
• Freelance/Contract work
• Technical consultations
• Collaboration on innovative projects

**Best Time to Connect:**
Response within 24 hours`,

  techjobs: `**TechJobs Platform - Detailed Overview:**

**Architecture:** Clean Architecture with Repository Pattern
**Backend:** ASP.NET Core Web API, C#, EF Core, JWT
**Frontend:** React + Angular (dual implementation)
**Database:** SQL Server with optimized queries

**Key Features:**
• JWT-based secure authentication & authorization
• Role-based access (Job Seeker, Employer, Admin)
• Job posting, application tracking, resume upload
• Real-time notifications and email alerts
• Advanced search & filtering with pagination
• Responsive design for mobile & desktop

**Technical Highlights:**
• Implemented middleware for global exception handling
• Used DTOs for data transfer between layers
• Integrated logging for error tracking
• Unit testing for critical business logic`,

  pos: `**POS System - Technical Architecture:**

**Technology Stack:**
• **Backend:** ASP.NET Core Web API (.NET 6/7)
• **Frontend:** ASP.NET Core MVC with Razor Pages
• **Database:** SQL Server with stored procedures
• **Authentication:** JWT + Identity Framework

**Core Modules:**
• **Inventory Management:** Product tracking, stock alerts
• **Sales Processing:** Billing, invoices, payment handling
• **Customer Management:** Loyalty points, purchase history
• **Reporting:** Daily sales, profit analysis, tax reports
• **User Management:** Role-based access for staff/admin

**Key Features:**
• Barcode scanning integration
• Multiple payment methods (Cash, Card, Mobile Banking)
• Real-time inventory updates
• Sales analytics dashboard
• Print receipts & thermal printer support
• Offline mode capability`,

  dotnet: `**.NET Core Expertise Summary:**

**Core Competencies:**
• **ASP.NET Core MVC** - Building robust web applications with Razor views
• **ASP.NET Core Web API** - RESTful API development with OpenAPI/Swagger
• **Entity Framework Core** - Code-first & database-first approaches
• **Authentication** - JWT, Identity Framework, OAuth 2.0
• **Dependency Injection** - Built-in IoC container configuration

**Advanced Topics:**
• Middleware pipeline customization
• Global exception handling
• Background services (IHostedService)
• SignalR for real-time features

**Best Practices:**
• Clean Architecture & Repository Pattern
• Async/Await for improved performance
• SOLID principles implementation
• Unit & Integration testing (xUnit, Moq)`,

  database: `**Database & Data Management Experience:**

**SQL Server Expertise:**
• Complex query writing with JOINs, subqueries, CTEs
• Stored procedures, functions, triggers, views
• Index optimization and query performance tuning
• Transaction management and isolation levels
• Database normalization & denormalization
• Backup, recovery, and migration strategies

**ORM Tools:**
• Entity Framework Core (Code First, Database First)
• Dapper for micro-ORM requirements
• LINQ to SQL and Lambda expressions

**MongoDB (NoSQL):**
• Document-based data modeling
• Aggregation pipeline for complex queries
• Indexing for performance optimization

**Other Tools:**
• SQL Server Management Studio (SSMS)`
};

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "👋 **Welcome!** I'm Habibur's AI Assistant. I can provide detailed information about:\n\n• Technical Skills & Expertise\n• Professional Experience\n• Project Portfolio\n• Contact & Collaboration\n\n**What would you like to know?**"
    }
  ]);

  const getProfessionalResponse = (msg: string): string => {
    const lower = msg.toLowerCase();

    // Skills related
    if (lower.includes("skill") || lower.includes("technology") || lower.includes("tech stack"))
      return responses.skills;

    // Projects related
    if (lower.includes("project") || lower.includes("portfolio"))
      return responses.projects;

    // Experience related
    if (lower.includes("experience") || lower.includes("work") || lower.includes("job") || lower.includes("career"))
      return responses.experience;

    // Contact related
    if (lower.includes("contact") || lower.includes("email") || lower.includes("phone") || lower.includes("reach"))
      return responses.contact;

    // Specific project: TechJobs
    if (lower.includes("techjobs") || lower.includes("job portal"))
      return responses.techjobs;

    // Specific project: POS
    if (lower.includes("pos") || lower.includes("point of sale"))
      return responses.pos;

    // .NET Core
    if (lower.includes(".net") || lower.includes("dotnet") || lower.includes("asp.net"))
      return responses.dotnet;

    // Database
    if (lower.includes("database") || lower.includes("sql") || lower.includes("mongodb"))
      return responses.database;

    // Education
    if (lower.includes("education") || lower.includes("degree") || lower.includes("university")) {
      return "**Education Background:**\n\n• **B.Sc. in Computer Science & Engineering**\n  *Working Experience Equivalent*\n• **Professional Certifications:**\n  - ASP.NET Core Certification\n  - React & Modern JS\n  - SQL Server Database Design\n• **Continuous Learning:**\n  - System Design & Architecture\n  - Cloud Computing (Azure Fundamentals)\n  - Microservices with .NET";
    }

    // Default response with better structure
    return `**I can help you with these topics:**\n\n` +
      `🔹 **Skills & Technologies** - Complete tech stack details\n` +
      `🔹 **Projects Portfolio** - Personal & professional projects\n` +
      `🔹 **Work Experience** - Current role & responsibilities\n` +
      `🔹 **Contact Information** - How to reach Habibur\n` +
      `🔹 **TechJobs Platform** - Job portal architecture\n` +
      `🔹 **POS System** - Point of sale technical details\n` +
      `🔹 **.NET Core Expertise** - Framework proficiency\n` +
      `🔹 **Database Experience** - SQL & NoSQL skills\n\n` +
      `**Please ask a specific question from above!**`;
  };

  const send = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate typing delay for realistic feel
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const botText = getProfessionalResponse(input);
    const botMsg: Message = { role: "bot", text: botText };
    
    setMessages((prev) => [...prev, botMsg]);
    setIsTyping(false);
  };

  const handleChip = (chip: string) => {
    setInput(chip);
  };

  // Format message text with markdown-style formatting
  const formatMessage = (text: string) => {
    return text.split('\n').map((line, i) => {
      if (line.startsWith('•')) {
        return <div key={i} className="flex items-start gap-2 mt-1">
          <span className="text-indigo-500">•</span>
          <span className="flex-1">{line.substring(1).trim()}</span>
        </div>;
      }
      if (line.startsWith('**') && line.endsWith('**')) {
        return <div key={i} className="font-bold mt-2 mb-1 text-indigo-600 dark:text-indigo-400">
          {line.replace(/\*\*/g, '')}
        </div>;
      }
      if (line.trim() === '') return <div key={i} className="h-2" />;
      return <div key={i} className="mb-1">{line}</div>;
    });
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-5 py-3 rounded-full shadow-xl flex items-center gap-2 transition-all duration-300 hover:scale-105 z-40 group"
      >
        <MessageCircle size={18} className="group-hover:rotate-12 transition-transform" />
        <span className="text-sm font-medium">AI Assistant</span>
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-6 w-[450px] max-w-[calc(100vw-2rem)] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl overflow-hidden z-50">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-bold text-lg">Habibur's AI Assistant</h2>
                <p className="text-xs text-indigo-100 mt-0.5">Powered by intelligent responses</p>
              </div>
              <button 
                onClick={() => setOpen(false)} 
                className="hover:bg-white/20 rounded-full p-1 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="h-[400px] overflow-y-auto p-4 space-y-3 bg-gray-50 dark:bg-gray-950">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    m.role === "user"
                      ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-br-sm"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-bl-sm shadow-sm"
                  }`}
                >
                  {m.role === "bot" ? formatMessage(m.text) : m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-gray-800 p-3 rounded-2xl rounded-bl-sm border border-gray-200 dark:border-gray-700">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Chips */}
          <div className="px-4 pb-3 flex gap-2 overflow-x-auto bg-gray-50 dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 scrollbar-thin">
            {suggestions.map((s, i) => (
              <button
                key={i}
                onClick={() => handleChip(s)}
                className="text-xs px-3 py-1.5 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full whitespace-nowrap hover:bg-indigo-100 dark:hover:bg-indigo-500/20 transition-all duration-200 hover:scale-105"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 p-3 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && send()}
              placeholder="Ask about skills, projects, experience..."
              className="flex-1 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 text-sm dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
            <button
              onClick={send}
              disabled={!input.trim()}
              className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white p-2.5 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}