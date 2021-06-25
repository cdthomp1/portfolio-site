import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  console.log(process.env.name)
  return (
    <div >
      <Head>
        <title>Cameron Thompson</title>
        <meta name="description" content="Cameron Thompson's portfolio site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>{process.env.name}</p>
    </div>
  )
}
