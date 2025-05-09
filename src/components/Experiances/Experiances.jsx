import styles from "./Experiances.module.css";
import ExperianceBox from "./ExperianceBox";

function Experiances() {
    const certyfications = ["cer a", "cer b"]
    return (
        <div className={styles.experiances}>
            <hr className={styles.experiances__line}/>
            <div className={styles.experiances_boxs}>
                <ExperianceBox kind="HTML" experianceYears={1} certyfications = {certyfications} />
                <ExperianceBox kind="CSS" experianceYears={2}/>
                <ExperianceBox kind="JavaScript" experianceYears={2}/>
                <ExperianceBox kind="React" experianceYears={1}/>
                <ExperianceBox kind="Sass" experianceYears={1}/>
            </div>
            <hr className={styles.experiances__line}/>
        </div>
)
}

export default Experiances;