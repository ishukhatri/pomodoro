import { Roboto_Slab, Kumbh_Sans, Space_Mono } from "next/font/google";

export const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-slab",
  weight: ["400", "700"],
});

export const kumbh_sans = Kumbh_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-kumbh-sans",
  weight: ["400", "700"],
});

export const space_mono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-mono",
  weight: ["400", "700"],
});
