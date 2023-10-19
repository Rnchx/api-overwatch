'use client'
import styles from './nameEachAgent.module.css';

const Name = ({ key, name, role, portrait, shields, health, armor, total, description }) => {

    return (
        <div key={key} className={styles.containerEachAgent}>
            <p className={styles.text}>Agente {name}</p>
            <p className={styles.text}>Especialidade: {role}</p>
            <img src={portrait} alt={name} />

            <div className={styles.divHitpoints}>
                <p className={styles.text}>Escudos: {shields}</p>
                <p className={styles.text}>Vida: {health}</p>
                <p className={styles.text}>Armadura: {armor}</p>
                <p className={styles.text}>Total de vida: {total}</p>
            </div>

            <div className={styles.divDescription}>
                <h2 className={styles.title}>Descrição do Agente:</h2>

                <p className={styles.text}>{description}</p>
            </div>
        </div>
    )
}

export default Name;