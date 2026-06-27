import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata = {
  title: "MD. Habibur Rahman | .NET Developer Portfolio",
  description: "Professional Full Stack .NET Developer Portfolio"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased">
        <ScrollProgress />
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}