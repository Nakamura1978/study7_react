import Link from "next/link";
import classes from 'src/conponents/Header/Header.module.css';

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