export class User {
	constructor(task) {
		this.task = task;
	}

	do() {
		return this.task.run();
	}
}

class Task {
	constructor(name) {
		this.name = name;
	}

	run() {
		console.log(`Выполняется задача: ${this.name}`)
	}
}
