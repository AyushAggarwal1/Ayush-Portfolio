import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from 'next/font/google';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  weight: ['400', '700', '900'],
});

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans-3',
  weight: ['300', '400', '600', '700'],
});

export const metadata: Metadata = {
  title: "Ayush - Product Portfolio",
  description: "A showcase of Ayush's journey and expertise in product management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${sourceSans3.variable}`}>
      <body
        className={`font-body bg-[hsl(var(--color-bg-main))] text-[hsl(var(--color-text-body))] antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
