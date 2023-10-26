"use client"

class ListAgente{
    constructor(){
        this.listAgent=[]
    }
    addAgente(agents){
        this.listAgent.push(agents)
        console.log("Lista de Agentes", this.listAgent)
    }
    getList(){
        return this.listAgent
    }
    remuveAgente(agents){
        this.listAgent= this.listAgent.filter(persona => persona.id !== agents.id)

    }
}
export default ListAgente;