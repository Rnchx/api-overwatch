import Agents1 from "@/models/Agents";

function Form() {
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
            />

         <p>vida total:
            <p>calculando...</p>
         </p>

         
        </>

    )
}
export default Form;