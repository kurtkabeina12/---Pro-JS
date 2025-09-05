'use strict'

const Person = function (race, name, language) {
    this.race = race,
        this.name = name,
        this.language = language,
        this.sayHi = function () {
            return (this.language + this.name);
        }
}

const Ork = new Person('orc', 'Lilu', 'ru');

Ork.prototype.Bit = function () {
    return (Ork.name + 'bit you');
}


const Elf = new Person('elf', 'Lulu', 'ru');

Elf.prototype.chooseFirework = function () {

}
console.log(Ork.sayHi());
console.log(Elf.sayHi());