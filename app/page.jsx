'use client'
import overwatch from '@/data/overwatchClass';
import { useEffect, useState } from 'react';
import Agent from './components/agent/Agent';
import styles from './page.module.css';
import Link from 'next/link';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

export default function Home() {

  const [apiDataO, setApiDataO] = useState(null);
  const [apiDataA, setApiDataA] = useState(null);

  useEffect(() => {
    const overwatchFletch = async () => {

      const datasO = await overwatch();
      setApiDataO(datasO);
    };
    overwatchFletch();
  }, [])


  return (
    <div className={styles.divBody}>
      <Header/>
      <div className={styles.smallCard}>
        <div className={styles.card1}>
          {
            apiDataO ? (
              apiDataO.map((agent) => (
                <Link href={`eachAgent/${agent.key}`}>
                  <div className={styles.card2}>
                    <Agent
                      key={agent.id}
                      name={agent.name}
                      portrait={agent.portrait}
                      role={agent.role === 'support' ? <div className={styles.containerIcon}><div className={styles.styleIcons}><img className={styles.iconsRoles} src='https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blt66cec9a29cd34e3d/62ea8957c87999116c02c674/Support.svg' /></div></div>
                        : agent.role === 'tank' ? <div className={styles.containerIcon}><div className={styles.styleIcons}><img className={styles.iconsRoles} src='https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blt0f8b4fa502f0ea53/62ea8957ed429710b3d9b0b0/Tank.svg' /></div></div>
                          : <div className={styles.containerIcon}><div className={styles.styleIcons}><img className={styles.iconsRoles} src='https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/bltc1d840ba007f88a8/62ea89572fdd1011027e605d/Damage.svg' /></div></div>} />
                  </div>
                </Link>
              ))
            ) : (
              <div id={styles.containerImgLoading}>
                <img src="@/public/steamuserimages-a.akamaihd.gif" alt="Loading Image" />
              </div>
            )
          }
        </div>
      
      </div>
      <Footer/>
    </div>
  )
}