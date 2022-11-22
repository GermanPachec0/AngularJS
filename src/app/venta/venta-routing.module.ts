import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialComponent } from '../compra/historial/historial.component';
import { NuevaVentaComponent } from './nueva-venta/nueva-venta.component';

const routes: Routes = [
  {path: '',children: [
    {path:'',redirectTo:'nueva',pathMatch:'full'},
    {path: 'nueva', component:NuevaVentaComponent},
    {path: 'historial', component:HistorialComponent},
  ],
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentaRoutingModule { }
