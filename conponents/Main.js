import Image from 'next/image'
import classes from './Main.module.css'
import  {Links } from '../conponents/Links'
import  { Headline }  from '../conponents/Headline'

export function Main() {
  return (
    <main className={classes.main}>
        <Headline page="index">
          <code className={classes.code}>pages/index.js</code>
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

        <Links />
      </main>
  )
}
