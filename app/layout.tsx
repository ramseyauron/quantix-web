import type { Metadata } from "next";
import { Orbitron, Exo_2 } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-orbitron",
  display: "swap",
});

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-exo2",
  display: "swap",
});
//set favicon to public/favicon.ico
export const metadata: Metadata = {
  title: "Quantix Protocol — The Quantum-Resistant Blockchain",
  description:
    "Post-quantum cryptography. Mathematically enforced privacy. Built for the AI era.",
  openGraph: {
    title: "Quantix Protocol",
    description:
      "Post-quantum cryptography. Mathematically enforced privacy. Built for the AI era.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
      <body>{children}</body>
    </html>
  );
}
