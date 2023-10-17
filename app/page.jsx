'use client'
import overwatch from '@/data/overwatchClass';
import { useEffect, useState } from 'react';
import Agent from './components/agent/Agent';
import styles from './page.module.css';
import Link from 'next/link';

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
            apiData.map((agent) => (

              <Link href={'meninoCaurin'}>
                <div>
                  <p>Nome do agente: {agent.name}</p>
                  <p>Nome do agente: {agent.role}</p>
                  <img src={agent.portrait} alt="" />
                  {/* <Agent key={agent.key} name={agent.key} image={agent.portrait} role={agent.role} /> */}
                </div>
              </Link>

            ))
          ) : (
            <p>Loading...</p>
          )
        }
      </div>

    </div>
  )
}