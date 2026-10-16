"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

  const scrollRef = useRef<HTMLDivElement>(null);

  // Keep the newest message in view
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping]);

  const send = async (preset?: string) => {
    const text = (preset ?? input).trim();
    if (!text) return;

    const userMsg: Message = { role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate typing delay for realistic feel
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const botText = getProfessionalResponse(text);
    const botMsg: Message = { role: "bot", text: botText };
    
    setMessages((prev) => [...prev, botMsg]);
    setIsTyping(false);
  };

  const handleChip = (chip: string) => {
    send(chip);
  };

  // Format message text with markdown-style formatting
  const formatMessage = (text: string) => {
    return text.split("\n").map((line, i) => {
      if (line.startsWith("•")) {
        return (
          <div key={i} className="mt-1 flex items-start gap-2">
            <span className="text-accent">•</span>
            <span className="flex-1">{line.substring(1).trim()}</span>
          </div>
        );
      }
      if (line.startsWith("**") && line.endsWith("**")) {
        return (
          <div key={i} className="mb-1 mt-2 font-semibold text-ink">
            {line.replace(/\*\*/g, "")}
          </div>
        );
      }
      if (line.trim() === "") return <div key={i} className="h-2" />;
      return (
        <div key={i} className="mb-1">
          {line.replace(/\*\*/g, "")}
        </div>
      );
    });
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.4 }}
        aria-label={open ? "Close assistant" : "Open assistant"}
        aria-expanded={open}
        className="grad-bg fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full px-4 py-3 text-white shadow-[0_12px_28px_-10px_var(--grape)] transition-transform hover:-translate-y-0.5 sm:px-5"
      >
        {open ? <X size={18} /> : <MessageCircle size={18} />}
        <span className="text-sm font-semibold">{open ? "Close" : "Ask about me"}</span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            style={{ transformOrigin: "bottom right" }}
            className="fixed bottom-20 right-5 z-50 flex w-[420px] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_24px_60px_-20px_rgb(15_23_42/0.45)]"
          >
            {/* Header */}
            <div className="relative flex items-center justify-between border-b border-line px-5 py-4">
              <span aria-hidden className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky via-grape to-coral" />
              <div className="flex items-center gap-3">
                <span className="grad-bg grid h-9 w-9 place-items-center rounded-full text-[12px] font-extrabold text-white">
                  HR
                </span>
                <div>
                  <h2 className="text-[15px] font-bold text-ink">Habibur’s assistant</h2>
                  <p className="text-xs text-muted">Quick answers about skills, projects and contact</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close assistant"
                className="grid h-8 w-8 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-ink"
              >
                <X size={17} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="h-[min(380px,55vh)] space-y-3 overflow-y-auto bg-bg p-4">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "grad-bg rounded-br-md text-white"
                        : "rounded-bl-md border border-line bg-surface text-ink/85"
                    }`}
                  >
                    {m.role === "bot" ? formatMessage(m.text) : m.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex gap-1 rounded-2xl rounded-bl-md border border-line bg-surface px-3.5 py-3">
                    {[0, 150, 300].map((d) => (
                      <span key={d} className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted" style={{ animationDelay: `${d}ms` }} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quick Chips */}
            <div className="flex gap-2 overflow-x-auto border-t border-line bg-bg px-4 py-2.5">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => handleChip(s)}
                  className="whitespace-nowrap rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium text-ink/80 transition-colors hover:border-accent hover:text-accent"
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 border-t border-line p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Ask about skills, projects, experience"
                aria-label="Your question"
                className="flex-1 rounded-lg border border-line bg-bg px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-muted/70 focus:border-accent"
              />
              <button
                onClick={() => send()}
                disabled={!input.trim()}
                aria-label="Send"
                className="grad-bg grid h-10 w-10 place-items-center rounded-lg text-white transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
