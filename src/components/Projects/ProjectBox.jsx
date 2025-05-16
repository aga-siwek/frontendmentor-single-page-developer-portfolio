import styles from "./ProjectBox.module.css";
import {useState} from "react";

function ProjectBox({cover, name, technology, viewProject, viewCode}) {
    const [show, setShow] = useState(false);


    return (
        <div className={styles.projectBox}>
            <div
                className={styles.projectBox__cover}
                onMouseEnter={() =>
                    setShow(true)}
                onMouseLeave={() =>
                    setShow(false)}
            >
                <img className={styles.projectBox__cover__img} src={cover} alt={`cover of ${name}`}/>
            </div>
            <div className={styles.projectBox__info}>
                <p className={styles.projectBox__name}>{name.toUpperCase()}</p>
                <div className={styles.projectBox__technology}>
                    {
                        technology.map((tech) => {
                            return (<p key={tech}>{tech.toUpperCase()}</p>)
                        })
                    }
                </div>
            </div>
            <div
                className={`${styles.projectBox__see_more} ${show ? styles.show : ""}`}>
                <div className={styles.projectBox__see_more__link}>
                    <a href={viewProject}
                       className={styles.projectBox__see_more__text}>
                        VIEW PROJECT</a>
                    <hr className={styles.projectBox__see_more__line}/>
                </div>
                <div className={styles.projectBox__see_more__link}>
                    <a href={viewCode} className={styles.projectBox__see_more__text}>VIEW CODE</a>
                    <hr className={styles.projectBox__see_more__line}/>
                </div>
            </div>
        </div>
    )
}

export default ProjectBox;