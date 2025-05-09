import styles from "./Footer.module.css";
import Logo from "../common/Logo/Logo.jsx";
import SocialMedia from "../common/SocialMedia/SocialMedia.jsx";

function Footer() {
    return (
            <footer className={styles.footer}>
                <Logo />
                <SocialMedia />
            </footer>
    )
}

export default Footer;