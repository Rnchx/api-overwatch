'use client'
import styles from './agent.module.css';

const Agent = ({ key, portrait, description, role, location, hitpoints }) => {
    return (
        <div key={key} className={styles.divCards}>
            <div className={styles.divTitleImg}>
                <h1>{name}</h1>
                <img src={portrait} alt={key} width={256} height={256} />
            </div>


            <p>{description}</p>
            <h1 className={styles.title}>Skills:</h1>
            <div className={styles.divSkills}>
                {
                    skills.map((skill) => (
                        <div key={skill.uuid}>
                            <h2 className={styles.titleSkills}>{skill.displayName}</h2>
                            <img src={skill.displayIcon} alt={skill.uuid} width={64} height={64} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Agent;