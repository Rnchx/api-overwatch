'use client'
import overwatch from '@/data/overwatchClass';
import { useEffect, useState } from 'react';
import Agent from './components/agent/Agent';
import styles from './page.module.css';
import Link from 'next/link';

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
      <div className={styles.mainContainer}>
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
                      role={agent.role} />
                  </div>
                </Link>
        ))
        ) : (
        <p>Carregando Api...</p>
        )
          }
          </div>
      </div>
    </div>
    </div>
  )
}