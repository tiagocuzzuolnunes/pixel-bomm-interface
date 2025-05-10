import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import "./globals.css";

const geist = Noto_Serif({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pixel Bomm Interface",
  description: "Essa página foi criada como um teste para a empresa Pixel Boom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialised`}>{children}</body>
    </html>
  );
}
