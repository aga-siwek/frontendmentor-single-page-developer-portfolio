import styles from "./Photo.module.css";
import developerPhotoMobile from "../../../assets/image-profile-mobile.webp"
import developmentPhotoDesktop from "../../../assets/image-profile-desktop.webp"
import developmentPhotoTablet from "../../../assets/image-profile-tablet.webp"

function Photo() {
    return (
        <div className={styles.photo}>
            <div className={styles.photo__mobile}>
                <img src={developerPhotoMobile} className={styles.photo__img} alt="developer photo mobile"/>
            </div>
            <div className={styles.photo__tablet}>
                <img src={developmentPhotoTablet} className={styles.photo__img} alt="developer photo tablet"/>
            </div>
            <div className={styles.photo__desktop}>
                <img src={developmentPhotoDesktop} className={styles.photo__img} alt="developer photo desktop"/>
            </div>

        </div>)
}

export default Photo;