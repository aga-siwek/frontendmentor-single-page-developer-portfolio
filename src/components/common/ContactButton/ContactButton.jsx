import styles from "./ContactButton.module.css"

function ContactButton() {
    return (
        <div className={styles.about_me__contact}>
            <a className={styles.about_me__text}>CONTACT ME</a>
            <hr className={styles.about_me__contact__line}></hr>
        </div>
    )
}

export default ContactButton;


