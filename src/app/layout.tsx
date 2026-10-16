import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import Providers from "@/components/Providers";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MD. Habibur Rahman | .NET Full Stack Developer",
  description:
    "Professional .NET Full Stack Developer specializing in ASP.NET Core, Web API, React, Next.js and SQL Server.",
  keywords: [".NET", "ASP.NET Core", "React Developer", "Full Stack Developer", "SQL Server"],
  openGraph: {
    title: "Habibur Rahman — .NET Full Stack Developer",
    description: "Full Stack .NET Developer Portfolio",
    images: ["/image/HabiburProfile.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f6f8" },
    { media: "(prefers-color-scheme: dark)", color: "#121820" },
  ],
};

// Runs before paint so the saved / system theme never flashes
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        <Providers>
          <ScrollProgress />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
