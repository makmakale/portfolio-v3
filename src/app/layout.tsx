import "@/assets/styles/globals.css";
import * as fonts from "@/lib/constants/fonts";
import bgImg from "@/assets/images/portfolio/bg-black.jpg";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
