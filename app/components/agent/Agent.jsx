'use client'
import styles from './agent.module.css';

const Agent = ({ key, name, portrait, role}) => {

    return (
        <div key={key} className={styles.containerAgent}>
            <img src={portrait} alt={name} width={256} height={256}/>
            <p>{name}</p>
            <p>{role}</p>
        </div>
    )
}

export default Agent;