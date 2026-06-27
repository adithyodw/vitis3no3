import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Newsreader } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ServiceWorkerRegister } from "@/components/pwa/service-worker-register";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://vitis3no3.vercel.app",
  ),
  title: {
    default: "Orchard Park · Guest Check-in",
    template: "%s · Orchard Park Batam",
  },
  description:
    "Your premium digital concierge for Orchard Park Vitis 3 No.3 — check-in, Wi-Fi, smart home guide, and everything you need for your stay.",
  applicationName: "Orchard Park Concierge",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Orchard Park",
  },
  formatDetection: {
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_SG",
    siteName: "Orchard Park Concierge",
    title: "Orchard Park · Guest Check-in",
    description: "Your premium digital concierge for Orchard Park Batam.",
    images: [{ url: "/assets/hero.jpg", width: 1200, height: 800, alt: "Orchard Park villa" }],
  },
  robots: {
    index: false,
    follow: false,
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F3EFE8" },
    { media: "(prefers-color-scheme: dark)", color: "#100E0B" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${hanken.variable} ${newsreader.variable} antialiased`}>
        <ThemeProvider>
          {children}
          <ServiceWorkerRegister />
        </ThemeProvider>
      </body>
    </html>
  );
}
