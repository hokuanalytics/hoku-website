import type { Metadata, Viewport } from "next";
import { Roboto, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

// Using Inter as a modern alternative to Futura PT
const inter = Inter({
  variable: "--font-futura",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#04223F",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hokuenergy.com"),
  title: {
    default: "Hoku Energy | Tomorrow's Power, Today's Reality",
    template: "%s | Hoku Energy",
  },
  description:
    "Hoku is a trailblazer in the energy sector, with an unwavering commitment to leverage clean technologies and fuels for carbon free energy and infrastructure solutions. Leading the green hydrogen revolution.",
  keywords: [
    "green hydrogen",
    "renewable energy",
    "carbon free energy",
    "sustainable energy",
    "clean fuel",
    "hydrogen technology",
    "24/7 CFE",
    "green ammonia",
    "energy transition",
    "net zero",
    "decarbonization",
    "clean energy",
    "hydrogen production",
  ],
  authors: [{ name: "Hoku Energy", url: "https://hokuenergy.com" }],
  creator: "Hoku Energy",
  publisher: "Hoku Energy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hokuenergy.com",
    siteName: "Hoku Energy",
    title: "Hoku Energy | Tomorrow's Power, Today's Reality",
    description:
      "Leading the transition to a sustainable energy future through green hydrogen and clean fuel solutions. Pioneering 24/7 carbon-free energy.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hoku Energy - Green Hydrogen Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoku Energy | Tomorrow's Power, Today's Reality",
    description:
      "Leading the transition to a sustainable energy future through green hydrogen and clean fuel solutions.",
    images: ["/og-image.jpg"],
    creator: "@hokuenergy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://hokuenergy.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${roboto.variable} ${inter.variable} antialiased`}>
        <SmoothScroll>
          <ScrollProgress />
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
