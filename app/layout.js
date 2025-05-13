import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "NewsAI - AI-Powered News Curation",
  description: "Personalized news curation powered by artificial intelligence",
  generator: "v0.dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
