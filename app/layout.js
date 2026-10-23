import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://raivatedu.example"),
  title: {
    default: "Raivatedu — Learn skills that move you forward",
    template: "%s | Raivatedu"
  },
  description: "Build practical skills with expert-led courses, supportive mentors, and learning paths designed around your goals.",
  openGraph: {
    title: "Raivatedu — Learn skills that move you forward",
    description: "Discover practical courses and expert mentors to help you grow.",
    type: "website",
    siteName: "Raivatedu"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
