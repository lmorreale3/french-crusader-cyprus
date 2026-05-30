import type { Metadata } from "next";
import { Crimson_Pro } from "next/font/google";
import "./globals.css";

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "French Texts from Crusader Cyprus",
  description:
    "Explore medieval French legal manuscripts with high-resolution facsimiles, scholarly transcriptions, and modern English translations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${crimsonPro.variable} bg-background`}>
      <body className="min-h-screen flex flex-col antialiased font-serif">
        {children}
      </body>
    </html>
  );
}
