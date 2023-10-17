'use client'
import overwatch from '@/models/agentesOver';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function Home() {

  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const overwatchFletch = async () => {

      const datas = await overwatch();
      setApiData(datas);
    };
    overwatchFletch();
  }, [])

  return (
    <div className={styles.divMain}>
      <h2>API - OverWatch</h2>
      <div>
      {
        apiData ? (
          apiData.heroes.data.map((agent) => (

            <div>
              <Agent key={agent.key} name={agent.key} image={agent.portrait} role={agent.role} />
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
