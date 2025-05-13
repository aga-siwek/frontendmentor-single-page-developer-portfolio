import styles from "./Experiances.module.css";
import ExperianceBox from "./ExperianceBox";

function Experiances() {

    return (
        <div className={styles.experiances}>
            <hr className={styles.experiances__line}/>
            <div className={styles.experiances_boxs}>
                <ExperianceBox kind="HTML" experianceYears={4} />
                <ExperianceBox kind="CSS" experianceYears={4}/>
                <ExperianceBox kind="JavaScript" experianceYears={4}/>
                <ExperianceBox kind="Accessibility" experianceYears={4}/>
                <ExperianceBox kind="React" experianceYears={3}/>
                <ExperianceBox kind="Sass" experianceYears={3}/>
            </div>
            <hr className={styles.experiances__line__bottom}/>
        </div>
)
}

export default Experiances;