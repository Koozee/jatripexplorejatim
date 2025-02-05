import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/fragments/Header";
import Footer from "@/components/fragments/Footer";
import ArrowBack from "@/components/UI/ArrowBack";
import { Provider } from "./provider";
import Chatbot from "@/components/fragments/Chatbot";

const disableHeaderFooter = ["/login", "/register"];

export const metadata: Metadata = {
  title: "Jatrip Explore Jatim",
  description: "Temukan berbagai destinasi wisata di Jawa Timur untuk liburan Anda.",
};

export default function RootLayout({
  children,
  pathname,
}: {
  children: React.ReactNode;
  pathname: string;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <Provider>
        <head>
          <link rel="shortcut icon" href="/img/thumbnailweb.svg" type="image/x-icon" />
        </head>
        <body>
          {!disableHeaderFooter.includes(pathname) ? <Header /> : <ArrowBack />}
          {children}
          <Chatbot/>
          {!disableHeaderFooter.includes(pathname) && <Footer />}
        </body>
      </Provider>
    </html>
  );
}
