
import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Multi Purpose Power Sainik School | Quality Education",
    template: "%s | Multi Purpose Power Sainik School",
  },

  description:
    "Explore Multi Purpose Power Sainik School, offering educational opportunities from LKG to Class 8. Discover our academics, activities, admissions and school life.",

  applicationName: "Multi Purpose Power Sainik School",

  keywords: [
    "Multi Purpose Power Sainik School",
    "School",
    "LKG to Class 8",
    "School Admissions",
    "School Academics",
    "School Activities",
  ],

  authors: [
    {
      name: "Multi Purpose Power Sainik School",
    },
  ],

  openGraph: {
    type: "website",
    title: "Multi Purpose Power Sainik School",
    description:
      "Discover academics, activities, admissions and learning opportunities at Multi Purpose Power Sainik School, from LKG to Class 8.",
    siteName: "Multi Purpose Power Sainik School",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Multi Purpose Power Sainik School",
    description:
      "Explore our school, academics, activities and admissions from LKG to Class 8.",
  },

  robots: {
    index: true,
    follow: true,
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
