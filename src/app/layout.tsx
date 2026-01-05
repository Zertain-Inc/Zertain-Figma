import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zertain - Hyper-Automation Solutions",
  description: "Empowering enterprises to achieve more through Hyper-Automation. We leverage advanced technologies like iPaaS, ETL/ELT, RPA, workflows, low-code tools, and machine learning.",
  keywords: ["hyper-automation", "iPaaS", "RPA", "low-code", "digital transformation", "workflow automation", "enterprise automation", "cloud services"],
  authors: [{ name: "Zertain" }],
  creator: "Zertain",
  publisher: "Zertain",
  metadataBase: new URL("https://zertain.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zertain.com",
    siteName: "Zertain",
    title: "Zertain - Hyper-Automation Solutions",
    description: "Empowering enterprises to achieve more through Hyper-Automation. We leverage advanced technologies like iPaaS, ETL/ELT, RPA, workflows, low-code tools, and machine learning.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zertain - Hyper-Automation Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zertain - Hyper-Automation Solutions",
    description: "Empowering enterprises to achieve more through Hyper-Automation.",
    images: ["/og-image.png"],
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
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
