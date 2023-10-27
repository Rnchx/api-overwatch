class Agent {
    constructor(nome, descricao, armadura, vida, escudos, especialidade, localizacao, habilidade1, habilidade2, habilidade3) {
        this.nome = nome;
        this.descricao = descricao;
        this.armadura = armadura;
        this.vida = vida;
        this.escudos = escudos;
        this.especialidade = especialidade;
        this.localizacao = localizacao;
        this.habilidade1 = habilidade1;
        this.habilidade2 = habilidade2;
        this.habilidade3 = habilidade3;
        this.id = this.generateId()
    }

    generateId = () => {
        return Math.floor(Math.random() * 10000);
    }
}
export default Agent;