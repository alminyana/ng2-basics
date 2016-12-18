import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
	todos;
	text;
	appState = 'default';
	oldText;
  	constructor(private _todoService: TodoService) {  }

  	ngOnInit() {
  		this.todos = this._todoService.getTodos();
  	}

  	addTodo() {
  		var newTodo = {
  			text: this.text
  		}
  		this.todos.push(newTodo);

  		this._todoService.addTodo(newTodo);
  		this.text = null;
  	}
  	deleteTodo(todo) {
  		for(var i =0; i<this.todos.length; i++) {
  			if (this.todos[i].text == todo) {
				this.todos.splice(i, 1);
  			}
  		}
  		this._todoService.deleteTodo(todo);

  	}
  	editTodo(todo) {
  		this.appState= 'edit';
  		this.oldText = todo.text;
  		this.text = todo.text;
  	}

  	setAppState(state){
  		this.appState = state;
  		this.text = '';

  	}

  	updateTodo() {
  		for(var i =0; i<this.todos.length; i++) {
  			if (this.todos[i].text == this.oldText) {
				this.todos[i].text = this.text;
  			}
  		}
  		var newTodo = {
  			text: this.text
  		};
  		console.log(newTodo);
  		this._todoService.updateTodo(this.todos);

  	}

}
