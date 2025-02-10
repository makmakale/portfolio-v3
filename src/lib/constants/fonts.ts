import localFont from "next/font/local";

const delaGothicOne = localFont({
  src: "../../assets/fonts/DelaGothicOne.ttf",
  variable: "--font-dela",
  weight: "400",
});

const poppins = localFont({
  variable: "--font-sans",
  src: [
    {
      path: "../../assets/fonts/Poppins-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Poppins-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Poppins-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Poppins-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Poppins-Thin.ttf",
      weight: "100",
      style: "normal",
    },
  ],
});

const teko = localFont({
  src: "../../assets/fonts/Teko.ttf",
  variable: "--font-teko",
  weight: "100 900",
});

export { poppins, delaGothicOne, teko };
