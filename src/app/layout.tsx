import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nikhil Chavhan — Software Developer | Python, Django & React",
  description:
    "Portfolio of Nikhil Chavhan, a Software Developer building production-ready web applications, scalable APIs and AI-powered products using Python, Django, React and PostgreSQL.",
  keywords: [
    "Nikhil Chavhan",
    "Software Developer",
    "Full Stack Developer",
    "Python Developer",
    "Django Developer",
    "React Developer",
    "PostgreSQL",
    "REST APIs",
    "AI Development",
    "RAG",
    "India",
  ],
  authors: [{ name: "Nikhil Chavhan" }],
  creator: "Nikhil Chavhan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nikhilchavhan.dev",
    siteName: "Nikhil Chavhan Portfolio",
    title: "Nikhil Chavhan — Software Developer | Python, Django & React",
    description:
      "Portfolio of Nikhil Chavhan, a Software Developer building production-ready web applications, scalable APIs and AI-powered products using Python, Django, React and PostgreSQL.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikhil Chavhan — Software Developer | Python, Django & React",
    description:
      "Portfolio of Nikhil Chavhan, a Software Developer building production-ready web applications, scalable APIs and AI-powered products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#070709",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#070709] text-[#f8fafc] font-sans antialiased overflow-x-hidden">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
