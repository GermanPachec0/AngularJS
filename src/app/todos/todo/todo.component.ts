import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.posts$.pipe(
      map((res:number[]) => {
        console.log(res)
        return res.filter((num) => num > 3)
        
      }),
      tap(res => {console.log("desde el tap" ,res)})
    ).
    subscribe(res => {console.log(res)})

  }

}
