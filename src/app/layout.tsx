import type { CSSProperties } from "react";
import type { Metadata } from "next";
import type { Viewport } from "next";
import { Anek_Devanagari, Hind, JetBrains_Mono } from "next/font/google";

import { TooltipProvider } from "../components/ui/tooltip";
import { Toaster } from "../components/ui/sonner";
import { handbookMetadata, tokenCssVariables } from "../lib/brand-utils";
import "./globals.css";

const anek = Anek_Devanagari({
  subsets: ["latin", "devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-anek",
  display: "swap",
});

const hind = Hind({
  subsets: ["latin", "devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hind",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: handbookMetadata.title,
  description: handbookMetadata.description,
  metadataBase: new URL("https://brand.vayasyaseva.com"),
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
    ],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    title: handbookMetadata.title,
    description: handbookMetadata.description,
    url: "https://brand.vayasyaseva.com",
    siteName: handbookMetadata.title,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={tokenCssVariables as CSSProperties}
      suppressHydrationWarning
    >
      <body className={`${anek.variable} ${hind.variable} ${jetbrainsMono.variable} antialiased`}>
        <TooltipProvider delayDuration={120}>
          {children}
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}
