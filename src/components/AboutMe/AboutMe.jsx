import styles from "./AboutMe.module.css";
import ContactButton from "../common/ContactButton/ContactButton.jsx";

function AboutMe() {
    return (
        <div className={styles.about_me} role="contentinfo" aria-labelledby="about_me">
            <div className={styles.about_me__info}>
                <div className={styles.about_me__header}>
                    <h1 className={styles.about_me__header__text}>Nice to meet you! I’m <span
                        className={styles.about_me__header__text__name}>Adam Keyes</span>.</h1>
                </div>
                <div className={styles.about_me__info__container}>
                    <p className={styles.about_me__info__text}>Based in the UK, I’m a front-end developer
                        passionate about building accessible web apps that users love.</p>
                </div>
            </div>
            <ContactButton/>
        </div>
    )
}

export default AboutMe;