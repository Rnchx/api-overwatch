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
import { BsTrash3Fill } from 'react-icons/bs';
import { FaPencilAlt } from 'react-icons/fa';
import { AiFillWarning } from 'react-icons/ai'
import { BsUiChecks } from 'react-icons/bs'
import { BsFillBookmarkCheckFill } from 'react-icons/bs'
import { BiSolidErrorAlt } from 'react-icons/bi'
import { BsFillPersonPlusFill } from 'react-icons/bs'
import { BsFillPersonDashFill } from 'react-icons/bs'
import { GoMoveToTop } from 'react-icons/go'
import Popup from './components/popUp/PopUp';
import CompButton from './components/compBtns/CompBtns';

const instanciaListaAgentes = new ListAgente()

const useImageValidator = (url) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
  }, [url]);

  return isValid;
}

export default function Home() {

  const [apiData, setApiData] = useState(null);

  const [listaAgentes, setListaAgentes] = useState([]);
  console.log(listaAgentes);

  const [name, setname] = useState(null);
  const [portraitAgent, setPortraitAgent] = useState("");
  const isValid = useImageValidator(portraitAgent);
  //const [descricao, setDescricao] = useState("");
  //const [armadura, setArmadura] = useState("");
  //const [vida, setVida] = useState("");
  //const [escudo, setEscudo] = useState("");
  const [role, setrole] = useState("");
  //const [habilidade1, setHabilidade1] = useState("");
  //const [habilidade2, setHabilidade2] = useState("");
  //const [habilidade3, setHabilidade3] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupIcon1, setPopupIcon1] = useState(null);
  const [popupIcon2, setPopupIcon2] = useState(null);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState('');
  const [flag, setFlag] = useState(0);
  const [editButton, setEditButton] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState('https://bnetcmsus-a.akamaihd.net/cms/gallery/W94XAGJVK4871649353625265.jpg');
  const images = [
    'https://bnetcmsus-a.akamaihd.net/cms/gallery/W94XAGJVK4871649353625265.jpg',
    'https://bnetcmsus-a.akamaihd.net/cms/gallery/1BJ1QA72FCN61649353624113.jpg',
    'https://images6.alphacoders.com/553/553471.jpg',
    'https://www.pockettactics.com/wp-content/sites/pockettactics/2022/10/overwatch-2-maps-2.jpg',
    'https://assets-prd.ignimgs.com/2022/09/27/esperanca-portugal-003-1080-1664272798292.jpg'
  ];

  const handleShowPopup = (icon1, message, icon2, type, time) => {
    setPopupMessage(message)
    setPopupIcon1(icon1)
    setPopupIcon2(icon2)
    setPopupType(type)
    setShowPopup(true)
    setTimeout(() => {
      setShowPopup(false)
    }, time)
  }

  const topButton = () => {

  }

  const addAgent = () => {
    if (!name || !portraitAgent || !role) {
      handleShowPopup(<AiFillWarning />, 'Preencha todos os campos', <AiFillWarning />, 'error', 2000);
    } else {

      if (!isValid) {
        handleShowPopup(<BiSolidErrorAlt />, 'Imagem não encontrada', <BiSolidErrorAlt />, 'error', 2000);
      } else {
        handleShowPopup(null, 'Agente cadastrado', <BsUiChecks />, 'sucess', 3000)
        const novoAgente = new AgentModel(name, portraitAgent, role);

        if (!listaAgentes.some(agente => agente.name === name)) {
          const novosAgentes = [...listaAgentes, novoAgente];
          console.log(listaAgentes);
          setListaAgentes(novosAgentes);
          console.log(listaAgentes);
        }

        instanciaListaAgentes.addAgente(novoAgente);

        setname("");
        setrole("");
        setPortraitAgent("");
        //setDescricao("");
        //setArmadura("");
        //setVida("");
        //setEscudo("");
        //setHabilidade1("");
        //setHabilidade2("");
        //setHabilidade3("");
      }
    }
  };

  const clearInputs = () => {
    setname("");
    setrole("");
    setPortraitAgent("");
  }

  const removeAgent = (agente) => {
    instanciaListaAgentes.removeAgente(agente)
    setListaAgentes(instanciaListaAgentes.getList())
  }

  const edit = (id) => {
    console.log('edit', id);
    const agent = instanciaListaAgentes.getAgentPorId(id);
    setname(agent.name);
    setrole(agent.role);
    setPortraitAgent(agent.portrait);
    setEditButton(true);
    setFlag(id);
  }

  const update = () => {
    if (!name || !portraitAgent || !role) {
      handleShowPopup(<AiFillWarning />, 'Preencha todos os campos', <AiFillWarning />, 'error', 3000);
    } else {
      handleShowPopup(null, 'Agente Editado', < BsFillBookmarkCheckFill />, 'sucess', 1000)

      instanciaListaAgentes.updateAgent(flag, name, role, portraitAgent);

      setEditButton(false);
      setFlag(0);
      setname("");
      setrole("");
      setPortraitAgent("");
    }
  }

  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      try {
        const data = await overwatch();
        if (!ignore) {
          setApiData(data);
        }
      } catch (error) {

      }
    };
    fetchData();

    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    if (apiData) {
      apiData.forEach((agenteData) => {

        const novoAgente = new AgentModel(
          agenteData.name,
          agenteData.portrait,
          agenteData.role,
        );
        instanciaListaAgentes.addAgente(novoAgente);
      });

      const atualizarAgentes = [...listaAgentes, ...instanciaListaAgentes.getList()];
      setListaAgentes(atualizarAgentes);
      console.log(listaAgentes);
    }
  }, [apiData]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundImage(images[Math.floor(Math.random() * images.length)]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    apiData ? (
      <div className={styles.divBody} style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Header />
        <div id={styles.formCreateAgent1}>
          <div id={styles.formCreateAgent2}>
            <h2 className={styles.titlesForm}>Crie seu novo agente</h2>
            <input
              className={styles.inputs}
              type="text"
              placeholder="name do agente"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />

            <select className={styles.inputs}
              type="text"
              placeholder="role do agente"
              onChange={(e) => setrole(e.target.value)}
              value={role}>
              <option></option>
              <option>damage</option>
              <option>support</option>
              <option>tank</option>
            </select>

            <input
              className={styles.inputs}
              type="text"
              placeholder="URL da imagem"
              value={portraitAgent}
              onChange={(e) => setPortraitAgent(e.target.value)}
            />

            {/*<input
              className={styles.inputs}
              type="text"
              placeholder="descrição do Agente"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
    />

            <h3 className={styles.titlesForm}>Habilidades</h3>

            <input
              className={styles.inputs}
              type="text"
              placeholder="name da habilidade 1"
              value={habilidade1}
              onChange={(e) => setHabilidade1(e.target.value)}
            />

            <input
              className={styles.inputs}
              type="text"
              placeholder="name da habilidade 2"
              value={habilidade2}
              onChange={(e) => setHabilidade2(e.target.value)}
            />

            <input
              className={styles.inputs}
              type="text"
              placeholder="name da habilidade 3"
              value={habilidade3}
              onChange={(e) => setHabilidade3(e.target.value)}
            />

            <h3 className={styles.titlesForm}>Informações de vida</h3>

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
            />*/}
            <div id={styles.divBtn}>
              {editButton ? (
                <button className={styles.btns} onClick={update}>Editar</button>
              ) : (
                <div className={styles.divBtnAddClear}>
                <button className={styles.btns} onClick={addAgent}><BsFillPersonPlusFill /></button>
                <button className={styles.btns} onClick={clearInputs}><BsTrash3Fill /></button>
                </div>
              )
              }
            </div>
          </div>
          <div id={styles.warnings} className={styles.hidden}>
            <div id={styles.errorMensage}>
              {showPopup ? (
                <Popup
                  icon1={popupIcon1}
                  message={popupMessage}
                  icon2={popupIcon2}
                  type={popupType}
                />
              ) : (
                null
              )}
            </div>
          </div>
        </div>
        <div className={styles.smallCard}>
          <div className={styles.card1}>
            {listaAgentes.map((agent) => (
              <div className={styles.card2}>
                <Agent
                  key={agent.id}
                  name={agent.name}
                  portrait={agent.portrait}
                  role={
                    agent.role === 'support' ? (
                      <div className={styles.containerIcon}>
                        <div className={styles.styleIconsSupport}>
                          <img className={styles.iconsRoles} src='https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blt66cec9a29cd34e3d/62ea8957c87999116c02c674/Support.svg' />
                        </div>
                      </div>
                    ) : agent.role === 'tank' ? (
                      <div className={styles.containerIcon}>
                        <div className={styles.styleIconsTank}>
                          <img className={styles.iconsRoles} src='https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blt0f8b4fa502f0ea53/62ea8957ed429710b3d9b0b0/Tank.svg' />
                        </div>
                      </div>
                    ) : agent.role === 'damage' ? (
                      <div className={styles.containerIcon}>
                        <div className={styles.styleIconsDamage}>
                          <img className={styles.iconsRoles} src='https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/bltc1d840ba007f88a8/62ea89572fdd1011027e605d/Damage.svg' />
                        </div>
                      </div>
                    ) : (
                      <div className={styles.containerIcon}>
                        <div className={styles.styleIcons}>
                          Role desconhecido
                        </div>
                      </div>
                    )
                  }
                />
                <CompButton text={<BsFillPersonDashFill />} fn={() => removeAgent(agent)} />
                <CompButton text={<FaPencilAlt />} fn={() => edit(agent.id)} />
              </div>
            ))}
            {console.log(listaAgentes)}
          </div>
        </div>
        <div id={styles.containerBtnTop}>
          <button className={styles.btnTop} onClick={topButton}><GoMoveToTop /></button>
        </div>
        <Footer />
      </div>
    ) : (
      <ImageLoading />
    )
  );
};