import { Roboto, Roboto_Mono } from "@next/font/google";

export const roboto = Roboto({
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

export const robotoMono = Roboto_Mono({
  style: ["normal"],
  subsets: ["latin"],
});
