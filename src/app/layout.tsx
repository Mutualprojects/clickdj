import type { Metadata } from "next";
import { League_Spartan, Roboto_Slab, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingSocials from "@/components/FloatingSocials";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Best Digital Marketing Agency in Hyderabad | ClickDiji",
  description: "ClickDiji is a results-driven digital marketing agency in Hyderabad offering SEO, web development, Google Ads & social media marketing. Get a free strategy call.",
};

import CustomCursor from "@/components/CustomCursor";
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${leagueSpartan.variable} ${robotoSlab.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <CustomCursor />
          <Header />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
          <ScrollToTop />
          <FloatingSocials />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
