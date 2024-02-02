import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Layout
      title={'Inicio'}
      description= {'Página web Farm Tec SRL'}
    >
      
    </Layout>
    </>
  )
}