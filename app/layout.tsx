import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import BottomNav from "./BottomNav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
