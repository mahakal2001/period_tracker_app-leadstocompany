import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Lunari Frontend Batch 1", description: "Working frontend flow for screens 1-12" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
