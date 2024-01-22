import Image from "next/image";
import { Inter } from "next/font/google";
import Menu from "@/compoents/Menu";
import Head from "next/head";
import ToolBox from "@/compoents/Toolbar";
import Board from "@/compoents/Borad";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {" "}
      <Head>
        <title>ArtHub</title>
      </Head>
      <Menu />
      <ToolBox/>
      <Board/>
    </>
  );
}
