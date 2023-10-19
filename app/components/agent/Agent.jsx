'use client'
import styles from './agent.module.css';

const Agent = ({ key, name, portrait, role }) => {
    
    return (
        <div key={key} className={styles.containerAgent}>
            <p>Agente {name}</p>
                    <p>Especialidade: {role}</p>
                    <img src={portrait} alt={name} />
        </div>
    )
}

export default Agent;