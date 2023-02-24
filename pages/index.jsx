import { Header } from 'src/conponents/Header'
import Head from 'next/head'
import { Main } from 'src/conponents/Main'
import { useEffect, useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count => count + 1);
    setCount(count => count + 1);
  }
  
  useEffect(() => {
    document.body.style.backgroundColor = "liteblue";
    return () => {
      document.body.style.backgroundColor = "";
    }
  }, []);
  
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>
      <Main page="index" />
    </>
  )
}
