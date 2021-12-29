import styles from './Header.module.css'
import Link from 'next/link'

export default function Header() {
    return (
        <header className={styles.headerLink}>
            <Link href="/">
                <a>Index</a>
            </Link>
            <Link href="/about">
                <a>about</a>
            </Link>
        </header>
    )
}
