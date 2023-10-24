'use client'
import styles from './nameEachAgent.module.css';

const Name = ({ key, name, role, portrait, shields, health, armor, total, description }) => {

    return (
        <div key={key} className={styles.containerEachAgent}>
            <div className={styles.containerCard}>
            <p className={styles.text} id={styles.pName}>Agente {name}</p>
            <p className={styles.text}>Especialidade: {role}</p>
            <img src={portrait} alt={name} />

            <div className={styles.divHitpoints}>
                <p className={styles.text}>Escudos: {shields}</p>
                <p className={styles.text}>Vida: {health}</p>
                <p className={styles.text}>Armadura: {armor}</p>
                <p className={styles.text}>Total de vida: {total}</p>
            </div>

            <div className={styles.divDescription}>
                <p className={styles.text}><strong>{description}</strong></p>
            </div>
            </div>
        </div>
    )
}

export default Name;