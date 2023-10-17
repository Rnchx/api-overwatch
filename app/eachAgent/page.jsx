'use client'
import { agent } from '@/data/overwatchClass';
import { useEffect, useState } from 'react';
import styles from '../page.module.css';

export default function Home() {

    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        const overwatchFletch = async () => {

            const datas = await agent('Ana');
            setApiData(datas);
        };
        overwatchFletch();
    }, [])

    useEffect(() => {
        const overwatchFletch = async () => {

            const datas = await agent('Ashe');
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
                            <p>Nome do agente: {apiData.name}</p>
                            <p>Nome do agente: {apiData.role}</p>
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