import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './layout'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <>
      <Head>
        <title>MMAXX Printers</title>
        <link rel="icon" href="maxIcon.png" />
      </Head>
     <Layout><Component {...pageProps} /></Layout> 
    </>
   
  )
}
