import Link from "next/Link";
import classes from './Header.module.css';

export function Header(){
    return(
        <header className={classes.header}>
            <Link href="/" className={classes.division}>
                Index
            </Link>
            <Link href="/about">
                <div className={classes.division}>About</div>
            </Link>
        </header>
    );
}