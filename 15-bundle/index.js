import { Task } from './task.js';
import { User } from './user.js';

const myTask = new Task('Убраться в комнате');
const user = new User(myTask);
user.do();