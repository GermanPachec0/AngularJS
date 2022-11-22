import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { EstructuralComponent } from './estructural/estructural.component';
import { ListadoComponent } from './compra/listado/listado.component';
import { NuevaCompraComponent } from './compra/nueva-compra/nueva-compra.component';
import { HistorialComponent } from './compra/historial/historial.component';
import { AuthGuard } from './auth.guard';
import { VentaModule } from './venta/venta.module';
import { FormulariosComponent } from './formularios/formularios.component';
import { TodosComponent } from './todos/todos.component';



export const routes: Routes = [
  {path:'',redirectTo: 'pipes',pathMatch:'full'},
  {path:'pipes',component: PipesComponent},
  {path:'estructural',component: EstructuralComponent},
  {path:'compra',component:ListadoComponent, 
  canActivate:[AuthGuard],
  children:[  
    {path:'nueva',component:NuevaCompraComponent},
    {path:'historial',component:HistorialComponent}
  ]},
  {path:'venta', loadChildren:() => import('./venta/venta.module').then((m) => m.VentaModule)},
  {path:'formularios',component: FormulariosComponent},
  {path:'todos',component: TodosComponent},


];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule { }
