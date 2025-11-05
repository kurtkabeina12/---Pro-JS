class Car{
    #mark;
    #model;
    #_probeg;

    constructor(mark, model, probeg){
        this.#mark = mark;
        this.#model = model;
        this.#probeg = probeg;
    }

    set #probeg(probeg){
        this.#_probeg = probeg
    }

    get #probeg(){
        return this.#_probeg
    }

    changeProbeg(newProbeg){
        this.#probeg = newProbeg;
        return 'Пробег обновлен'
    }

    info(){
        return `Марка машины: ${this.#mark}, Модель машины: ${this.#model},Пробег: ${this.#probeg}`
    }
}

const car = new Car('posh', '911', '12000');
console.log(car.info())
console.log(car.changeProbeg(12001))
console.log(car.info())
