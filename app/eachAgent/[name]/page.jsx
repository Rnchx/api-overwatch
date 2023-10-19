'use client'
import { agent } from '@/data/overwatchClass';
import { useEffect, useState } from 'react';
import styles from './name.module.css';
import Name from '@/app/components/nameEachAgent/Name';

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
            <h2>API - OverWatch</h2>
            <div>
                {
                    apiData ? (

                        <div>
                            <Name key={apiData.id}
                            name={apiData.name}
                            role={apiData.role}
                            portrait={apiData.portrait}
                            shields={apiData.hitpoints.shields}
                            health={apiData.hitpoints.health}
                            armor={apiData.hitpoints.armor}
                            total={apiData.hitpoints.total} />
                            
                            <p>Agente {apiData.name}</p>
                            <p>Especialidade: {apiData.role}</p>
                            <img src={apiData.portrait} alt="" />
                            <div>
                                <h2>Hitpoints:</h2>
                                <p>Escudos: {apiData.hitpoints.shields}</p>
                                <p>Vida: {apiData.hitpoints.health}</p>
                                <p>Armadura: {apiData.hitpoints.armor}</p>
                                <p>Total de vida: {apiData.hitpoints.total}</p>
                            </div>
                        </div>

                    ) : (
                        <p>Loading...</p>
                    )
                }
            </div>

        </div>
    )
}