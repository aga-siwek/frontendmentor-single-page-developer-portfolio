import styles from "./Form.module.css";

function Form() {
    return (
        <div className={styles.form__container}>
            <form className={styles.form}>
                <div className={styles.form__element}>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        aria-label="name"
                        placeholder="NAME"
                        className={styles.form__element__input__text}/>
                </div>

                <div className={styles.form__element}>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        aria-label="email"
                        placeholder="EMAIL"
                        className={styles.form__element__input__text}/>

                </div>
                <div className={styles.form__element}>
                    <textarea
                        name="message"
                        id="message"
                        aria-label="message"
                        placeholder="MESSAGE"
                        className={styles.form__element__input__text_area}/>
                </div>
                <div className={styles.form__button}>
                    <button type="submit"  className={styles.form__button__text}>
                        SEND MESSAGE
                    </button>
                    <hr className={styles.form__button__line}/>


                </div>
            </form>
        </div>
    )
}

export default Form;