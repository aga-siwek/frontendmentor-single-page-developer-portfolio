import styles from "./SocialMedia.module.css";
import githubIcon from "../../../assets/icon-github.svg"
import linkedinIcon from "../../../assets/icon-linkedin.svg"
import frontendMentorIcon from "../../../assets/icon-frontend-mentor.svg"
import twitterIcon from "../../../assets/icon-twitter.svg"
const linkedinLink = "https://www.linkedin.com/"
const githubLink = "https://github.com/aga-siwek"
const frontendMentorLink = "https://www.frontendmentor.io/profile/aga-siwek"
const twitterLink = "https://twitter.com/"
import {ReactSVG} from "react-svg";


function SocialMedia() {
    return (
        <div className={styles.socialmedia} >
            <div className={styles.socialmedia__icon}>
                <a href={githubLink} target="blank" aria-label="Click on the icon and see github"><ReactSVG src={githubIcon}  className={styles.socialmedia__icon__img} /></a>
            </div>
            <div className={styles.socialmedia__icon}>
                <a href={frontendMentorLink} target="blank" aria-label="Click on the icon and see frontendmentor"><ReactSVG src={frontendMentorIcon} className={styles.socialmedia__icon__img} /></a>
            </div>
            <div className={styles.socialmedia__icon}>
                <a href={linkedinLink} target="blank" aria-label="Click on the icon and see linkedin"><ReactSVG src={linkedinIcon} className={styles.socialmedia__icon__img} /></a>
            </div>

            <div className={styles.socialmedia__icon}>
                <a href={twitterLink} target="blank" aria-label="Click on the icon and see twitter"><ReactSVG src={twitterIcon} className={styles.socialmedia__icon__img} /></a>
            </div>

        </div>
    )
}

export default SocialMedia;