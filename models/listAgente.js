"use client"

class ListAgente{
    constructor() {
        this.listAgents=[]
    }
    addAgente(agent){
        this.listAgents.push(agent)
        console.log("Lista Agente Class",this.listAgents)
    }
    getList(){
        return this.listAgents
    }
    removeAgente(agente){
        this.listAgents = this.listAgents.filter(item => item.id !== agente.id)
        console.log("Lista Agente Class",this.listAgents)
    }
}
export default ListAgente;