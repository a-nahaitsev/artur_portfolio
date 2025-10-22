import Header from "@/components/Header";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Artur",
  description: "Artur's Portfolio",
};

const CommonLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html suppressHydrationWarning lang="en" id="common-layout">
      <body>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default CommonLayout;
