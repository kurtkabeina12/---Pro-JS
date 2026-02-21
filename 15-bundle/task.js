export class Task {
    constructor(name) {
        this.name = name;
    }

    run() {
        console.log(`Выполняется задача: ${this.name}`)
    }
}
