import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructural',
  templateUrl: './estructural.component.html',
  styleUrls: ['./estructural.component.css']
})
export class EstructuralComponent implements OnInit {

  constructor() { }

  isError = false;
  sections =[
   {id:1,name:'intro',duracion:'10'},
  


  ]
  ngOnInit(): void {
      setTimeout(() => {
        this.sections.push(   {id:1,name:'Usos de angular',duracion:'10'},
        {id:1,name:'Uses',duracion:'10'},
        {id:1,name:'JAJA',duracion:'10'})  
      
      },4000 );

  }
  showError() {
    this.isError = true;
  }
  

}
