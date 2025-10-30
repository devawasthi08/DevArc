import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DevArc - We Build What Brands Dream",
  description: "We make your brand look, feel, and grow better — online and everywhere. From logo to website to marketing — DevArc helps you build a strong digital identity that connects with people and brings real results.",
  keywords: "brand design, web development, digital marketing, logo design, social media marketing, business automation",
  authors: [{ name: "DevArc Team" }],
  openGraph: {
    title: "DevArc - We Build What Brands Dream",
    description: "We make your brand look, feel, and grow better — online and everywhere.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
