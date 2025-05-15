import styles from "./Projects.module.css";
import ProjectBox from "./ProjectBox.jsx";
import ContactButton from "../common/ContactButton/ContactButton.jsx";
import designPortfolioCover from "../../assets/thumbnail-project-1-large.webp"
import elerningCover from "../../assets/thumbnail-project-2-large.webp"
import todoCover from "../../assets/thumbnail-project-3-large.webp"
import entertainmentCover from "../../assets/thumbnail-project-4-large.webp"
import memoriesCover from "../../assets/thumbnail-project-5-large.webp"
import artCover from "../../assets/thumbnail-project-6-large.webp"

function Projects() {
    return (
        <div className={styles.projects} role="contentinfo">
            <div className={styles.projects__header}>
                <h2 className={styles.projects__header__text}>Projects</h2>
                <ContactButton />
            </div>
            <div className={styles.ProjectsBoxes}>
                <ProjectBox
                    cover = {designPortfolioCover}
                    name = "design portfolio"
                    technology = {["html", "css"]}
                    viewProject = "test.pl"
                    viewCode = "test.code"/>
                <ProjectBox
                    cover = {elerningCover}
                    name = "E-LEARNING LANDING PAGE"
                    technology = {["html", "css"]}
                    viewProject = "test.pl"
                    viewCode = "test.code"/>
                <ProjectBox
                    cover = {todoCover}
                    name = "TODO WEB APP"
                    technology = {["html", "css", "Javascript"]}
                    viewProject = "test.pl"
                    viewCode = "test.code"/>
                <ProjectBox
                    cover = {entertainmentCover}
                    name = "ENTERTAINMENT WEB APP"
                    technology = {["html", "css", "Javascript"]}
                    viewProject = "test.pl"
                    viewCode = "test.code"/>

                <ProjectBox
                    cover = {memoriesCover}
                    name = "MEMORY GAME"
                    technology = {["html", "css", "Javascript"]}
                    viewProject = "test.pl"
                    viewCode = "test.code"/>

                <ProjectBox
                    cover = {artCover}
                    name = "ART GALLERY SHOWCASE"
                    technology = {["html", "css", "Javascript"]}
                    viewProject = "test.pl"
                    viewCode = "test.code"/>
            </div>
        </div>
    )
}

export default Projects;