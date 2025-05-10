import styles from "./ProjectBox.module.css";

function ProjectBox({cover, name, technology, viewProject, viewCode}) {
    return (
        <div className={styles.projectBox}>
            <img className={styles.projectBox__cover} src={cover}/>
            <h4 className={styles.projectBox__name}>{name.toUpperCase()}</h4>
            <div className={styles.projectBox__technology}>
                {
                    technology.map((tech) => {
                        return (<p key={tech}>{tech.toUpperCase()}</p>)
                    })
                }
            </div>
            <div className={styles.projectBox__see_more}>
                <div className={styles.projectBox__see_more__link} >
                    <a href={viewProject}
                       className={styles.projectBox__see_more__text}>
                        VIEW PROJECT</a>
                    <hr className={styles.projectBox__see_more__line}/>
                </div>
                <div className={styles.projectBox__see_more__link}>
                    <a href={viewCode} className={styles.projectBox__see_more__text}>VIEW CODE</a>
                    <hr className={styles.projectBox__see_more__line} />
                </div>
            </div>
        </div>
    )
}

export default ProjectBox;