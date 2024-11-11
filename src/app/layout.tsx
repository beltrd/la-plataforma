import Head from "next/head";
// import localFont from "next/font/local";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./globals.css";

import "../styles/globals.scss";

import { Metadata } from "./components/metadata";
import Footer from "./components/main-layout/components/footer";
import Header from "./components/main-layout/components/header";
import { CartProvider } from "../context/cart";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <Metadata />

        <link rel="icon" href={process.env["PUBLIC_URL"] + "/favicon.ico"} />
      </Head>
      <CartProvider>
        <body
          // ${geistSans.variable} ${geistMono.variable}
          className={` antialiased`}
        >
          <Header />

          <main role="main" aria-label="main content">
            {children}
          </main>
          <Footer />
        </body>
      </CartProvider>
    </html>
  );
}
