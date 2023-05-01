import styles from './header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
                <img className={styles.headerAvatar} src="./images/avatar.png" alt="avatar" />
                <h1 className={styles.headerTitle}>poyo</h1>
                <hr className="divider--light" />
                <p className={styles.headerSlogan}>Slogan</p>
        </header>
    )
}