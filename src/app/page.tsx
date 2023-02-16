import Image from "next/image";
import { Roboto } from "@next/font/google";
import styles from "./page.module.css";
import Nav from "@/components/Nav";
import Intro from "@/components/Intro";

const inter = Roboto({
  weight: ["700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function Home() {
  return <Intro />;
}
