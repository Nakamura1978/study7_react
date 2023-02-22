import Image from 'next/image'
import classes from './Headline.module.css'

export function Headline(props) {
    return (
        <div>
            <h1 className={classes.title}>{props.page} Page</h1>

            <div className={classes.description}>
                <p>
                    Get started by editing&nbsp;
                    {props.children}
                </p>
                <div>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        By{' '}
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            className={classes.vercelLogo}
                            width={100}
                            height={24}
                            priority
                        />
                    </a>
                </div>
            </div>
        </div>    
    )
}
