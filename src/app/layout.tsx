import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FloStudios.ai — Creative Learning, Built at Flight Speed",
  description:
    "A creative-learning studio for the people building AI, robotics, and the space economy. Remote first. Open to the world. No frontiers. No limits.",
  openGraph: {
    title: "FloStudios.ai",
    description: "Creative Learning, Built at Flight Speed",
    siteName: "FloStudios.ai",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <body>{children}</body>
    </html>
  );
}
