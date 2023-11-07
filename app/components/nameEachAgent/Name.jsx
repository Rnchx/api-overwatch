'use client'
import styles from './nameEachAgent.module.css';
import { useEffect, useState } from 'react';

const Name = ({ key, name, icon, shields, health, armor, total, description, abilities, story }) => {

    const [backgroundImage, setBackgroundImage] = useState('https://bnetcmsus-a.akamaihd.net/cms/gallery/W94XAGJVK4871649353625265.jpg');
    const images = [
        'https://bnetcmsus-a.akamaihd.net/cms/gallery/1BJ1QA72FCN61649353624113.jpg',
        'https://images6.alphacoders.com/553/553471.jpg',
        'https://www.pockettactics.com/wp-content/sites/pockettactics/2022/10/overwatch-2-maps-2.jpg',
        'https://assets-prd.ignimgs.com/2022/09/27/esperanca-portugal-003-1080-1664272798292.jpg'
    ];


    useEffect(() => {
        const intervalId = setInterval(() => {
            setBackgroundImage(images[Math.floor(Math.random() * images.length)]);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);
    return (
        <div key={key} className={styles.containerEachAgent2} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className={styles.containerEachAgent}>

                <div className={styles.containerCard}>
                    <div className={styles.containerIcon2}>
                        <div className={styles.containerIcon}>
                            <div className={styles.divIconRole}>
                                <p className={styles.iconRole}>{icon}</p>
                            </div>
                            <div className={styles.divTextTitle}>
                                <p className={styles.textTitle} id={styles.pName}>{name}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.divPaiVideo}>
                        <div className={styles.divVideo}>
                            <video width="850" controls muted autoPlay loop>
                                <source src={abilities[0].video.link.mp4} type="video/mp4" />
                            </video>
                        </div>
                    </div>


                    <div className={styles.divHitpointsDescription}>
                        <div className={styles.divHitpoints}>
                            <p className={styles.text}><strong>Escudo:</strong><br></br> {shields}</p>
                            <p className={styles.text}><strong>Vida:</strong><br></br> {health}</p>
                            <p className={styles.text}><strong>Armadura:</strong><br></br> {armor}</p>
                            <p className={styles.text}><strong>Total de vida:</strong><br></br> {total}</p>
                        </div>

                        <div className={styles.divIcons}>
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
                            <div className={styles.divSummary}>
                                <p className={styles.text}>{story.summary}</p>
                            </div>
                            {
                                story.chapters.map((story) => (
                                    <div key={story.title}>
                                        <div className={styles.divContentPic}>
                                            <div className={styles.divContent}>
                                                <p className={styles.textContent}>{story.content}</p>
                                            </div>
                                            <div className={styles.divPic}>
                                                <div className={styles.divPic2}>
                                                    <p className={styles.titleStory}>{story.title}</p>
                                                    <img src={story.picture} width={350} />
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

        </div>
    )
}

export default Name;