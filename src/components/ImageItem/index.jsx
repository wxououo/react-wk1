import styles from './imageitem.module.css'

export default function ImageItem({ imagedata }) {
    return (
        <div>
            <a href="" className={styles.imageLink}>
                <img src={imagedata.imageSrc} alt="" className={styles.imageStyle} />
            </a>
            <p className={styles.imageTitle}>{imagedata.imageTitle}</p>
        </div>
    )
}