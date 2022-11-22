import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  todos : any = [];
  ngOnInit(): void {
    /*
    this.todoService.getTodos().subscribe((res :any)  => {console.log(res)
    this.todos = res;
  });

  this.todoService.getCommnets(1).subscribe(res => {console.log(res)})

  this.todoService.getPosts().subscribe(res => {console.log(res)});
 */
}
 
updatePost(){
  this.todoService.postSource.next([1,2,3,4,5]);
}


 

}
