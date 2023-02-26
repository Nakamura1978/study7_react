import Image from 'next/image'
import classes from 'src/conponents/Main/Main.module.css'
import  {Links } from 'src/conponents/Links'
import  { Headline }  from 'src/conponents/Headline'
import { useCallback, useState } from 'react';

const ITEMS = [
  {
    href : "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title : "Docs →",
    discription : "Find in-depth information about Next.js features and&nbsp;API."
  },
  {
    href : "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title : "Learn →",
    discription : "Learn about Next.js in an interactive course with&nbsp;quizzes!"
  },
  {
    href : "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-appp",
    title : "Templates →",
    discription : "Discover and deploy boilerplate example Next.js&nbsp;projects."
  },
  {
    href : "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title : "Deploy →",
    discription : "Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel."
  }
];

export const Main = (props) => {
  const [items, setItems] = useState(ITEMS);

  const handleReduce = useCallback(() => {
    setItems(prevItems => {
      return prevItems.slice(0, prevItems.length - 1);
    });
  }, []);
  
  return (
    <main className={classes.main}>
        <Headline page={props.page}>
          <code className={classes.code}>pages/{items.length}.js</code>
        </Headline>

        <div className={classes.center}>
          <Image
            className={classes.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={classes.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <Links items={items} handleReduce={handleReduce} />
      </main>
  )
}
