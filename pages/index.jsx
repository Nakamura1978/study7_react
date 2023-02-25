import { Header } from 'src/conponents/Header'
import Head from 'next/head'
import { Main } from 'src/conponents/Main'
import { useCallback, useEffect, useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(() => {
    if(count < 10){
      setCount(prevCount => prevCount + 1);
    }
  }, [count]);
  
  const handleCheck = useCallback((e) => {
      if(e.target.value.length > 5){
        alert("5文字以内にしてください。")
        return;
      }
      setText(e.target.value.trim());
  }, []);

  const handleDisplay = useCallback(() => {
    setIsShow(prevIsShow => !prevIsShow);
  }, []);

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
      {isShow? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow? "表示" : "非表示"}</button>
      <input type="text" value={text} onChange={handleCheck} />
      <Main page="index" />
    </>
  )
}
