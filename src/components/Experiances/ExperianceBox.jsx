import styles from "./ExperianceBox.module.css";

function ExperianceBox({kind, experianceYears}) {

    const showExpoeriences = () => {
        if (experianceYears === 1) {
            return "1 Year Experience"
        } else if (experianceYears >= 2) {
            return (<p className={styles.experience_box__exp}>{experianceYears} Years Experience</p>)

        }
    }

    return (
        <div className={styles.experience_box}>
            <p className={styles.experience_box__header}>{kind}</p>
            <div>
                {showExpoeriences()}
            </div>
        </div>
    )
}

export default ExperianceBox;