import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const myLocalFont = localFont({
  src: "../public/fonts/iranyekanwebbold.woff2",
  display: "swap",
});

const roboto = localFont({
  src: [
    {
      path: "../public/fonts/iranyekanwebbold.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/iranyekanwebextrabold.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/iranyekanwebmedium.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/iranyekanwebregular.woff2",
      weight: "700",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${myLocalFont.className} h-full w-full bg-white`}>
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  );
}
