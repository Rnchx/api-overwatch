'use client'
import styles from './agent.module.css';

const Agent = ({ key, name, portrait, description, role, location, hitpoints, abilities }) => {
    return (
        <div key={key} className={styles.containerAgent}>
            <h1 className={styles.nameAgent}>{name}</h1>
            <img src={portrait} alt={name} height={350} width={350} />
            <p className={styles.descriptionAgent}>{description}</p>
            <p className={styles.roleAgent}>{role}</p>
            <p className={styles.locationAgent}>Local de Origem: {location}</p>
            <p>Shileds: {hitpoints.shields}</p>

            {
                abilities.map((ability) => (
                    <p>Nome: {ability.name}</p>
                ))
            }


        </div>
    )
}

export default Agent;