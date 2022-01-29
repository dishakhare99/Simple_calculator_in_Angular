import { Injectable } from '@angular/core';
import { Todo } from './todo';


@Injectable({
  providedIn: 'root'
})
export class TodoListService {



  allItems : Todo[]= [
    { title: 'study', date: '10-10-2020' },
    { title: 'sleep',date: '10-10-2020'},
    { title: 'play', date: '10-10-2020' },
    { title: 'laugh', date: '10-10-2020' },
    { title: 'repeat', date: '10-10-2020' },
  ];
   
  

  constructor() { }

  get TodoList():Todo[] {
    return this.allItems;
  }
}
