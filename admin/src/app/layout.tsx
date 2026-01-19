import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Girugi Admin Console",
  description: "Admin dashboard for Girugi - Korea life hub for foreigners",
};

/**
 * Root Layout for Girugi Admin Console
 * 
 * This provides the base HTML structure and font configuration.
 * The actual admin shell (sidebar, topbar) will be implemented in
 * the (dashboard) route group layout.
 * 
 * Route structure:
 * - /(auth)/* - Authentication routes (login)
 * - /(dashboard)/* - Protected dashboard routes
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
