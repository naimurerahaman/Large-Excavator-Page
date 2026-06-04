import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CPL | Lifecycle Project Partner",
  description:
    "Constructive Partners Limited combines materials, machinery, and expertise for industrial developers and government projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
