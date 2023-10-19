'use client'
import { agent } from '@/data/overwatchClass';
import { useEffect, useState } from 'react';
import styles from './name.module.css';

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
                            <p>Agente {apiData.name}</p>
                            <p>Especialidade: {apiData.role}</p>
                            <img src={apiData.portrait} alt="" />
                            <div>
                                
                                <p>Escudos: {apiData.hitpoints.shields}</p>
                                <p>Vida: {apiData.hitpoints.health}</p>
                                <p>Armadura: {apiData.hitpoints.armor}</p>
                                <p>Total de vida: {apiData.hitpoints.total}</p>
                            </div>
                            <div>
                                <br />
                                <br />  
                            <h2>Descrição</h2>

                            <p>{apiData.description}</p>
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