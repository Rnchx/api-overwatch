import React from 'react'
import styles from './imageLoading.module.css'

function ImageLoading() {
    return (
        <div id={styles.containerImgLoading}>
                <img id={styles.image} src='/steamuserimages-a.akamaihd.gif' alt="Loading Image" />
        </div>
    )
}

export default ImageLoading