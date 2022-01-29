import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo';

import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  
  @Input()
  items: Todo[] | undefined;
 
  


  
  
  constructor(public todolistService:TodoListService) { }

  ngOnInit(): void {
    this.items=this.todoitems;
     


}

todoitems=this.todolistService.TodoList;

public removeItem(index:any) {
  this.todoitems.splice(index, 1);
}



}
