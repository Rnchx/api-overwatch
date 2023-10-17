'use client'
import styles from './agent.module.css';

const Agent = ({ key, name, portrait, description, role, location, hitpoints, abilities }) => {
    return (
        <div key={key}>
            <h1>{name}</h1>
            <img src={portrait} alt={name} height={350} width={350} />
            <p>{description}</p>
            <p>{role}</p>
            <p>Local de Origem: {location}</p>
            
            

        </div>
    )
}

export default Agent;