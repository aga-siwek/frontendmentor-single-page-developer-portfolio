import styles from "./Form.module.css";
import {useFormik} from "formik";
import * as yup from 'yup';
import {useEffect} from "react";
import errorIcon from "../../assets/error-circle-svgrepo-com.svg"
import {ReactSVG} from "react-svg";

function Form() {

    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit
    } = useFormik({
            initialValues: {
                name: "",
                email: "",
                message: "",
            },
            validationSchema: yup.object().shape({
                name: yup.string().required("Name is required"),
                email: yup.string().email("Email is required").required("Email is required"),
                message: yup.string().required("Message is required"),
            }),
            onSubmit: (values, {setSubmitting, setTouched}) => {
                setTouched({
                    name: true,
                    email: true,
                    message: true,
                });
                if (Object.keys(errors).length > 0) {
                    setSubmitting(false);
                    return
                }
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false)
            }
        }
    )
    // error name
    useEffect(() => {
        const formIconName = document.querySelector("#error_icon_name");
        const formIconEmail = document.querySelector("#error_icon_email");
        const formIconMessage = document.querySelector("#error_icon_message");
        formIconName.classList.add(styles.hidden)
        formIconEmail.classList.add(styles.hidden)
        formIconMessage.classList.add(styles.hidden)

        if (errors.name && touched.name){
            console.log ("errors name")
            formIconName.classList.remove(styles.hidden)
        }
        if (errors.email && touched.email) {
            console.log ("errors email")
            formIconEmail.classList.remove(styles.hidden)
            console.log(errors.email)
        }
        if (errors.message && touched.message) {
            console.log ("errors message")
            formIconMessage.classList.remove(styles.hidden)
            console.log(errors.message)
        }
    }, [
        errors.name,
        errors.email,
        errors.message,
        touched.name,
        touched.email,
        touched.message]);


    return (
        <div className={styles.form__container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.form__element}>
                    <div className={styles.form__element__input__container}>
                        <input
                            type="text"
                            name="name"
                            id="form_name"
                            aria-label="name"
                            placeholder="NAME"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            className={styles.form__element__input__text}/>
                        <div className={styles.form__element__input__error_icon} id="error_icon_name">
                            &#9432;
                        </div>
                    </div>
                    {errors.name && touched.name && (
                        <p className={styles.form__element__error}>{errors.name}</p>
                    )}
                </div>

                <div className={styles.form__element}>
                    <div className={styles.form__element__input__container}>
                        <input
                            name="email"
                            id="form_email"
                            aria-label="email"
                            placeholder="EMAIL"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            className={styles.form__element__input__text}/>
                        <div className={styles.form__element__input__error_icon} id="error_icon_email">
                            &#9432;
                        </div>
                    </div>

                    {errors.email && touched.email && (
                        <p className={styles.form__element__error}>{errors.email}</p>
                    )}

                </div>
                <div className={styles.form__element}>
                    <div className={styles.form__element__input__container}>
                    <textarea
                        name="message"
                        id="form_message"
                        aria-label="message"
                        placeholder="MESSAGE"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                        className={styles.form__element__input__text_area}/>
                        <div
                            className={styles.form__element__input__error_icon}
                            id="error_icon_message">
                            &#9432;
                        </div>
                    </div>
                    {errors.message && touched.message && (
                        <p className={styles.form__element__error}>{errors.message}</p>
                    )}
                </div>
                <div className={styles.form__button}>
                    <button type="submit" className={styles.form__button__text}>
                        SEND MESSAGE
                    </button>
                    <hr className={styles.form__button__line}/>
                </div>
            </form>
        </div>
    )
}

export default Form;