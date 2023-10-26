"use client"
import Agents1 from "@/models/Agents";
import ListAgente from "@/models/listAgente";
import { useState } from "react";

const [listaAgente, setListaAgentes] = useState([])

function Form() {
    const [listAgente, setLista] = ([])

    const [nome, setNome] = useState(null);
    const [descricao, setDescricao] = useState("");
    const [pontosDeVida, setPontosDeVida] = useState("");
    const [armadura, setArmadura] = useState("");
    const [vida, setVida] = useState("");
    const [escudos, setEscudo] = useState("");
    const [especialidade, setEspecialidade] = useState("");
    const [localizacao, setLocalizacao] = useState("");
    const [habilidades, setHabilidades] = useState("");
    const [] = useState("");



    const addAgente = () => {
        const novoAgente = new Agents1(nome, descricao, pontosDeVida, armadura, vida, escudos, especialidade, localizacao, habilidades);


        if (!listaAgente.some(agente => agente.nome === nome)) {
            const novosAgentes = [...ListAgente, novoAgente];
            setListaAgentes(novosAgentes);
        } const newagent = [...listaAgente, novoAgente];
        setListaAgentes(newagent);
    }
    
    addList.addAgente(novoAgente);


    return (
        <>
            <h2>Crie seu personagem abaixo!</h2>
            <label>Nome:</label>
            <input
                type="text"
                name="nome"
                value={Agents1.nome}
            />
            <label>Descrição:</label>
            <input
                type="text"
                descricao="descricao"
                value={Agents1.descricao}
            />
            <label>Habilidades:</label>
            <input
                type="text"
                habilidade="habilidade"
                value={Agents1.habilidade}
            />
            <h3>Informações de vida.</h3>
            <label>vida:</label>
            <input
                type="text"
                name="nome"
                value={Agents1.nome}
            />
            <label>Nascionalidade:</label>
            <input
                type="text"
                localizacao="localizacao"
                value={Agents1.localizacao}
            />
            <label>Escudo:</label>
            <input
                type="text"
                escudo="escudo"
                value={Agents1.escudo}
            />  <button onClick={addAgente}>Adicionar Agente!</button>
            <button>Deletar Agente!</button>

            <p>vida total: </p>

        </>

    )
}
export default Form;