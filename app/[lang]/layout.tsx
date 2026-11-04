import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import LiveBackground from "../ui/LiveBackground";
import { themeInitScript } from "../ui/ThemeToggle";
import { getCv, isLocale, locales } from "../lib/i18n";

const sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

// Pre-render /en and /pt; any other segment is a 404
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  if (!isLocale(params.lang)) return {};
  const { meta } = getCv(params.lang).labels;
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
  };
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  if (!isLocale(params.lang)) notFound();

  return (
    <html
      lang={params.lang === "pt" ? "pt-BR" : "en"}
      data-theme="dark"
      className={`${sans.variable} ${mono.variable}`}
      // The inline script may switch data-theme before React hydrates
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-gray-900 font-sans antialiased">
        <LiveBackground />
        {children}
      </body>
    </html>
  );
}
