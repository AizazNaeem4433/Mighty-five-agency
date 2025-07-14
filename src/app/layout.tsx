import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nevbar from "./components/Nevbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mighty Five | Digital Marketing Agency",
  description:
    "Top-rated digital marketing agency delivering custom web, social, and paid strategies to accelerate growth and revenue.",
  keywords: [
    "digital marketing",
    "marketing agency",
    "SEO",
    "web design",
    "paid media",
    "social media management",
    "Mighty Five",
  ],
  metadataBase: new URL("https://mighty-five-agency.vercel.app"),
  openGraph: {
    title: "Mighty Five | Digital Marketing Experts",
    description:
      "Grow your brand with data-driven strategies and bold creative execution.",
    url: "https://mighty-five-agency.vercel.app",
    siteName: "Mighty Five",
    type: "website",
    images: [
      {
        url: "/og-banner.jpg", // Put this image in your /public folder
        width: 1200,
        height: 630,
        alt: "Mighty Five Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mighty Five Agency",
    description: "Bold digital strategy. Real growth.",
    images: ["/og-banner.jpg"],
    creator: "@MightyFive", // Optional: your agency's Twitter handle
  },
  robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
}

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nevbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
