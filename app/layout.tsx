import type { Metadata } from "next";
import { Manrope, Onest } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600"],
});

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  weight: ["700", "900"],
});

export const metadata: Metadata = {
  title: "NotYourAverage | Elite Website Development Studio",
  description: "NotYourAverage is an elite digital product studio. We build high-performance, conversion-optimized websites for brands ready to dominate their market.",
  keywords: "web design, next.js agency, high ticket sales, conversion rate optimization, 3d web design, branding",
  metadataBase: new URL('https://notyouraverage.agency'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.28/build/spline-viewer.js"></script>
      </head>
      <body className={`${manrope.variable} ${onest.variable} font-sans bg-background text-text antialiased selection:bg-primary/30`}>
        {children}
      </body>
    </html>
  );
}