import { Component, OnInit } from '@angular/core';
import { todo } from './model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  name : string;
  city : string;
  editMode : boolean;
 // todo : todo = { name :'', city: '', date: new Date};
  todoList : todo[];
  constructor() {
    this.todoList = [
      {
        id : Math.random(),
        name : "hardik",
        city : "patel",
        date : new Date
      },
      {
         id : Math.random(),
         name : "bhavik",
         city : "patel",
         date : new Date
      }];
   }


  ngOnInit() {
  }

  saveTodoList()
  {
     const newTodo : todo = {
         id : Math.random(),
         name : this.name,
         city : this.city,
         date : new Date
     };
     if(!this.name && !this.city)
     alert("Please fill the field.!")
     else
      this.todoList.push(newTodo);
      this.name ="";
      this.city ="";
  }
//   editToDo(name){
//     this.editMode = true;
//  this.todoList.findIndex((value) => {
//         if(name === value.name){
//           this.name = value.name;
//           this.city = value.city;
//         }
//     })
//   }
  // updateTodo(id){
  //   const updateTodo : todo = {
  //     id : Math.random(),
  //     name : this.name,
  //     city : this.city,
  //     date: new Date
  //   }
  //   this.todoList.findIndex(findvalue =>{
  //     if(id === findvalue.id)
  //     {
  //       this.todoList.push(updateTodo);
  //       this.name ="";
  //       this.city ="";
  //       this.editMode = false;
  //     }
  //   })
  // }
  deleteTodo(i){
    this.todoList.splice(i,  1);
  }
}
