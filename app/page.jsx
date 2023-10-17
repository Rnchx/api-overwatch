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
    <div>
      <h2>API - OverWatch</h2>
      <div>
      {
        apiData ? (
          apiData.data.map((agent) => (

            <div>
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
