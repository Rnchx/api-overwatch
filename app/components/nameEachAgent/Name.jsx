'use client'
import { Poppins } from 'next/font/google';
import styles from './nameEachAgent.module.css';

const Name = ({ key, name, role, portrait, shields, health, armor, total, description }) => {

    return (
        <div key={key} className={styles.containerEachAgent}>
            <div className={styles.containerCard}>
            <p className={styles.text} id={styles.pName}>Agente {name}</p>
            <p className={styles.text}>Especialidade: {role}</p>
            <img src={portrait} alt={name} />

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