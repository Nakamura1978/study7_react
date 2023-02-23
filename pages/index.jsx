import { Header } from 'src/conponents/Header'
import Head from 'next/head'
import { Main } from 'src/conponents/Main'
import { useCallback } from 'react';

export default function Home() {
  const foo = 1;
  const bandleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);
  
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <a href="/about" onClick={bandleClick} >
        ボタン
      </a>
      <Main page="index" />
    </>
  )
}
