import "@/assets/styles/globals.css";
import * as fonts from "@/lib/constants/fonts";

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
            <div id="landing">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
