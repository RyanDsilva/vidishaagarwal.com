import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vidisha Agarwal",
  description:
    "NYC-based, Brand  Strategist and Designer who seeks to infuse purpose into every aspect of designs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script
          defer
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        ></script>
      </Head>
      <body
        className={`${inter.className} mx-12 my-8 md:mx-20 md:my-12 lg:mx-40 lg:my-12`}
      >
        <Navbar />
        <main className="flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
