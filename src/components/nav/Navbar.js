import styles from './Navbar.module.css';

const Navbar = props => {
    return (
        <nav className={styles.nav}>
            <a href="https://google.com">Home</a>
        </nav>
    )
}

export default Navbar;