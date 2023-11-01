class Agent {
    constructor(name, portrait, role) {
        this.name = name;
        this.portrait = portrait;
        this.role = role;
        this.id = this.generateId()
    }

    generateId = () => {
        return Math.floor(Math.random() * 10000);
    }

    console(){
        
    }
}
export default Agent;