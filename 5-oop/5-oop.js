'use strict'

const Person = function (race, name, language) {
    this.race = race,
        this.name = name,
        this.language = language
}

Person.prototype.sayHi = function () {
    return (this.language + this.name);
}

const Orc = function (name, language, weapon) {
    Person.call(this, 'orc', name, language);
    this.weapon = weapon;
}

Orc.prototype = Object.create(Person.prototype);
Orc.prototype.constructor = Orc;

Orc.prototype.attack = function () {
    console.log(this.name + ' атакует с ' + this.weapon);
};

const Elf = function (name, language, typemagic) {
    Person.call(this, 'elf', name, language);
    this.typemagic = typemagic;
}

Elf.prototype = Object.create(Person.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.createMagic = function () {
    console.log(this.name + ' создает заклинание ' + this.typemagic);
};

const Orc1 = new Orc('Lilu', 'ru', 'sword');
const Elf1 = new Elf('Lulu', 'ru', 'fire');
console.log(Orc1)
console.log(Elf1)
Orc1.attack();
Elf1.createMagic();