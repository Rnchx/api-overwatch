'use client'
import overwatch from '@/models/agentesOver';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function Home() {

  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const valorantFletch = async () => {

      const datas = await valorant();
      setApiData(datas);
    };
    valorantFletch();
  }, [])

  return (
    <div className={styles.divMain}>
      <h2 className={styles.title}>API - Valorant</h2>
      <div className={styles.divAllCards}>
      {
        apiData ? (
          apiData.data.map((agent) => (

            <div className={styles.divAgent}>
              <Agent key={agent.uuid} name={agent.displayName} image={agent.displayIcon} description={agent.description} skills={agent.abilities} />
            </div>

          ))
        ) : (
          <p>Loading...</p>
        )
      }
      </div>
      
    </div>
  )
}
