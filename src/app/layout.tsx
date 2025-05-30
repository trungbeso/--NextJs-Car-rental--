import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LuxeDrive - Premium Car Rental Service",
  description: "Experience luxury car rentals with LuxeDrive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}