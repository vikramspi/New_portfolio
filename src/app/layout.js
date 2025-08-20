// app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "./components/Background";
import Navbar from "./components/Navbar"; // This stays visible all time

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Background component fixed behind everything */}
        <div className="fixed left-0 top-0 -z-10 h-full w-full">
          {/* <Background />*/}
        </div>

        {/* Navbar stays fixed at the top always */}
        <Navbar />

        {/* Main content with a relative z-index to stay on top */}
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
