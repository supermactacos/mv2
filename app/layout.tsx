import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const avantGardeBk = localFont({
  src: "../public/ITCAvantGardePro-Bk.otf",
  variable: "--font-avantgarde-bk",
});

const avantGardeBold = localFont({
  src: "../public/ITCAvantGardePro-Bold.otf",
  variable: "--font-avantgarde-bold",
});

export const metadata: Metadata = {
  title: "Sokorro",
  description: "Your Data Center Advisory and IT Infrastructure Partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${avantGardeBk.variable} ${avantGardeBold.variable}`}>
        {children}
      </body>
    </html>
  );
}
