import Footer from "@/components/LuxuryPage/Footer";
import NavBar from "@/components/LuxuryPage/NavBar";
import { cn } from "@/utils/cn";
import type { Metadata } from "next";
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

const LuxuryLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      suppressHydrationWarning
      id="luxury-layout"
      lang="en"
      className={cn(raleway.variable, gambarino.variable)}
    >
      <body className="bg-neutral-900 text-white">
        <main className="pt-14 md:pt-16">
          <NavBar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default LuxuryLayout;
