import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vidisha Agarwal",
  description: "Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <script
        defer
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
      ></script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
