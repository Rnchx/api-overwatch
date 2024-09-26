import React from 'react'

class FormsRegister {
    constructor(name, description, portrait, role, location, hitpoints, shields, health, armor,
        total, abilities) {
        this.name = name;
        this.description = description;
        this.portrait = portrait;
        this.role = role;
        this.location = location;
        this.hitpoints = hitpoints;
        this.shields = shields;
        this.health = health;
        this.total = total;
        this.armor = armor; 
        this.abilities = abilities; 
        
    }
}
class ListRegiste {
    constructor() {
        this.listRegister = []
    }
}




export default FormsRegister