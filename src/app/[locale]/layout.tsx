import "../globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { Header } from "@/components/layout/header";
import { ThemeProvider } from "@/components/ui/theme";

const inter = Inter({ subsets: ["latin"] });

const siteURL = process.env.SITE_URL as string;

export const metadata: Metadata = {
  metadataBase: new URL(siteURL),
  title: {
    template: "%s | PerfReviews",
    default: "PerfReviews",
  },
  alternates: {
    canonical: "./",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            <Header />

            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
