// app/layout.js
import { Inter, DM_Serif_Display } from "next/font/google"; // 1. Import DM_Serif_Display
import { Great_Vibes } from "next/font/google";
import "./globals.css";
import { BackgroundBeams } from "./components/Background";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-great-vibes',
});

// 2. Configure the new font
const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-serif',
});


export default function RootLayout({ children }) {
  return (
    // 3. Add the new font variable to the html tag
    <html lang="en" className={`${greatVibes.variable} ${dmSerif.variable}`}>
      <body className={inter.className}>
        <div className="fixed left-0 top-0 -z-10 h-full w-full">
          <BackgroundBeams />
        </div>
        <Navbar />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}