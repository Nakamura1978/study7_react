import { Header } from 'src/conponents/Header'
import Head from 'next/head'
import { Main } from 'src/conponents/Main'
import { useCallback, useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    console.log("マウント");
    document.body.style.backgroundColor = "liteblue";
    return () => {
      console.log("アンマウント")
      document.body.style.backgroundColor = "";
    }
  }, []);
  
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Main page="index" />
    </>
  )
}
