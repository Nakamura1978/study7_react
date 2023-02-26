import { Header } from 'src/conponents/Header'
import Head from 'next/head'
import { Main } from 'src/conponents/Main'

export default function About(props) {
  const {doubleCount, isShow, handleClick, handleDisplay, text, array, handleCheck, handleAdd} = props;
  
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      {isShow? <h1>{doubleCount}</h1> : null}
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
