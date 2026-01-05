'use strict'

class Person {
    race;
    name;
    language;

    constructor(race, name, language){
        this.race = race;
        this.name = name;
        this.language = language;
    }

    sayHi(){
        return `${this.language} + ${this.name}`
    }
}

class Orc extends Person{
    #weapon;
    constructor(name, language, weapon){
        super(name, language)
        this.#weapon = weapon;
    }

    attack(){
        console.log(this.name + ' атакует с ' + this.#weapon);
    }
}

class Elf extends Person{
    #typemagic;

    constructor(name, language, typemagic){
        super(name, language)
        this.#typemagic = typemagic;
    }

    createMagic() {
    console.log(this.name + ' создает заклинание ' + this.#typemagic);
    }
}

const orc = new Orc('Lilu', 'ru', 'sword');
const elf = new Elf('Lulu', 'ru', 'fire');
orc.attack();
elf.createMagic();
