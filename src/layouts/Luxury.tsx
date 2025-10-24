import Footer from "@/components/LuxuryPage/Footer";
import NavBar from "@/components/LuxuryPage/NavBar";
import { createClient } from "@/prismicio";
import { cn } from "@/utils/cn";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";

const gambarino = localFont({
  variable: "--font-gambarino",
  src: "../../public/fonts/Gambarino-Regular.woff2",
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Artur",
  description: "Artur's Portfolio",
};

const LuxuryLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <ViewTransitions>
      <html
        suppressHydrationWarning
        id="luxury-layout"
        lang="en"
        className={cn(raleway.variable, gambarino.variable)}
      >
        <body className="bg-neutral-900 text-white">
          <main className="pt-14 md:pt-16">
            <NavBar settings={settings} />
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
};

export default LuxuryLayout;
