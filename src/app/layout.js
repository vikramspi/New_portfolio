// app/layout.js
import { Inter } from "next/font/google";
// --- NEW: Import the custom font ---
import { Great_Vibes } from "next/font/google";
import "./globals.css";
import { BackgroundBeams } from "./components/Background";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

// --- NEW: Configure the font ---
const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-great-vibes', // This is a CSS variable we can use
});


export default function RootLayout({ children }) {
  return (
    // --- UPDATED: Add the font variable to the html tag ---
    <html lang="en" className={`${greatVibes.variable}`}>
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