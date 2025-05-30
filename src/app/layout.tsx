import type { Metadata } from "next";
import { Noto_Serif, Inter } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/app/components/AppSidebar";
import Header from "./components/Header";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="pt-BR">
      <body className={`${notoSerif.variable} ${inter.variable} antialised`}>
        <SidebarProvider>
          <AppSidebar />
          <div className="flex flex-col flex-1">
            <Header />
            <main>{children}</main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
