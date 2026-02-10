import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Hind, JetBrains_Mono } from "next/font/google";

import { TooltipProvider } from "../components/ui/tooltip";
import { Toaster } from "../components/ui/sonner";
import { handbookMetadata, tokenCssVariables } from "../lib/brand-utils";
import "./globals.css";

const hind = Hind({
  subsets: ["latin"],
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
  openGraph: {
    title: handbookMetadata.title,
    description: handbookMetadata.description,
    url: "https://brand.vayasyaseva.com",
    siteName: handbookMetadata.title,
    type: "website",
  },
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
      <body className={`${hind.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <TooltipProvider delayDuration={120}>
          {children}
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}
