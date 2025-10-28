import Head from "next/head"
import { Home } from "@/components/views/landingPages"

export default function HomePage() {
  return (
    <>
      <Head>
        <title>FIXHERO</title>
        <meta name="description" content="Fixhero info" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  )
}