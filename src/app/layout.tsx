import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "@/app/globals.css";
import { Navigation } from "@/components/navigation/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "") || undefined;
const portfolioImagePath = "/images/data-center-automation-hero.png";

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: "Martin Chetty | Software Automation Trainee",
    template: "%s | Martin Chetty",
  },
  description:
    "Portfolio of Martin Chetty, a Software Automation Trainee at Cisco focused on Python, network automation, cloud, and generative AI.",
  authors: [{ name: "Martin Chetty" }],
  openGraph: {
    type: "website",
    title: "Martin Chetty | Software Automation Trainee",
    description:
      "Portfolio of Martin Chetty, a Software Automation Trainee at Cisco focused on Python, network automation, cloud, and generative AI.",
    siteName: "Martin Chetty Portfolio",
    locale: "en_IN",
    ...(siteUrl
      ? {
          url: siteUrl,
          images: [
            {
              url: `${siteUrl}${portfolioImagePath}`,
              width: 1672,
              height: 941,
              alt: "Data center automation infrastructure",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary",
    title: "Martin Chetty | Software Automation Trainee",
    description:
      "Portfolio of Martin Chetty, a Software Automation Trainee at Cisco focused on Python, network automation, cloud, and generative AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
  ...(siteUrl ? { alternates: { canonical: siteUrl } } : {}),
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#101827" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
