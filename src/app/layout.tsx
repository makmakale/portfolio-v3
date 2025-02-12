import "@/assets/styles/globals.css";
import { Dela_Gothic_One, Poppins, Teko } from "next/font/google";
import bgImg from "@/assets/images/portfolio/bg-black.jpg";
import Loader from "@/components/portfolio/loader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans",
});
const dela = Dela_Gothic_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dela",
});
const teko = Teko({
  subsets: ["latin"],
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
            <div
              id="landing"
              className="bg-no-repeat bg-left-top bg-contain"
              style={{
                backgroundImage: `url(${bgImg.src})`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
        <Loader />
      </body>
    </html>
  );
}
