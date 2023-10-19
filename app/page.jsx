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
    <div className={styles.divMain}>
      <div className={styles.mainContainer}>
        <h2>API - OverWatch</h2>
        <div>
          {
            apiDataO ? (
              apiDataO.map((agent) => (

                <Link href={`eachAgent/${agent.key}`}>
                  <div>
                    <Agent
                    key={agent.id}
                    name={agent.name}
                    portrait={agent.portrait}
                    role={agent.role} />
                  </div>
                </Link>

              ))
            ) : (
              <p>Loading...</p>
            )
          }
        </div>
      </div>
    </div>
  )
}