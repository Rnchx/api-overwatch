'use client'
import React from 'react';
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import ImageLoading from './components/imageLoading/ImageLoading';
import AgentModel from "@/models/Agents";
import ListAgente from "@/models/listAgente";
import overwatch, { agent } from "@/data/overwatchClass"
import Agent from './components/agent/Agent';

const instanciaListaAgentes = new ListAgente()
export default function Home() {

  const [apiData, setApiData] = useState(null);

  const [listaAgentes, setListaAgentes] = useState([]);

  const [nome, setNome] = useState(null);
  const [portraitAgent, setPortraitAgent] = useState("")
  const [descricao, setDescricao] = useState("");
  const [armadura, setArmadura] = useState("");
  const [vida, setVida] = useState("");
  const [escudo, setEscudo] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [habilidade1, setHabilidade1] = useState("");
  const [habilidade2, setHabilidade2] = useState("");
  const [habilidade3, setHabilidade3] = useState("");
  const [btnEdit, setBtnEdit] = useState([]);

  const addAgent = () => {
    const novoAgente = new AgentModel(nome, portraitAgent, descricao, armadura, vida, escudo, especialidade, habilidade1, habilidade2, habilidade3);


    if (!listaAgentes.some(agente => agente.nome === nome)) {
      const novosAgentes = [...listaAgentes, novoAgente];
      setListaAgentes(novosAgentes);
    }

    instanciaListaAgentes.addAgente(novoAgente);

    setNome("");
    setPortraitAgent("");
    setDescricao("");
    setArmadura("");
    setVida("");
    setEscudo("");
    setEspecialidade("");
    setHabilidade1("");
    setHabilidade2("");
    setHabilidade3("");
  };

  const removeAgent = (agente) => {
    instanciaListaAgentes.removeAgente(agente)
    setListaAgentes(instanciaListaAgentes.getList())
  }

  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      try {
        const data = await overwatch();
        console.log('data dentro do useefe', data)
        if (!ignore) {
          setApiData(data);
        }
      } catch (error) {

      }
    };
    fetchData();

    return () => {
      ignore = true
    }
  }, []);

  useEffect(() => {
    if (apiData) {
      apiData.forEach((agenteData) => {
      console.log('apiDataDoUseUfeect', apiData)

        const novoAgente = new AgentModel(
          agenteData.name,
          agenteData.portrait,
          agenteData.description,
          agenteData.role,
        );
        console.log("NovoAgenteaaaaaa", novoAgente)
        instanciaListaAgentes.addAgente(novoAgente);
      });

      const atualizarAgentes = [...listaAgentes, ...instanciaListaAgentes.getList()];
      setListaAgentes(atualizarAgentes);
    }
  }, [apiData]);

  console.log('listaAgentesRe', listaAgentes)
  return (
    apiData ? (
      <div className={styles.divBody}>
        <Header />
        <div id={styles.formCreateAgent}>
          <h2>Crie seu novo agente abaixo!</h2>
          <input
            className={styles.inputs}
            type="text"
            placeholder="nome do agente"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <select id={styles.especialdiadesAgents}>
            <option value={agent.especialidade}>suporte</option>
            <option value={agent.especialidade}>dano</option>
            <option value={agent.especialidade}>tanque</option>
          </select>

          <input
            className={styles.inputs}
            type="text"
            placeholder="URL da imagem"
            value={portraitAgent}
            onChange={(e) => setPortraitAgent(e.target.value)}
          />

          <input
            className={styles.inputs}
            type="text"
            placeholder="descrição do Agente"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />

          <h3>Habilidades:</h3>

          <input
            className={styles.inputs}
            type="text"
            placeholder="nome da habilidade 1"
            value={habilidade1}
            onChange={(e) => setHabilidade1(e.target.value)}
          />

          <input
            className={styles.inputs}
            type="text"
            placeholder="nome da habilidade 2"
            value={habilidade2}
            onChange={(e) => setHabilidade2(e.target.value)}
          />

          <input
            className={styles.inputs}
            type="text"
            placeholder="nome da habilidade 3"
            value={habilidade3}
            onChange={(e) => setHabilidade3(e.target.value)}
          />

          <h3>Informações de vida.</h3>

          <input
            className={styles.inputs}
            type="number"
            placeholder="quantidade de vida"
            value={vida}
            onChange={(e) => setVida(e.target.value)}
          />

          <input
            className={styles.inputs}
            type="number"
            placeholder="quantidade de armadura"
            value={armadura}
            onChange={(e) => setArmadura(e.target.value)}
          />

          <input
            className={styles.inputs}
            type="number"
            placeholder="quantidade de escudo"
            value={escudo}
            onChange={(e) => setEscudo(e.target.value)}
          />

          <button onClick={addAgent}>Adicionar Agente!</button>
        </div>
        <div className={styles.smallCard}>
          <div className={styles.card1}>
            {listaAgentes.map((agent) => (
                <div className={styles.card2}>
                  <Agent
                    key={agent.id}
                    name={agent.name}
                    portrait={agent.portrait}
                    role={agent.role === 'support' ? <div className={styles.containerIcon}><div className={styles.styleIcons}><img className={styles.iconsRoles} src='https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blt66cec9a29cd34e3d/62ea8957c87999116c02c674/Support.svg' /></div></div>
                      : agent.role === 'tank' ? <div className={styles.containerIcon}><div className={styles.styleIcons}><img className={styles.iconsRoles} src='https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blt0f8b4fa502f0ea53/62ea8957ed429710b3d9b0b0/Tank.svg' /></div></div>
                        : <div className={styles.containerIcon}><div className={styles.styleIcons}><img className={styles.iconsRoles} src='https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/bltc1d840ba007f88a8/62ea89572fdd1011027e605d/Damage.svg' /></div></div>} />
                  <button onClick={() => removeAgent(agent)}>Remover</button>
                </div>

            )
            )}
          </div>
        </div>
        <Footer />
      </div>
    ) : (
      <ImageLoading />
    )
  );
};