import "@/assets/styles/globals.css";
import { Dela_Gothic_One, Poppins, Teko } from "next/font/google";
import Loader from "@/components/portfolio/loader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});
const dela = Dela_Gothic_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dela",
});
const teko = Teko({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-teko",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${dela.variable} ${teko.variable}`}>
        <div id="layout">
          <div id="frame">
            <div id="landing">{children}</div>
          </div>
        </div>
        <Loader />
      </body>
    </html>
  );
}
