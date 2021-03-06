import { Injectable } from '@angular/core';
import { Init } from './init-todos';

@Injectable()
export class TodoService extends Init {

  constructor() {
  	super();
  	console.log('TodoService intialized......');
  	this.load();
  }

  getTodos() {
  	var todos = JSON.parse(localStorage.getItem('todos'));
  	return todos;
  }

  addTodo(todo) {
  	var todos = JSON.parse(localStorage.getItem('todos'));

  	todos.push(todo);

  	localStorage.setItem('todos', JSON.stringify(todos));

  }

  deleteTodo(todo) {
  	var todos = JSON.parse(localStorage.getItem('todos'));
  	for(var i =0; i<todos.length; i++) {
		if (todos[i].text == todo) {
		todos.splice(i, 1);
		}
	}
	localStorage.setItem('todos', JSON.stringify(todos));

  }

  updateTodo(todos){
	localStorage.setItem('todos', JSON.stringify(todos));
  }


}
