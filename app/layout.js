import NavbarTwo from "@/components/NavbarTwo";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-emerald-300">
        <div className="max-w-5xl mx-auto p-4">
          
          <NavbarTwo />
          <div className="mt-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
