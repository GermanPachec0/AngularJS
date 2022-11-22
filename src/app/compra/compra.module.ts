import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { NuevaCompraComponent } from './nueva-compra/nueva-compra.component';
import { HistorialComponent } from './historial/historial.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListadoComponent,
    NuevaCompraComponent,
    HistorialComponent
  ],
  exports: [ListadoComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CompraModule { }
