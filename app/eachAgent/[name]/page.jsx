'use client'
import { agent } from '@/data/overwatchClass';
import { useEffect, useState } from 'react';
import styles from './name.module.css';
import Name from '@/app/components/nameEachAgent/Name';
import ImageLoading from '../../components/imageLoading/ImageLoading'

export default function Home({ params }) {

    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        const overwatchFletch = async () => {
            const datas = await agent(params.name);
            setApiData(datas);
        };
        overwatchFletch();
    }, [])

    return (
        <div className={styles.divMain}>
            <div>
                {
                    apiData ? (
                        <div>
                            <Name key={apiData.id}
                                name={apiData.name}
                                icon={apiData.role === 'support' ? <div className={styles.containerIcon}><div className={styles.styleIcons}><img className={styles.iconsRoles} src='https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blt66cec9a29cd34e3d/62ea8957c87999116c02c674/Support.svg' /></div></div>
                                : apiData.role === 'tank' ? <div className={styles.containerIcon}><div className={styles.styleIcons}><img className={styles.iconsRoles} src='https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blt0f8b4fa502f0ea53/62ea8957ed429710b3d9b0b0/Tank.svg' /></div></div>
                                    : <div className={styles.containerIcon}><div className={styles.styleIcons}><img className={styles.iconsRoles} src='https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/bltc1d840ba007f88a8/62ea89572fdd1011027e605d/Damage.svg' /></div></div>}
                                shields={apiData.hitpoints.shields}
                                health={apiData.hitpoints.health}
                                armor={apiData.hitpoints.armor}
                                total={apiData.hitpoints.total}
                                description={apiData.description}
                                abilities={apiData.abilities}
                                story={apiData.story}
                            />
                        </div>

                    ) : (
                        <ImageLoading/>
                    )
                }
            </div>

        </div>
    )
}