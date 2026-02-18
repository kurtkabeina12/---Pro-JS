const { Task } = require('./task')
const { User } = require('./user')

const myTask = new Task('Убраться в комнате');
const user = new User(myTask);

const result = user.do();
console.log(result); 