import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Head from "next/head";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vidisha Agarwal",
  description:
    "NYC-based, Brand  Strategist and Designer who seeks to infuse purpose into every aspect of designs.",
  referrer: "origin-when-cross-origin",
  keywords: ["design", "branding", "brand strategist"],
  authors: [{ name: "Vidisha Agarwal" }],
  creator: "Vidisha Agarwal",
  publisher: "Vidisha Agarwal",
  category: "portfolio",
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Vidisha Agarwal",
    description:
      "NYC-based, Brand  Strategist and Designer who seeks to infuse purpose into every aspect of designs.",
    url: "https://vidishaagarwal.com",
    siteName: "Vidisha Agarwal",
    images: [
      {
        url: "https://vidishaagarwal.com/images/og.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
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
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        <main className="flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
