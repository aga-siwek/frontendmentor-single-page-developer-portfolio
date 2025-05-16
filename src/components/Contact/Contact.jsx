import styles from "./Contact.module.css";
import Form from "./Form";

function Contact() {
    return (
        <div className={styles.contact__container} aria-labelledby="contact_me">
            <div className={styles.contact}>
                <div className={styles.contact_information}>
                    <h3 className={styles.contact_information__header}>Contact</h3>
                    <p className={styles.contact_information__text}>
                        I would love to hear about your project and how I could help.
                        Please fill in the form, and I’ll get back to you as soon as possible.</p>
                </div>
                <Form/>
            </div>
            <hr className={styles.contact__line}/>
        </div>
    )
}

export default Contact;