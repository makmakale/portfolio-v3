import "@/assets/styles/globals.css";
import * as fonts from "@/lib/constants/fonts";
import bgImg from "@/assets/images/portfolio/bg-black.jpg";

import Header from "@/components/portfolio/header";
import Navbar from "@/components/portfolio/navbar";
import Footer from "@/components/portfolio/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("RootLayout");
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fonts.poppins.variable} ${fonts.delaGothicOne.variable} ${fonts.teko.variable}`}
      >
        <div id="layout">
          <div id="frame">
            <div
              id="landing"
              className="bg-no-repeat bg-left-top bg-contain"
              style={{
                backgroundImage: `url(${bgImg.src})`,
              }}
            >
              <div className="fixed-section">
                <Header />
                <Navbar />
                <Footer />
              </div>

              {children}

              <audio id="media-player" loop className="hidden">
                <source src={"/music/bg-music.mp3"} type="audio/mp3" />
              </audio>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
