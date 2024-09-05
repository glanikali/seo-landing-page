import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/Providers/ThemeProvider";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Website Monitoring",
  description:
    "Start monitoring in seconds your websites, APIs, cron jobs and more. Unlimited email, SMS, Slack notifications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <GoogleTagManager gtmId={process.env.GOOGLE_TAG_MANAGER_ID!} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header />
          <main className={cn(inter.className, "bg-background")}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
