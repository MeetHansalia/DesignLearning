import { Josefin_Sans } from "next/font/google";
import "./globals.css";


const inter = Josefin_Sans({ subsets: ["latin"], weight:["100","200","300","400","500","600","700"],
display:"swap" });

export const metadata = {
  title: "DesignApp",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
