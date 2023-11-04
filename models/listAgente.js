'use client'

class ListAgente {
    constructor() {
        this.listAgents = []
    }
    addAgente(agent) {
        console.log(agent);
        this.listAgents.push(agent)
        console.log("Na class", this.listAgents)
    }

    getList() {
        return this.listAgents
    }

    removeAgente(agente) {
        console.log('esse é o agente' + agente)
        console.log(this.listAgents)
        this.listAgents = this.listAgents.filter(item => item.id !== agente.id)
    }

    getAgentPoId(id) {
        const agent = this.listAgents.find((agent) => agent.id == id);

        return agent;
    }

    updateAgent(id, name, role, portrait) {
        const agent = this.getAgentPoId(id);

        if(agent) {
            agent.nome = name;
            agent.role = role;
            agent.portrait = portrait;
        }

        this.updateAgent();

        return agent;
    }
}
export default ListAgente;