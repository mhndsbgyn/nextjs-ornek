import Link from "next/link";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>Hakkında</title>
      </Head>

      <div >
        <Link href="/">Geri dön</Link>
      </div>

      <style jsx>{`
	     div{
			 height:950px
		 }
        
      `}</style>
    </>
  );
}
