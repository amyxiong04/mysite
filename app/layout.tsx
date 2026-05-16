import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { CursorGlow } from "@/components/CursorGlow";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Amy Xiong | Software Engineering Portfolio",
  description:
    "Personal portfolio for Amy Xiong, a UBC Computer Science student building full-stack products, backend systems, and practical tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <CursorGlow />
          <div className="relative z-[2]">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
