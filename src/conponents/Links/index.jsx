import { Inter } from '@next/font/google'
import classes from 'src/conponents/Links/Links.module.css'

const inter = Inter({ subsets: ['latin'] })

export const Links = props => {
  
  return (
    <div className={classes.grid}>
    <button onClick={props.handleReduce}>減らす</button>
      {props.items.map((item) => {
        return(
          <a
            key={item.href}
            href={item.href}
            className={classes.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              {item.title}
            </h2>
            <p className={inter.className}>
              {item.discription}
            </p>
          </a>
        );
      })}
    </div>
  )
}
