import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  IBM_Plex_Sans_Thai,
} from "next/font/google";
import { LanguageProvider } from "@/components/language/language-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { createPageMetadata, getSiteUrl, siteConfig } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  variable: "--font-ibm-plex-sans-thai",
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600", "700"],
});

const rootMetadata = createPageMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: "/",
});

export const metadata: Metadata = {
  ...rootMetadata,
  metadataBase: new URL(getSiteUrl()),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  keywords: [
    "code review",
    "good code",
    "bad code",
    "software engineering",
    "frontend",
    "backend",
    "web development",
  ],
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${ibmPlexSansThai.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#070b12] text-zinc-100">
        <LanguageProvider>
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
