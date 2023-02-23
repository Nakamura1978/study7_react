import Image from 'next/image'
import classes from 'src/conponents/Main/Main.module.css'
import  {Links } from 'src/conponents/Links'
import  { Headline }  from 'src/conponents/Headline'

export function Main(props) {
  return (
    <main className={classes.main}>
        <Headline page={props.page}>
          <code className={classes.code}>pages/{props.page}.js</code>
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
