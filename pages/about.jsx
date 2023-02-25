import { Header } from 'src/conponents/Header'
import Head from 'next/head'
import { Main } from 'src/conponents/Main'
import { useCallback, useEffect, useState } from 'react';
import { useCounter } from '@/src/hooks/useCounter';
import { useInputArray } from '@/src/hooks/useInputArray';
import { useBgLiteBlue } from '@/src/hooks/useBgLiteBlue';

export default function About() {
  const {count, isShow, handleClick, handleDisplay} = useCounter();
  const {text, array, handleCheck, handleAdd} = useInputArray();  
  useBgLiteBlue();
  
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      {isShow? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow? "表示" : "非表示"}</button>
      <input type="text" value={text} onChange={handleCheck} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map(item => {
          return (<li key={item}>{item}</li>);
        })}
      </ul>
      <Main page="about" />
    </>
  )
}
