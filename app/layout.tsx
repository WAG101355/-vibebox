import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VibeBox — Discover your vibe",
  description: "Ruh haline göre müzik, film, oyun ve yeni deneyimler keşfet.",
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="tr"><body>{children}</body></html>;
}