import NavbarTwo from "@/components/NavbarTwo";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CHORE BOARD",
  description: "by Ethan Long",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen bg-gradient-to-t from-yellow-500 to-pink-500">
        <div className="max-w-5xl mx-auto p-4">
          
          <NavbarTwo />
          <div className="mt-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
