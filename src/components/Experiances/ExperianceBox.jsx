import styles from "./ExperianceBox.module.css";

function ExperianceBox({kind, experianceYears, certyfications}) {

    const showExpoeriences = () => {
        if (experianceYears === 1) {
            return "1 Year experience"
        } else if (experianceYears >= 2) {
            return (<p className={styles.experience_box__exp}>{experianceYears} Years experience</p>)

        }
    }

    return (
        <div className={styles.experience_box}>
            <h3 className={styles.experience_box__header}>{kind}</h3>
            <div>
                {showExpoeriences()}
            </div>
        </div>
    )
}

export default ExperianceBox;