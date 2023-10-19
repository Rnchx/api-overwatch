'use client'
import styles from './nameEachAgent.module.css';

const Name = ({ key, name, role, portrait, shields, health, armor, total }) => {

    return (
        <div key={key} className={styles.containerEachAgent}>
            <p>Agente {name}</p>
            <p>Especialidade: {role}</p>
            <img src={portrait} alt={name} />
            <div>
                <h2>Hitpoints:</h2>
                <p>Escudos: {shields}</p>
                <p>Vida: {health}</p>
                <p>Armadura: {armor}</p>
                <p>Total de vida: {total}</p>
            </div>
        </div>
    )
}

export default Name;