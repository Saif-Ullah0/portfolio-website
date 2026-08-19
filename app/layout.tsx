import type { Metadata } from "next";
import { Space_Grotesk, Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import BackToTop from "@/components/BackToTop";
import { Analytics } from "@vercel/analytics/react";
import ScrollProgress from "@/components/ScrollProgress";
import ThemeToggle from "@/components/ThemeToggle";
import CursorTrail from "@/components/CursorTrail";



const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Saif Ullah Arshad — ML Engineer",
  description:
    "ML Engineering Intern at FlyRank AI building content decay prediction models on 79M rows of real search data. CS student at ITU Lahore graduating June 2027.",
  keywords: [
    "Saif Ullah Arshad",
    "machine learning",
    "ML engineer",
    "Machine Learning Engineer",
    "FlyRank AI",
    "ITU Lahore",
    "Python",
    "PyTorch",
    "content decay",
    "XGBoost",
    "Full Stack Developer",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Saif Ullah Arshad" }],
  creator: "Saif Ullah Arshad",
  metadataBase: new URL("https://saifullah-arshad-portfolio.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Saif Ullah Arshad — ML Engineer",
    description:
      "ML Engineering Intern at FlyRank AI. Building content decay prediction models on 79M rows of real production search data. CS student at ITU Lahore.",
    url: "https://saifullah-arshad-portfolio.vercel.app",
    siteName: "Saif Ullah Arshad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saif Ullah Arshad — ML Engineer",
    description:
      "Building ML systems on real production data. ML Engineering Intern at FlyRank AI.",
    creator: "@saifullaharshad",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${firaCode.variable}`}
      >
        <CustomCursor />
        <LoadingScreen />
        <ScrollProgress />
        <ThemeToggle />
        <CursorTrail />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}