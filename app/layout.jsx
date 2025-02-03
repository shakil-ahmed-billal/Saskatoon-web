import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Saskatoon",
  description: "The Saskatoon Open Door Society (SODS) is dedicated to helping immigrants and refugees settle and integrate into the community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header>
          <nav>
            <Header></Header>
          </nav>
        </header>
        <main>
          <section>
            {children}
          </section>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
