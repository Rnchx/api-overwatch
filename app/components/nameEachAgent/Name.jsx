'use client'
import styles from './nameEachAgent.module.css';

const Name = ({ key, name, icon, shields, health, armor, total, description, abilities }) => {
    console.log('teste', abilities);
    return (
        <div key={key} className={styles.containerEachAgent}>
            <div className={styles.containerCard}>
                <div className={styles.containerIcon}>
                <p className={styles.text} id={styles.pName}><i>{name}</i></p>
                <p className={styles.text}>{icon}</p>
                </div>

                <div>
                    <video width="450" height="300" controls muted autoPlay loop>
                        <source src={abilities[0].video.link.mp4} type="video/mp4" />
                    </video>
                </div>

                <div className={styles.divHitpoints}>
                    <p className={styles.text}><strong>Escudos:</strong><br></br> {shields}</p>
                    <p className={styles.text}><strong>Vida:</strong><br></br> {health}</p>
                    <p className={styles.text}><strong>Armadura:</strong><br></br> {armor}</p>
                    <p className={styles.text}><strong>Total de vida:</strong><br></br> {total}</p>
                </div>

                <div className={styles.divDescription}>
                    <p className={styles.text}><strong>{description}</strong></p>
                </div>


            </div>
        </div>
    )
}

export default Name;