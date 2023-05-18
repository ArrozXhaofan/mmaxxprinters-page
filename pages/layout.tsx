import { Foo, Nav } from "@/components";
import { Rutas } from "@/models";
import React from "react";
import Head from "next/head";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <Head>
      <title>MMAXX Printers</title>
      <link rel="icon" href="maxIcon.png" />
    </Head>

    <div className="relative font-monse">
        
        <Nav pathNames={[Rutas.HOME,Rutas.CATALOGO,Rutas.CONTACTO]} />

      <div className="pt-14 flex justify-center items-center">

        <div className="max-w-6xl min-h-screen z-40 w-full">{children}</div>

      </div>

        <Foo/>

    </div>
    </>
    
  );
}
