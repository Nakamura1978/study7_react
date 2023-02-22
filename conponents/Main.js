import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import  {Links } from '../conponents/Links'
import  { Headline }  from '../conponents/Headline'

export function Main() {
  return (
    <main className={styles.main}>
        <Headline page="index">
          <code className={styles.code}>pages/index.js</code>
        </Headline>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
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
