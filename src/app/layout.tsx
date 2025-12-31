import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Story",
  description: "A tale waiting to be told",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
