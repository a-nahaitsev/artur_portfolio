import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artur",
  description: "Artur's Portfolio",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return children;
};

export default RootLayout;
