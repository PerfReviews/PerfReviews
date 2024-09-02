import "../globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { Header } from "@/components/layout/header";
import { ThemeProvider } from "@/components/ui/theme";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

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
      <body className={`${montserrat.variable} font-sans`}>
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
          <SpeedInsights />
        </NextIntlClientProvider>
        <Script
          id="unregister-sw-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            navigator.serviceWorker.getRegistrations().then(registrations => {
              for (const registration of registrations) {
                registration.unregister();
              }
            });
          `,
          }}
        />
      </body>

      <GoogleAnalytics gaId="G-S8X5QGZ58F" />
    </html>
  );
}
