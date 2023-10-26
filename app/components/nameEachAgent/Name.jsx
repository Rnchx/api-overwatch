'use client'
import styles from './nameEachAgent.module.css';

const Name = ({ key, name, icon, shields, health, armor, total, description, abilities, story }) => {
    return (
        <div key={key} className={styles.containerEachAgent}>
            <div className={styles.containerCard}>
                <div className={styles.containerIcon2}>
                    <div className={styles.containerIcon}>
                        <div className={styles.divIconRole}>
                            <p className={styles.iconRole}>{icon}</p>
                        </div>
                        <div className={styles.divTextTitle}>
                            <p className={styles.textTitle} id={styles.pName}><i>{name}</i></p>
                        </div>
                    </div>
                </div>

                <div className={styles.divVideo}>
                    <video width="850" controls muted autoPlay loop>
                        <source src={abilities[0].video.link.mp4} type="video/mp4" />
                    </video>
                </div>


                <div className={styles.divHitpointsDescription}>
                    <div className={styles.divHitpoints}>
                        <p className={styles.text}><strong>Escudos:</strong><br></br> {shields}</p>
                        <p className={styles.text}><strong>Vida:</strong><br></br> {health}</p>
                        <p className={styles.text}><strong>Armadura:</strong><br></br> {armor}</p>
                        <p className={styles.text}><strong>Total de vida:</strong><br></br> {total}</p>
                    </div>

                    <div className={styles.divIcons}>
                        {/* {
                            abilities.map((abilities) => (
                                <div key={abilities.name}>
                                    <img className={styles.icons} src={abilities.icon} width={120} />
                                </div>
                            ))
                        } */}
                        <img className={styles.icons} src={abilities[1].icon} width={120} />
                        <img className={styles.icons} src={abilities[2].icon} width={120} />
                        <img className={styles.icons} src={abilities[3].icon} width={120} />
                    </div>


                    <div className={styles.divGunDescription2}>
                        <div className={styles.divGunDescription}>
                            <div className={styles.divGun}>
                                <img className={styles.icons} src={abilities[0].icon} width={250} />
                            </div>

                            <div className={styles.divDescription}>
                                <div className={styles.divDescription2}>
                                    <p className={styles.text}><strong>{description}</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={styles.divStory}>
                        <p className={styles.text}>{story.summary}</p>

                        {
                            story.chapters.map((story) => (
                                <div key={story.title}>
                                    <div className={styles.divContentPic}>
                                        <div className={styles.divContent}>
                                            <p className={styles.textContent}>{story.content}</p>
                                        </div>
                                        <div className={styles.divPic}>
                                            <div className={styles.divPic2}>
                                                <img src={story.picture} width={350} />
                                                <p className={styles.title}><i>{story.title}</i></p>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Name;