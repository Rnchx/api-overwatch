class ListAgente{
    constructor() {
        this.listAgents=[]
    }
    addAgente(agent){
        this.listAgents.push(agent)
    }
    getList(){
        return this.listAgents
    }
    removeAgente(agente){
        console.log('esse é o agente' + agente)
        console.log(this.listAgents)
        this.listAgents = this.listAgents.filter(item => item.id !== agente.id)
    }
}
export default ListAgente;