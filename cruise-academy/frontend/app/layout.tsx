import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Shrivastava Group of Institute - Shaping Futures Beyond the Horizon",
  description: "Education, global opportunities, and maritime careers. Academy run by Rohit Shrivastava focusing on school education, competitive exams, career guidance, study abroad, and seafarer training.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="antialiased"
    >
      <body className="flex flex-col">
        <Navbar />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
