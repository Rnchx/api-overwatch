"use client"
import Agent from "@/models/Agents";
import ListAgente from "@/models/listAgente";
import { useEffect, useState } from "react";
import overwatch from "@/data/overwatchClass";

const instanciaListaAgentes = new ListAgente()

function Form() {

    const [listaAgentes, setListaAgentes] = useState([]);

    const [apiData, setApiData] = useState(null);
    const [nome, setNome] = useState(null);
    const [portraitAgent, setPortraitAgent] = useState("")
    const [descricao, setDescricao] = useState("");
    const [armadura, setArmadura] = useState("");
    const [vida, setVida] = useState("");
    const [escudo, setEscudo] = useState("");
    const [especialidade, setEspecialidade] = useState("");
    const [nacionalidade, setNacionalidade] = useState("");
    const [habilidade1, setHabilidade1] = useState("");
    const [habilidade2, setHabilidade2] = useState("");
    const [habilidade3, setHabilidade3] = useState("");
    const [btnEdit, setBtnEdit] = useState([]);



    const addAgent = () => {
        const novoAgente = new Agent(nome, portraitAgent, descricao, armadura, vida, escudo, especialidade, nacionalidade, habilidade1, habilidade2, habilidade3);


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
        setNacionalidade("");
        setHabilidade1("");
        setHabilidade2("");
        setHabilidade3("");
    };

    const removeAgent = (agente) => {
        instanciaListaAgentes.removeAgente(agente)
        setListaAgentes(instanciaListaAgentes.getList)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await overwatch();
                setApiData(data);
            } catch (error) {

            }
        };
        fetchData()
    }, []);


    useEffect(() => {
        if (apiData && apiData.data) {
            apiData.data.forEach((agenteData) => {
                const novoAgente = new Agent(
                    agenteData.nome,
                    agenteData.portraitAgent,
                    agenteData.descricao,
                    agenteData.armadura,
                    agenteData.vida,
                    agenteData.escudo,
                    agenteData.especialidade,
                    agenteData.nacionalidade,
                    agenteData.habilidade1,
                    agenteData.habilidade2,
                    agenteData.habilidade3,
                );
                instanciaListaAgentes.addAgente(novoAgente);
            });

            const atualizarAgentes = [...listaAgentes, ...instanciaListaAgentes.getList()];
            setListaAgentes(atualizarAgentes);
        }
    }, [apiData]);


    return (
        <>
            <h2>Crie seu novo agente abaixo!</h2>

            <input
                type="text"
                placeholder="nome do agente"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />

            <input
                type="text"
                placeholder="URL da imagem"
                value={portraitAgent}
                onChange={(e) => setPortraitAgent(e.target.value)}
            />

            <input
                type="text"
                placeholder="descrição do Agente"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
            />

            <h3>Habilidades:</h3>

            <input
                type="text"
                placeholder="nome da habilidade 1"
                value={habilidade1}
                onChange={(e) => setHabilidade1(e.target.value)}
            />

            <input
                type="text"
                placeholder="nome da habilidade 2"
                value={habilidade2}
                onChange={(e) => setHabilidade2(e.target.value)}
            />

            <input
                type="text"
                placeholder="nome da habilidade 3"
                value={habilidade3}
                onChange={(e) => setHabilidade3(e.target.value)}
            />

            <h3>Informações de vida.</h3>

            <input
                type="number"
                placeholder="quantidade de vida"
                value={vida}
                onChange={(e) => setVida(e.target.value)}
            />

            <input
                type="number"
                placeholder="quantidade de armadura"
                value={armadura}
                onChange={(e) => setArmadura(e.target.value)}
            />

            <input
                type="number"
                placeholder="quantidade de escudo"
                value={escudo}
                onChange={(e) => setEscudo(e.target.value)}
            />

            <input
                type="text"
                placeholder="nacionalidade do agente"
                value={nacionalidade}
                onChange={(e) => setNacionalidade(e.target.value)}
            />

            <button onClick={addAgent()}>Adicionar Agente!</button>
            <button onClick={removeAgent()}>Deletar Agente!</button>

        </>

    )
}
export default Form;