import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // optional weights
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
export const metadata: Metadata = {
  title: "Levin Thiel",
  description: "Hi, I’m Levin 👋 I design and code for the web — blending creativity with clean, functional code.",
  keywords: [
    "Levin Thiel",
    "UX/UI",
    "Design",
    "Frontend Developer",
    "Web Developer",
    "React",
    "Next.js",
    "JavaScript",
  ],
  authors: [{ name: "Levin Thiel", url: "https://levinthiel.vercel.app" }],
  category: "design and code",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Levin Thiel",
    description:
      "Hi, I’m Levin 👋 I design and code for the web — blending creativity with clean, functional code.",
    url: "https://levinthiel.vercel.app",
    siteName: "Levin Thiel",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Levin Thiel – UX / UI & code",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
