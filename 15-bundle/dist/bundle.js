(function () {
    'use strict';

    class Task {
        constructor(name) {
            this.name = name;
        }

        run() {
            console.log(`Выполняется задача: ${this.name}`);
        }
    }

    class User {
    	constructor(task) {
    		this.task = task;
    	}

    	do() {
    		return this.task.run();
    	}
    }

    const myTask = new Task('Убраться в комнате');
    const user = new User(myTask);
    user.do();

})();
