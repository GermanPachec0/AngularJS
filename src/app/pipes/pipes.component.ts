import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  name = "Pache";
  surname ="German";
  date = '2020-02-20T13:59:31.2354';
  estado = 0;
  constructor() { }

  ngOnInit(): void {
  }

  changeState(){
    this.estado = 1;
  }



}
