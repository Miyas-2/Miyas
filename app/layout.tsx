import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moh Ilyas — Full-Stack Engineer & Systems Infrastructure Specialist",
  description:
    "World-Class Computing Medalist (2nd Prize Global — Huawei ICT Competition). Full-Stack Engineer specializing in Laravel, Next.js, and enterprise systems infrastructure.",
  keywords: [
    "Moh Ilyas",
    "Full-Stack Developer",
    "Systems Engineer",
    "Huawei ICT Competition",
    "Portfolio",
    "Laravel",
    "Next.js",
    "ITENAS Bandung",
  ],
  authors: [{ name: "Moh Ilyas" }],
  openGraph: {
    title:
      "Moh Ilyas — Full-Stack Engineer & Systems Infrastructure Specialist",
    description:
      "World-Class Computing Medalist & Full-Stack Engineer bridging software scalability with enterprise systems infrastructure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen" suppressHydrationWarning>{children}</body>
    </html>
  );
}
