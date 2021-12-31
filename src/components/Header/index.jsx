import styles from './Header.module.css'
import Link from 'next/link'

const NAV_ITEMS = [
    { href: "/", label: "Index" },
    { href: "/about", label: "About"},
]

export default function Header() {
    return (
        <header className={styles.headerLink}>
            {NAV_ITEMS.map((item) => {
                return (
                    <Link key={item.href} href={item.href}>
                        <a className={styles.anchor}>{item.label}</a>
                    </Link>
                )
            })}
        </header>
    )
}
