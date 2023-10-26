class Agents1 {
    constructor(nome, descricao, pontosDeVida, armadura, vida, escudos, especialidade, localizacao, habilidades) {
        this.nome = nome;
        this.descricao = descricao;
        this.pontosDeVida = pontosDeVida;
        this.armadura= armadura;
        this.vida = vida;
        this.escudos =escudos;
        this.especialidade = especialidade;
        this.localizacao =  localizacao;
        this.habilidades =habilidades;
        this.id= generateId()
    }
    
    generateId(){
        return Math.floor(Math.random() * 10000);
    }
}
export default Agents1;