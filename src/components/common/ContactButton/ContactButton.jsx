import styles from "./ContactButton.module.css"

function ContactButton() {
    return (
        <div className={styles.contact_button}>
            <a className={styles.contact_button__text}>CONTACT ME</a>
            <hr className={styles.contact_button__contact__line}></hr>
        </div>
    )
}

export default ContactButton;


