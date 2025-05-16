import styles from "./Header.module.css";
import Logo from "../common/Logo/Logo.jsx";
import SocialMedia from "../common/SocialMedia/SocialMedia.jsx";

function Header() {
    return (
        <header className={styles.header}>
            <Logo/>
            <SocialMedia/>
        </header>
    )
}

export default Header;